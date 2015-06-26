# Emma Lawler Portfolio

## Source

This forks [mrcoles' grunt project](https://github.com/mrcoles/static-less-coffeescript-grunt-project)


### Installation

Install [nodejs and npm](http://nodejs.org/download/) (they come together), then [install grunt-cli](http://gruntjs.com/getting-started).

Then just run `npm install` in the root directory of this project.

### Usage

Auto-compile `.less` and `.coffee` files from the `src/less/` and `src/coffee` folders (and place the results in `src/css/` and `src/js/`).

    grunt watch

    Build the project into the `dist/` folder: compile `.less` and `.coffee` files, run jshint, and combine any static assets that are specified in `build` HTML comments (see examples in src/index.html) with versioned file names (for safe caching).

        grunt

        ### Notes

        The project expects a specific structure of all development files inside the `src/` folder, just one HTML file as `index.html`, and specific names for the packaged and minified assets. Look in `Gruntfile.js` for more details and to change settings/functionality.

        If you want to store files directly in `src/css/` or `src/js/`, then make sure to remove the ignores for them inside the `.gitignore` file.

