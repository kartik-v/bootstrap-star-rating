bootstrap-star-rating
=====================

A JQuery star rating plugin for Twitter Bootstrap. Developed with a focus on utlizing pure CSS-3 styling to render the control.

## Features
1. Initialize star rating on any HTML input (preferrably `type = number`)
2. Pure CSS3 styling of the stars (no PNG images) with scalable vector icons
3. Uses Twitter Bootstrap 3.x styles & glyphs.
4. Control reset value and options for the stars
5. Control caption of the selected stars
6. Control sizes of the selected stars
7. Supports JQuery events 'rating.change' and 'rating.reset'
8. Support for RIGHT TO LEFT (RTL) input.

## Pre-requisites
1. [Twitter Bootstrap 3.x](http://getbootstrap.com/)
2. Latest [JQuery](http://jquery.com/)
3. Browser supporting IE versions (IE9 or higher)

## Installation
###  Composer Install
You can use the composer package manager to install. Either run

    $ php composer.phar require kartik-v/bootstrap-star-rating "dev-master"

or add

    "kartik-v/bootstrap-star-rating": "dev-master"

to your composer.json file

###  Bower Install
You can also install this using the bower package manager.

    bower install bootstrap-star-rating --save


###  Manual
Download the assets (css and js folders) into your project and call the assets in your page.

    <link href="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet">
    <link href="path/to/css/star-rating.min.css" media="all" rel="stylesheet" type="text/css" />
    <script src="path/to/js/star-rating.min.js" type="text/javascript"></script>;

## Usage
Load bootstrap and assets in your header

    <link href="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet">
    <link href="path/to/css/star-rating.min.css" media="all" rel="stylesheet" type="text/css" />
    <script src="path/to/js/star-rating.min.js" type="text/javascript"></script>;

Initialize the plugin for your page.

    $("#input-id").rating({plugin-options});


## Documentation & Demo
In Process


## License

**bootstrap-star-rating** is released under the BSD 3-Clause License. See the bundled `LICENSE.md` for details.
