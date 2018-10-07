# OctoberCMS Starter Theme

This theme uses [Laravel Mix](https://laravel-mix.com/) for asset bundling. The [OctoberMix](https://github.com/voveson/oc-octobermix) plugin is required in order to leverage Mix's asset versioning. You can customize functionality by editing `webpack.mix.js`.

## Installation

Run `npm install` to bring in package dependencies.

## Development

Running `npm run watch` will compile assets in development mode and watch files for changes.

## Production

Running `npm run prod` will compile assets for production. This command also adds a version hash to compiled assets, and updates `mix-manifest.json`.
