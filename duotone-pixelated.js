(function pixelatedDuotoneImages() {
    // note that combining the duotone and pixelation extensions didn't work, so i had to merge the two
    // credit to https://github.com/ohitstom/spicetify-extensions/blob/main/pixelatedImages/pixelatedImages.js
    // for majority of code below

    const svgNS = "http://www.w3.org/2000/svg";

    // duotone
    const color1 = { r: 0, g: 0, b: 0 }; // dark (black)
    const color2 = { r: 95 / 255, g: 135 / 255, b: 255 / 255 }; // light (cornflower x256 color)

    const filterElement = document.createElementNS(svgNS, "filter");
    filterElement.setAttribute("id", "pixelate-duotone");
    filterElement.innerHTML = `
        <!-- pixelation -->
        <feFlood x="0" y="0" height="2" width="2" />
        <feComposite width="10" height="10" />
        <feTile result="pixels" />
        <feComposite in="SourceGraphic" in2="pixels" operator="in" />
        <feMorphology operator="dilate" radius="5" result="pixelated"/>

        <!-- duotone filter, edit colors above by normalizing whatever hex value desired -->
        <feColorMatrix in="pixelated" type="saturate" values="0" result="gray"/>
        <feComponentTransfer in="gray" result="duotone">
            <feFuncR type="table" tableValues="${color1.r} ${color2.r}"/>
            <feFuncG type="table" tableValues="${color1.g} ${color2.g}"/>
            <feFuncB type="table" tableValues="${color1.b} ${color2.b}"/>
        </feComponentTransfer>
    `;

    // Append SVG filter to body
    const svgElement = document.createElementNS(svgNS, "svg");
    svgElement.setAttribute("style", "height:0; width:0; position:absolute;");
    svgElement.appendChild(filter_element);
    document.body.appendChild(svgElement);

    // Apply CSS style
    const cssStyleElement = document.createElement("style");
    cssStyleElement.textContent = `img { filter: url('#pixelateDuotone'); }`;
    document.head.appendChild(cssStyleElement);
})();