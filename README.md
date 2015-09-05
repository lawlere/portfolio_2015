# Emma Lawler Portfolio 2015
[![Circle CI](https://circleci.com/gh/lawlere/portfolio_2015.svg?style=svg)](https://circleci.com/gh/lawlere/portfolio_2015)

## Code Stuff
### Installation

Install [nodejs and npm](http://nodejs.org/download/) (they come together), then [install grunt-cli](http://gruntjs.com/getting-started).

Then just run `make` in the root directory of this project to build and create a dev server

### Usage

To run the dev server, in the root of the directory run `make`. This will build all of the files and start a dev server at [localhost:8000](http://localhost:8000).


### Deployment

Build the website with `make build`. The final website will be outputted in the `/build/` folder.

## Contributing

In general: 

* Modify files in the `/src/` folder
* Only modify `.less` files - do not modify `.css` files directly.

### How to add another section

* Pick an **id** for the section, e.g. "fitstar"
* In `src/js/app.js` - register the config values. The key should be the id and the value should copy the prior formats to configure where the footer button links to and its label.
* In the folder`src/img/carousel/`: Add an "active" image format (when the section is open) as `ID_spike.png`, e.g. "kubmo_spike.png". Add an "inactive" image format (when the section is collapsed) as `ID_square.png` - e.g. "kubmo_square.png"
* Add a button in the `jobs-carousel` for section. The id of the image should be `ID-hero`, e.g. "kubmo-hero". The html image source should be the inactive image.
* Add an html template for the section to `src/templates` as `ID.html` - e.g. "kubmo.html"
* High five

## Source

This repo started with [mrcoles' grunt project](https://github.com/mrcoles/static-less-coffeescript-grunt-project).


