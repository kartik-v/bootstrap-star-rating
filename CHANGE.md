version 2.6.0
=============

Date 2014-08-23

1. enh #17: Dynamic configuration for `starCaptions` and `starCaptionClasses` using a function.

version 2.5.0
=============

Date 2014-05-27

1. Change to entire plugin code to eliminate dependency of HTML5 input. Plugin size reduced to 8KB minified.
2. Uses special JQuery routines to trigger star rating changes.
3. Plugin support is now extended to all browsers including pre IE10 
4. Plugin support is now extended to all Touch based and mobile devices like iOS, Android. 
5. Removed cloning of inputs to allow better refreshing of input across ajax and other scenarios.
6. Caption and Clear elements parameters treated as identifiers rather than JQuery object elements.

version 2.0.0
=============

Date 2014-05-08

1. Bug #8,#9,#10: Correct cloning and conversion of field to a range slider input.

Date: 2014-04-25

1. Revamp of entire plugin code. Cleverly leverages CSS3 styles, animations, and HTML5 input features 
   to render the plugin.
2. Render and display fractional star ratings. Configure number of stars, min, max, step, and theoretically 
   support any fractional rating.
3. Right to left (RTL) support enhancement. Optimally uses the `dir` attribute of the range input.
4. Bootstrap style is made optional and configurable. Can override CSS to use any style.
5. Any star symbol (unicode or icon font) can be embedded instead of Glyphicon.
6. Uses HTML 5 range input to change ratings. Polyfills for range input in case JQuery/Javascript is disabled.
7. Automatically degrades to a normal SELECT dropdown input for browsers that do not support 
   HTML 5 range input.

version 1.2.0
=============
Date: 2014-04-04

1. Widget is customizable for using any CSS markup to override Bootstrap styles.
2. Clear button class customization added.

version 1.1.0
=============
Date: 2014-03-10

Revamped the methods for usage across wider scenarios:

1. Included `update` method to set a value of a rating via javascript. 
2. Revamped the `refresh` method to enable refreshing all plugin options at runtime via parameters.

version 1.0.0
=============
Date: 2013-10-01

Initial release. The following features are included in this release:

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

