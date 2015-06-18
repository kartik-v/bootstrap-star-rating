bootstrap-star-rating
=====================

[![Bower version](https://badge.fury.io/bo/bootstrap-star-rating.svg)](http://badge.fury.io/bo/bootstrap-star-rating)
[![Latest Stable Version](https://poser.pugx.org/kartik-v/bootstrap-star-rating/v/stable)](https://packagist.org/packages/kartik-v/bootstrap-star-rating)
[![License](https://poser.pugx.org/kartik-v/bootstrap-star-rating/license)](https://packagist.org/packages/kartik-v/bootstrap-star-rating)
[![Packagist Downloads](https://poser.pugx.org/kartik-v/bootstrap-star-rating/downloads)](https://packagist.org/packages/kartik-v/bootstrap-star-rating)
[![Monthly Downloads](https://poser.pugx.org/kartik-v/bootstrap-star-rating/d/monthly)](https://packagist.org/packages/kartik-v/bootstrap-star-rating)

> NOTE: Version 3.5.3 has been released. Refer [change log](https://github.com/kartik-v/bootstrap-star-rating/blob/master/CHANGE.md) for details.

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

## Browser Support

If you are using the HTML5 NUMBER input to initialize the rating, please read this. The number field does not accept decimals in Google Chrome. The input is allowed, but when the user submits the form, they get an error message and are instructed to enter a valid number (whole numbers only). Other browsers like Firefox allow decimals on the number fields. Till this is standardized across browsers, the workaround for this is to use a normal text input, and initialize the rating via javascript. 

## Demo

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
<link href="http://netdna.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet">
<link href="path/to/css/star-rating.min.css" media="all" rel="stylesheet" type="text/css" />
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="path/to/js/star-rating.min.js" type="text/javascript"></script>
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


## Documentation

### Plugin Options
The plugin supports these following options:

#### stars
_int_ number of stars to display. Defaults to `5`.

#### glyphicon
_boolean_ whether to use the glyphicon star symbol. Defaults to `true`. If set to `false`, will use the unicode black star symbol by default. You can also configure the `ratingClass` to set your own icon framework font CSS class to render the symbols.

#### symbol
_string_ any custom star symbol or unicode character to display. This will override the 
`glyphicon` settings above. 

#### ratingClass
_string_ the CSS class to be appended to the star rating. This is useful when you wish to render the stars using other third party icon font libraries. For example, to render the symbols using [Font Awesome icons](http://fortawesome.github.io/Font-Awesome/icons/), you can set this to `rating-fa`. The `rating-fa` class is a prebuilt CSS style within this plugin, but you can build similar CSS styles for your other font icons. You need to also set `glyphicon` property to `false` to ensure the symbols do not conflict with glyphicons.

#### min
_float_ the minimum value for the rating input. Defaults to `1`.

#### max
_float_ the maximum value for the rating input. Defaults to `5`.

#### step
_float_ the step to increment the star rating. Defaults to `0.5`.

#### disabled
_boolean_ whether the input is disabled. Defaults to `false`.

#### readonly
_boolean_ whether the input is read only. Defaults to `false`.

#### rtl
_boolean_ whether the rating input is to be oriented RIGHT TO LEFT. Defaults to `false`.

#### showClear
_boolean_ whether the clear button is to be displayed. Defaults to `true`.

#### showCaption
_boolean_ whether the rating caption is to be displayed. Defaults to `true`.

#### size
_string_ size of the rating control. One of `xl`, `lg`, `md`, `sm`, or `xs`. Defaults to `md`.

#### defaultCaption
_string_ the default caption text, which will be displayed when no caption is setup for the rating in the `starCaptions` array. This variable defaults to `{rating} Stars`, where the variable `{rating}` will be replaced with the selected star rating.

#### starCaptions
_array | function_ the caption titles corresponding to each of the star rating selected. Defaults to

    {
        0.5: 'Half Star',
        1: 'One Star',
        1.5: 'One & Half Star',
        2: 'Two Stars',
        2.5: 'Two & Half Stars',
        3: 'Three Stars',
        3.5: 'Three & Half Stars',
        4: 'Four Stars',
        4.5: 'Four & Half Stars',
        5: 'Five Stars'
    }

This can also be configured as a function that returns a star caption based on a supplied parameter `val`, where `val` is the calculated rating. 
For example:

```js
    starCaptions: function(val) {
        if (val < 3) {
            return 'Low: ' + val + ' stars';
        } else {
            return 'High: ' + val + ' stars';
        }
    }
```

#### starCaptionClasses
_array | function_ the caption css classes corresponding to each of the star rating selected. Defaults to

    {
        0.5: 'label label-danger',
        1: 'label label-danger',
        1.5: 'label label-warning',
        2: 'label label-warning',
        2.5: 'label label-info',
        3: 'label label-info',
        3.5: 'label label-primary',
        4: 'label label-primary',
        4.5: 'label label-success',
        5: 'label label-success'
    }

This can also be configured as a function that returns a star caption class based on a supplied parameter `val`, where `val` is the calculated rating. 
For example:

```js
    starCaptionClasses: function(val) {
        if (val == 0) {
           return 'label label-default';
        }
        else if (val < 3) {
            return 'label label-danger';
        } 
        else {
            return 'label label-success';
        }
    }
```
#### clearButton
_string_ the markup for displaying the clear button. Defaults to `<i class="glyphicon glyphicon-minus-sign"></i>`. 

#### clearButtonTitle
_string_ the title displayed on clear button hover. Defaults to `Clear`. 

#### clearButtonBaseClass
_string_ the base CSS class for the clear button. Defaults to `clear-rating`. 

#### clearButtonActiveClass
_string_ the CSS class for the clear button that will be appended to the base class above when button is hovered/activated. Defaults to `clear-rating-active`. 

#### clearValue
_string_ the value to clear the input to, when the clear button is clicked. Defaults to `min` if not set. 

#### clearCaption
_string_ the caption displayed when clear button is clicked. Defaults to `Not Rated`. 

#### clearCaptionClass
_string_ the CSS Class to apply to the caption displayed, when clear button is clicked. Defaults to `label label-default`. 

#### captionElement
_string_ the identifier for the container element selector for displaying the caption. Defaults to the `div` container with `.caption` class inside the rating control. 

#### clearElement
_string_ the identifier for the container element selector for displaying the clear button. Defaults to the `div` container with `.clear-rating` class inside the rating control. 

#### hoverEnabled
_boolean_ whether hover functionality is enabled. This will dynamically change the stars and caption on mouse hover. Defaults to `true`. 
> NOTE: The hover functionality will only work on desktop pointing devices and if the input is not `disabled` or `readonly`. 
For all hover functionalities in this plugin (including properties below), the rating state will be reverted back to original if the mouse is exited out without clicking. 

#### hoverChangeCaption
_boolean_ control whether the caption should dynamically change on mouse hover. Defaults to `true`. Will be applicable only if `hoverEnabled` is `true`.

#### hoverChangeStars
_boolean_ control whether the stars should dynamically change on mouse hover. Defaults to `true`. Will be applicable only if `hoverEnabled` is `true`. 

#### hoverOnClear
_boolean_ whether to dynamically clear the rating on hovering the clear button. Defaults to `true`. Will be applicable only if `hoverEnabled` is `true`. 

### Plugin Events
The plugin supports these events:

#### rating.change
This event is triggered when the star rating is modified or changed. This event also allows you to access these parameters:

- `value`: the selected rating value  
- `caption`: the caption for the selected rating

**Example:**
```js
$('#input-id').on('rating.change', function(event, value, caption) {
    console.log(value);
    console.log(caption);
});
```

#### rating.clear
This event is triggered when the rating is cleared with the clear button.

**Example:**
```js
$('#input-id').on('rating.clear', function(event) {
    console.log("rating.clear");
});
```

#### rating.reset
This event is triggered when the rating is reset to initial value.

**Example:**
```js
$('#input-id').on('rating.reset', function(event) {
    console.log("rating.reset");
});
```

#### rating.hover
This event is triggered, when the mouse (pointing input device) is hovered inside a star rating or the clear button. This event also allows you to access these parameters:

- `value`: the selected rating value  
- `caption`: the caption for the selected rating
- `target`: the target for the hover - returns whether you hovered on the `stars` or the `clear` button.

**Example:**
```js
$('#input-id').on('rating.hover', function(event, value, caption, target) {
    console.log(value);
    console.log(caption);
    console.log(target);
});
```

#### rating.hoverleave
This event is triggered, when the mouse (pointing input device) is hovered out of a star rating or the clear button without clicking. This event also allows you to access these parameters:

- `target`: the target for the hover - returns whether you left hovering on the `stars` or the `clear` button.

**Example:**
```js
$('#input-id').on('rating.hoverleave', function(event, target) {
    console.log(target);
});
```

#### rating.refresh
This event is triggered when the rating is refreshed using the refresh method.

**Example:**
```js
$('#input-id').on('rating.refresh', function(event) {
    console.log("rating.refresh");
});
```

### Plugin Methods
The plugin supports these methods:

#### update
Update the rating by setting a value via javascript. The method accepts a rating value as a parameter.
```js
$('#input-id').rating('update', 3);
```

#### refresh
Use this method to dynamically refresh the rating options via javascript after the plugin has been initialized. The method accepts the plugin options entered as object (associative array).
```js
// Example: Call the method below in rating.change event to disable the rating and
// hide the clear button.
$('#input-id').rating('refresh', {disabled: true, showClear: false, showCaption: true});
```

#### reset
Reset the rating.
```js
$('#input-id').rating('reset');
```

#### clear
Clear the rating.
```js
$('#input-id').rating('clear');
```

#### destroy
Destroys the rating.
```js
$('#input-id').rating('destroy');
```

#### create
Creates the rating after destroying any existing rating plugin instance.
```js
// will re-create rating based on initial plugin options
$('#input-id').rating('create');

// any new plugin options if passed will be used instead of initial plugin options
$('#input-id').rating('create', {disabled: true});
```

## License

**bootstrap-star-rating** is released under the BSD 3-Clause License. See the bundled `LICENSE.md` for details.