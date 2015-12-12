bootstrap-star-rating
=====================

[![Bower version](https://badge.fury.io/bo/bootstrap-star-rating.svg)](http://badge.fury.io/bo/bootstrap-star-rating)
[![Latest Stable Version](https://poser.pugx.org/kartik-v/bootstrap-star-rating/v/stable)](https://packagist.org/packages/kartik-v/bootstrap-star-rating)
[![License](https://poser.pugx.org/kartik-v/bootstrap-star-rating/license)](https://packagist.org/packages/kartik-v/bootstrap-star-rating)
[![Packagist Downloads](https://poser.pugx.org/kartik-v/bootstrap-star-rating/downloads)](https://packagist.org/packages/kartik-v/bootstrap-star-rating)
[![Monthly Downloads](https://poser.pugx.org/kartik-v/bootstrap-star-rating/d/monthly)](https://packagist.org/packages/kartik-v/bootstrap-star-rating)

A simple yet powerful JQuery star rating plugin for Bootstrap which supports advanced features like fractional star fill and RTL input support. 
Developed with a focus on utlizing pure CSS-3 styling to render the control. The plugin uses Bootstrap markup and styling by default, but it 
can be overridden with any other CSS markup. View the [documentation](http://plugins.krajee.com/star-rating) or a [complete demo](http://plugins.krajee.com/star-rating/demo) 
at Krajee JQuery plugins. 

![Star Rating Screenshot](https://lh6.googleusercontent.com/-DHlzpGa1SQU/U8ywh-ZEfVI/AAAAAAAAAJ0/ZwBxK1nH8Fw/w519-h426-no/bootstrap-star-rating.jpg)

## Features  

- Convert any HTML input to a star rating control. 
- The plugin automatically converts an input to a star rating control if you set its `class = rating`. 
  All options to the input can be passed as HTML5 `data` attributes.
- You can use the HTML 5 number input for polyfill and the plugin will automatically use the number attributes like `min`, `max`, and `step`.
  However, number inputs have a problem with decimal values on the Chrome Browser. Read the Browser Support section below.
- Involves pure CSS3 styling of the stars. Say goodbye to image sprites or playing with image backgrounds. Offers clean scalable vector 
  icons for consistent display across devices. Optionally one can use the Unicode character set to override symbols.
- Use any of your favorite font icon frameworks to render your star symbols (for example you can easily use the icons from the FontAwesome library).
- Render and display fractional star ratings. Configure number of stars, min, max, step, and theoretically  support any fractional rating.
- Uses Bootstrap 3.x styles & glyphs by default. But this can be overridden with plugin parameters and your own CSS styles.
- Support for RIGHT TO LEFT (RTL) input. Automatically changes star styling for RTL.
- Ability to clear values and options for the stars. Control where the clear button element can be shown.
- Reset star rating to the initial value when the form is reset.
- Ability to control and display caption of the selected stars. Each rated star can have its own caption. Control where the 
  caption element can be shown.
- Ability to size the rating control including the stars, caption, and clear button. Five prebuilt size templates are 
  available `xl`, `lg`, `md`, `sm`, and `xs`.
- Triggers JQuery events for advanced development. Events currently available are `rating.change`, `rating.clear`, `rating.reset`, `rating.refresh`, `rating.hover`, and `rating.hoverleave`.
- Disabled and readonly input star rating support.
- Change stars and caption on mouse hover (new feature since v3.0.0).
- Change stars and caption on slide and drag for mobile/touch devices (new feature since v3.1.0).
- Support for translations and locales.

> NOTE: Refer [change log](https://github.com/kartik-v/bootstrap-star-rating/blob/master/CHANGE.md) for details on plugin enhancements, fixes, and changes.

## Documentation and Demo

View the [plugin documentation](http://plugins.krajee.com/star-rating) and [plugin demos](http://plugins.krajee.com/star-rating/demo) at Krajee JQuery plugins. 

## Pre-requisites  

1. [Bootstrap 3.x](http://getbootstrap.com/)
2. Latest [JQuery](http://jquery.com/)
3. Most browsers supporting CSS3 & JQuery. 

## Installation

### Using Bower
You can use the `bower` package manager to install. Run:

    bower install bootstrap-star-rating

### Using Composer
You can use the `composer` package manager to install. Either run:

    $ php composer.phar require kartik-v/bootstrap-star-rating "@dev"

or add:

    "kartik-v/bootstrap-star-rating": "@dev"

to your composer.json file

### Manual Install

You can also manually install the plugin easily to your project. Just download the source [ZIP](https://github.com/kartik-v/bootstrap-star-rating/zipball/master) or [TAR ball](https://github.com/kartik-v/bootstrap-star-rating/tarball/master) and extract the plugin assets (css and js folders) into your project.

## Usage

Step 1: Load the following assets in your header. 

```html
<link href="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
<link href="path/to/css/star-rating.min.css" media="all" rel="stylesheet" type="text/css" />
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="path/to/js/star-rating.min.js" type="text/javascript"></script>
<!-- optionally if you need translation for your language then include locale file as mentioned below -->
<script src="path/to/js/star-rating_locale_<lang>.js"></script>
```

If you noticed, you need to load the `jquery.min.js` and `bootstrap.min.css` in addition to the `star-rating.min.css` and `star-rating.min.js` for
the plugin to work with default settings.

Step 2: Setup your input markup to automatically initialize the rating
```html
<input id="input-id" type="number" class="rating" min=0 max=5 step=0.5 data-size="lg" >
```

Step 3: Initialize the plugin on your page for other input types. For example,

```js
// initialize with defaults
$("#input-id").rating();

// with plugin options
$("#input-id").rating({'size':'lg'});
```

The `#input-id` is the identifier for the input (e.g. `type=number`) on your page, which is hidden automatically by the plugin. 

Alternatively, you can directly call the plugin options by setting data attributes to your input field.

## License

**bootstrap-star-rating** is released under the BSD 3-Clause License. See the bundled `LICENSE.md` for details.