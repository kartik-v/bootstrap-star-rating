bootstrap-star-rating
=====================

> NOTE: Version 2.5.0 has been released. Refer [change log](https://github.com/kartik-v/bootstrap-star-rating/blob/master/CHANGE.md) for details.

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
- Render and display fractional star ratings. Configure number of stars, min, max, step, and theoretically  support any fractional rating.
- Uses Bootstrap 3.x styles & glyphs by default. But this can be overridden with plugin parameters and your own CSS styles.
- Support for RIGHT TO LEFT (RTL) input. Automatically changes star styling for RTL.
- Ability to clear values and options for the stars. Control where the clear button element can be shown.
- Reset star rating to the initial value when the form is reset.
- Ability to control and display caption of the selected stars. Each rated star can have its own caption. Control where the 
  caption element can be shown.
- Ability to size the rating control including the stars, caption, and clear button. Five prebuilt size templates are 
  available `xl`, `lg`, `md`, `sm`, and `xs`.
- Triggers JQuery events for advanced development. Events currently available are `rating.change`, `rating.clear`, and  `rating.reset`.
- Disabled and readonly input star rating support.
- Size of the entire plugin is less than 11KB (about 8KB for the minified JS and 3KB for the minified CSS).

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

    $ php composer.phar require kartik-v/bootstrap-star-rating "dev-master"

or add:

    "kartik-v/bootstrap-star-rating": "dev-master"

to your composer.json file

### Manual Install

You can also manually install the plugin easily to your project. Just download the source [ZIP](https://github.com/kartik-v/bootstrap-star-rating/zipball/master) or [TAR ball](https://github.com/kartik-v/bootstrap-star-rating/tarball/master) and extract the plugin assets (css and js folders) into your project.

## Usage

Step 1: Load the following assets in your header. 

```html
<link href="http://netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
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

##### stars
_int_ number of stars to display. Defaults to `5`.

##### glyphicon
_boolean_ whether to use the glyphicon star symbol. Defaults to `true`. If set to `false`,
will use the unicode black star symbol.

##### symbol
_string_ any custom star symbol or unicode character to display. This will override the 
`glyphicon` settings above. 

##### min
_float_ the minimum value for the rating input. Defaults to `1`.

##### max
_float_ the maximum value for the rating input. Defaults to `5`.

##### step
_float_ the step to increment the star rating. Defaults to `0.5`.

##### disabled
_boolean_ whether the input is disabled. Defaults to `false`.

##### readonly
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
_string_ the default caption text, which will be displayed when no caption is setup for the rating in the `starCaptions` array. This variable defaults to `{rating} Stars`, where the variable `{rating}` will be replaced with the selected star rating.</p>

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
_string_ the value to clear the input to, when the clear button is clicked. Defaults to `0`. 

#### clearCaption
_string_ the caption displayed when clear button is clicked. Defaults to `Not Rated`. 

#### clearCaptionClass
_string_ the CSS Class to apply to the caption displayed, when clear button is clicked. Defaults to `label label-default`. 

#### captionElement
_string_ the identifier for the container element selector for displaying the caption. Defaults to the `div` container with `.caption` class inside the rating control. 

#### clearElement
_string_ the identifier for the container element selector for displaying the clear button. Defaults to the `div` container with `.clear-rating` class inside the rating control. 

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

### Plugin Methods
The plugin supports these methods:

#### update
Update the rating by setting a value via javascript. The method accepts a rating value as a parameter.
```js
$('#input-id').rating('update', 3);
```

#### refresh
Use this method to dynamically refresh the rating options via javascript after the plugin has been initialized. The method accepts the plugin options entered as an array.
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

## License

**bootstrap-star-rating** is released under the BSD 3-Clause License. See the bundled `LICENSE.md` for details.
