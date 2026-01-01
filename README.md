### Setup

Install Spicetify at https://spicetify.app/docs/getting-started and follow the normal setup steps (for Linux/Mac make sure to add `~/.spicetify/spicetify` to `PATH` via `export PATH="$PATH:~/.spicetify/spicetify"`).

### Usage

For the main part of the theme/extensions, open Spotify and navigate to the marketplace (shopping cart icon in the top left). Click on the marketplace settings icon (gear in the sub-window, not the main Spotify settings). Open the Backup/Restore option menu and import with file, pointing it at `marketplace-settings-snapshot-*.json`.

To get the pixelated color filter effect on all playlist/album art, move `pixelated-duotone.js` to the extensions folder (`~/.spicetify/Extensions` on MacOS), then run
```
> spicetify config extensions pixelated-duotone.js
> spicetify apply
```
The colors can be changed by modifying `color1` and `color2` in `pixelated-duotone.js`.
