<h1 align="center">
    <a href="https://plugins.krajee.com" title="Krajee Plugins" target="_blank">
        <img src="https://kartik-v.github.io/bootstrap-fileinput-samples/samples/krajee-logo-b.png" alt="Krajee Logo"/>
    </a>
    <br>
    bootstrap-star-rating
    <hr>
    <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DTP3NZQ6G2AYU"
       title="Donate via Paypal" target="_blank"><img src="https://kartik-v.github.io/bootstrap-fileinput-samples/samples/donate.png" height="60" alt="Donate"/></a>
    &nbsp; &nbsp; &nbsp;
    <a href="https://www.buymeacoffee.com/kartikv" title="Buy me a coffee" ><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="60" alt="kartikv" /></a>
</h1>

<div align="center">

[![Financial Contributors on Open Collective](https://opencollective.com/bootstrap-star-rating/all/badge.svg?label=financial+contributors)](https://opencollective.com/bootstrap-star-rating)
[![Bower version](https://badge.fury.io/bo/bootstrap-star-rating.svg)](http://badge.fury.io/bo/bootstrap-star-rating)
[![Latest Stable Version](https://poser.pugx.org/kartik-v/bootstrap-star-rating/v/stable)](https://packagist.org/packages/kartik-v/bootstrap-star-rating)
[![License](https://poser.pugx.org/kartik-v/bootstrap-star-rating/license)](https://packagist.org/packages/kartik-v/bootstrap-star-rating)
[![Packagist Downloads](https://poser.pugx.org/kartik-v/bootstrap-star-rating/downloads)](https://packagist.org/packages/kartik-v/bootstrap-star-rating)
[![Monthly Downloads](https://poser.pugx.org/kartik-v/bootstrap-star-rating/d/monthly)](https://packagist.org/packages/kartik-v/bootstrap-star-rating)

</div>

A simple yet powerful JQuery star rating plugin for Bootstrap which supports advanced features like fractional star fill and RTL input support. 
Developed with a focus on utlizing pure CSS-3 styling to render the control. The plugin uses Bootstrap markup and styling by default, but it 
can be overridden with any other CSS markup. View the [documentation](http://plugins.krajee.com/star-rating) or a [complete demo](http://plugins.krajee.com/star-rating/demo) 
at Krajee JQuery plugins. 

> NOTE: Release v4.0 is a modified rewrite with various new enhancements and BC breaking features. It allows rendering richer markup for star symbols and offers theming support.

![Star Rating Screenshot](https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-fileinput-samples@0.0.1/samples/star-rating-screenshot.png)

## Features  

- Convert any HTML input to a star rating control. 
- The plugin automatically converts an input to a star rating control if you set its `class = rating`. 
  All options to the input can be passed as HTML5 `data` attributes.
- You can use the HTML 5 number input for polyfill and the plugin will automatically use the number attributes like `min`, `max`, and `step`.
  However, number inputs have a problem with decimal values on the Chrome Browser. Read the Browser Support section in the documentation.
- Involves pure CSS3 styling of the stars. Say goodbye to image sprites or playing with image backgrounds. Offers clean scalable vector 
  icons for consistent display across devices. Optionally one can use the Unicode character set to override symbols.
- Use any of your favorite font icon frameworks to render your star symbols (for example you can easily use the icons from the FontAwesome library).
- Render and display fractional star ratings. Configure number of stars, min, max, step, and theoretically  support any fractional rating.
- Uses Bootstrap 5.x, 4.x, 3.x styles & Bootstrap 3.x glyphicons by default. But this can be overridden with plugin parameters and your own CSS styles.
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

### New features/changes since release v4.0

- **BC Breaking Change**: The `symbol`, `glyphicon`, `ratingClass` properties have been removed. The functionality is replaced with the `theme` property (and can also be complemented or implemented separately using the `containerClass` property).
- New property `theme` will assign a CSS class with the `rating-<theme-name>` to the rating container.
    - Themes included
        - `krajee-svg` (for displaying svg icons) - default theme since v4.1.1
        - `krajee-uni` (for displaying Krajee unicode symbols as stars)
        - `krajee-fas` (for displaying font awesome 5.x icons)
        - `krajee-fa` (for displaying font awesome 4.x icons)
        - `krajee-gly` (for displaying bootstrap 3.x glyphicons)
    - Add ability to override and add one's own themes
- Stars now have a better padding and spacing that can be configured via CSS and themes
- New property `filledStar` - will allow one to set the markup for `filledStar` - will default to 
    - `<i class="glyphicon glyphicon-star"></i>`
- New property `emptyStar` - will allow one to set the markup for `emptyStar` - will default to 
    - `<i class="glyphicon glyphicon-star-empty"></i>`
- Exclusive support for SVG (and a prebuilt `krajee-svg` theme that contains two different ready to use SVG icons).
- Ability to easily set the widget as a "display only" rating via `displayOnly` property.
- New property `animate` to control animation of highlighted stars on hover or click.

> NOTE: Refer [change log](https://github.com/kartik-v/bootstrap-star-rating/blob/master/CHANGE.md) for details on plugin enhancements, fixes, and changes.

## Documentation and Demo

View the [plugin documentation](http://plugins.krajee.com/star-rating) and [plugin demos](http://plugins.krajee.com/star-rating/demo) at Krajee JQuery plugins. 

## Pre-requisites  

1. [Bootstrap 5.x, 4.x, 3.x](http://getbootstrap.com/)
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

> NOTE: You can use the [sass branch](https://github.com/kartik-v/bootstrap-star-rating/tree/sass) for installation using `bootstrap-sass` dependency.
The [master branch](https://github.com/kartik-v/bootstrap-star-rating/tree/master) can be used for installation using plain `bootstrap` dependency.

### Manual Install

You can also manually install the plugin easily to your project. Just download the source [ZIP](https://github.com/kartik-v/bootstrap-star-rating/zipball/master) or [TAR ball](https://github.com/kartik-v/bootstrap-star-rating/tarball/master) and extract the plugin assets (css and js folders) into your project.

## Usage

Step 1: Load the following assets in your header. 

```html
<!-- default styles -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css">
<link href="https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-star-rating@4.1.1/css/star-rating.min.css" media="all" rel="stylesheet" type="text/css" />

<!-- with v4.1.1 Krajee SVG theme is used as default (and must be loaded as below) - include any of the other theme CSS files as mentioned below (and change the theme property of the plugin) -->
<link href="https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-star-rating@4.1.1/themes/krajee-svg/theme.css" media="all" rel="stylesheet" type="text/css" />

<!-- important mandatory libraries -->
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-star-rating@4.1.1/js/star-rating.min.js" type="text/javascript"></script>

<!-- with v4.1.1 Krajee SVG theme is used as default (and must be loaded as below) - include any of the other theme JS files as mentioned below (and change the theme property of the plugin) -->
<script src="https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-star-rating@4.1.1/themes/krajee-svg/theme.js"></script>

<!-- optionally if you need translation for your language then include locale file as mentioned below (replace LANG.js with your own locale file) -->
<script src="https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-star-rating@4.1.1/js/locales/LANG.js"></script>
```

If you noticed, you need to load the `jquery.min.js` and `bootstrap.min.css` in addition to the `star-rating.min.css` and `star-rating.min.js` for
the plugin to work with default settings.

Step 2: Setup your input markup to automatically initialize the rating
```html
<input id="input-id" type="text" class="rating" data-size="lg" >
```

Step 3: Initialize the plugin on your page for other input types. For example,

```js
// initialize with defaults
$("#input-id").rating();

// with plugin options (do not attach the CSS class "rating" to your input if using this approach)
$("#input-id").rating({'size':'lg'});
```

The `#input-id` is the identifier for the input on your page (that you used to initialize the rating), and this input is hidden automatically by the plugin (by adding the bootstrap CSS class `hide`). 

Alternatively, you can directly call the plugin options by setting data attributes to your input field.

## Contributors

### Code Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/kartik-v/bootstrap-star-rating/graphs/contributors"><img src="https://opencollective.com/bootstrap-star-rating/contributors.svg?width=890&button=false" /></a>

### Financial Contributors

Become a financial contributor and help us sustain our community. [[Contribute](https://opencollective.com/bootstrap-star-rating/contribute)]

#### Individuals

<a href="https://opencollective.com/bootstrap-star-rating"><img src="https://opencollective.com/bootstrap-star-rating/individuals.svg?width=890"></a>

#### Organizations

Support this project with your organization. Your logo will show up here with a link to your website. [[Contribute](https://opencollective.com/bootstrap-star-rating/contribute)]

<a href="https://opencollective.com/bootstrap-star-rating/organization/0/website"><img src="https://opencollective.com/bootstrap-star-rating/organization/0/avatar.svg"></a>
<a href="https://opencollective.com/bootstrap-star-rating/organization/1/website"><img src="https://opencollective.com/bootstrap-star-rating/organization/1/avatar.svg"></a>
<a href="https://opencollective.com/bootstrap-star-rating/organization/2/website"><img src="https://opencollective.com/bootstrap-star-rating/organization/2/avatar.svg"></a>
<a href="https://opencollective.com/bootstrap-star-rating/organization/3/website"><img src="https://opencollective.com/bootstrap-star-rating/organization/3/avatar.svg"></a>
<a href="https://opencollective.com/bootstrap-star-rating/organization/4/website"><img src="https://opencollective.com/bootstrap-star-rating/organization/4/avatar.svg"></a>
<a href="https://opencollective.com/bootstrap-star-rating/organization/5/website"><img src="https://opencollective.com/bootstrap-star-rating/organization/5/avatar.svg"></a>
<a href="https://opencollective.com/bootstrap-star-rating/organization/6/website"><img src="https://opencollective.com/bootstrap-star-rating/organization/6/avatar.svg"></a>
<a href="https://opencollective.com/bootstrap-star-rating/organization/7/website"><img src="https://opencollective.com/bootstrap-star-rating/organization/7/avatar.svg"></a>
<a href="https://opencollective.com/bootstrap-star-rating/organization/8/website"><img src="https://opencollective.com/bootstrap-star-rating/organization/8/avatar.svg"></a>
<a href="https://opencollective.com/bootstrap-star-rating/organization/9/website"><img src="https://opencollective.com/bootstrap-star-rating/organization/9/avatar.svg"></a>

## License

**bootstrap-star-rating** is released under the BSD-3-Clause License. See the bundled `LICENSE.md` for details.