bootstrap-star-rating
=====================

A simple yet powerful JQuery star rating plugin for Twitter Bootstrap. Developed with a focus on utlizing pure CSS-3 styling to render the control.

## Features  
1. Convert any HTML input to a star rating.You preferrably should use an input of `type = number` - for browsers not supporting JQuery or Javascript.
2. Involves pure CSS3 styling of the stars. Say goodbye to image sprites or playing with image backgrounds. Offers clean scalable vector icons for consistent display across devices.
3. Specifically uses Twitter Bootstrap 3.x styles & glyphs. Can be combined to work better for Bootstrap styled projects (or input group addons).
4. Ability to reset values and options for the stars. Control where the reset button element can be shown.
5. Ability to control and display caption of the selected stars. Each rated star can have its own caption. Control where the caption element can be shown.
6. Ability to size the rating control including the stars, caption, and reset button. Five prebuilt size templates are available `xl`, `lg`, `md`, `sm`, and `xs`.
7. Triggers JQuery events for advanced development. Events currently available are `rating.change` and `rating.reset`
8. Support for RIGHT TO LEFT (RTL) input. Automatically changes star styling for RTL.
9. Disabled and readonly input star rating support.
10. Size of the entire plugin is less than 8KB (5KB for the minified JS and 3KB for the minified CSS).

## Pre-requisites  
1. [Twitter Bootstrap 3.x](http://getbootstrap.com/)
2. Latest [JQuery](http://jquery.com/)
3. Most modern browsers supporting CSS3 & JQuery. For Internet Explorer, one must use IE versions 9 and above.

## Restrictions
The plugin supports only whole filled (or empty) stars and not partially filled stars. This is probably an enhancement to be planned for future.

## Installation
The preferred way to install this plugin is using `composer` package manager. Either run

    $ php composer.phar require kartik-v/bootstrap-star-rating "dev-master"

or add:

    "kartik-v/bootstrap-star-rating": "dev-master"

to your composer.json file

You can also manually install the plugin easily to your project. Just use the ZIP/TAR ball links to download the assets (css and js folders) into your project.

## Usage
Load the following assets in your header. In addition to the 

    <link href="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet">
    <link href="path/to/css/star-rating.min.css" media="all" rel="stylesheet" type="text/css" />
    <script src="path/to/js/star-rating.min.js" type="text/javascript"></script>;

Initialize the plugin on your page.

    // initialize with defaults
    $("#input-id").rating();
    
    // with plugin options
    $("#input-id").rating(['min'=>1, 'max'=>10, 'step'=>2, 'size'=>'lg']);

Or you can directly initialize the plugin options via data attributes.

    <input id="input-id" type="number" data-size="lg" >

## Documentation & Demo

In Process


## License

**bootstrap-star-rating** is released under the BSD 3-Clause License. See the bundled `LICENSE.md` for details.
