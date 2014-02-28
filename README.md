bootstrap-star-rating
=====================

A simple yet powerful JQuery star rating plugin for Bootstrap. Developed with a focus on utlizing pure CSS-3 styling to render the control.

## Features  

1. Convert any HTML input to a star rating control. Recommended input is of `type = number`, which will help fallback to a number input for browsers not supporting JQuery or Javascript.
2. The plugin automatically converts an input with `type = number` to a star rating control if you set its `class = rating`. All options to the input can be passed as HTML5 `data` attributes.
3. Involves pure CSS3 styling of the stars. Say goodbye to image sprites or playing with image backgrounds. Offers clean scalable vector icons for consistent display across devices.
4. Specifically uses Bootstrap 3.x styles & glyphs. Can be combined to work better for Bootstrap styled projects (or input group addons).
5. Ability to clear values and options for the stars. Control where the clear button element can be shown.
6. Reset star rating to the initial value when the form is reset.
7. Ability to control and display caption of the selected stars. Each rated star can have its own caption. Control where the caption element can be shown.
8. Ability to size the rating control including the stars, caption, and clear button. Five prebuilt size templates are available `xl`, `lg`, `md`, `sm`, and `xs`.
9. Support for RIGHT TO LEFT (RTL) input. Automatically changes star styling for RTL.
10. Triggers JQuery events for advanced development. Events currently available are `rating.change`, `rating.clear`, and  `rating.reset`.
11. Disabled and readonly input star rating support.
12. Size of the entire plugin is less than 9KB (about 6KB for the minified JS and 3KB for the minified CSS).

## Demo

View the [plugin documentation](http://plugins.krajee.com/star-rating) and [plugin demos](http://plugins.krajee.com/star-rating/demo) at Krajee JQuery plugins. 

## Pre-requisites  

1. [Bootstrap 3.x](http://getbootstrap.com/)
2. Latest [JQuery](http://jquery.com/)
3. Most modern browsers supporting CSS3 & JQuery. For Internet Explorer, one must use IE versions 9 and above.

## Restrictions
The plugin supports only whole filled (or empty) stars and not partially filled stars. This is probably an enhancement to be planned for future.

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
<link href="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet">
<link href="path/to/css/star-rating.min.css" media="all" rel="stylesheet" type="text/css" />
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="path/to/js/star-rating.min.js" type="text/javascript"></script>
```

If you noticed, you need to load the `jquery.min.js` and `bootstrap.min.css` in addition to the `star-rating.min.css` and `star-rating.min.js`.

Step 2: Initialize the plugin on your page. For example,

```js
// initialize with defaults
$("#input-id").rating();

// with plugin options
$("#input-id").rating(['min'=>1, 'max'=>10, 'step'=>2, 'size'=>'lg']);
```

The `#input-id` is the identifier for the input (e.g. `type=number`) on your page, which is hidden automatically by the plugin. 

Alternatively, you can directly call the plugin options by setting data attributes to your input field.

```html
<input id="input-id" type="number" data-size="lg" >
```

## Documentation

### Plugin Options
The plugin supports these following options:

#### min
_float_ the minimum value for the rating input. Defaults to `1`.

#### max
_float_ the maximum value for the rating input. Defaults to `5`.

#### step
_float_ the step to increment the rating when each star is clicked. Defaults to `1`.

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
_string_ the default caption text, which will be displayed when no caption is setup for the rating in the `starCaptions` array. This variable defaults to `{rating} Stars`, where the variable `{rating}` will be replaced with the selected star rating.</p>

#### starCaptions
_array_ the caption titles corresponding to each of the star rating selected. Defaults to

    {
        1: 'One Star',
        2: 'Two Stars',
        3: 'Three Stars',
        4: 'Four Stars',
        5: 'Five Stars'
    }

#### starCaptionClasses
_array_ the caption css classes corresponding to each of the star rating selected. Defaults to

    {
        1: 'label label-danger',
        2: 'label label-warning',
        3: 'label label-info',
        4: 'label label-primary',
        5: 'label label-success',
    }

#### clearButton
_string_ the markup for displaying the clear button. Defaults to `<i class="glyphicon glyphicon-minus-sign"></i>`. 

#### clearButtonTitle
_string_ the title displayed on clear button hover. Defaults to `Clear`. 

#### clearValue
_string_ the value to clear the input to, when the clear button is clicked. Defaults to `0`. 

#### clearCaption
_string_ the caption displayed when clear button is clicked. Defaults to `Not Rated`. 

#### clearCaptionClass
_string_ the CSS Class to apply to the caption displayed, when clear button is clicked. Defaults to `label label-default`. 

#### captionElement
_DOM element_ the container element selector for displaying the caption. Defaults to a `div` container with `.caption` class inside the rating control. 

#### $clearElement
_DOM element_ the container element selector for displaying the clear button. Defaults to a `div` container with `.clear-rating` class inside the rating control. 

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
