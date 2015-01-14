version 3.5.0
=============
**Date:** 14-Jan-2015

1. (bug): Prevent invalid star rating render with number of stars greater than 5, default value and hoverChange enabled.


version 3.4.0
=============
**Date:** 16-Dec-2014

1. (enh #35): Added `destroy` method to destroy the rating plugin.
2. (enh #36): Added `create` method to create the rating plugin (typically after a destroy).

version 3.3.0
=============
**Date:** 17-Nov-2014

1. (bug #32): Prevent invalid star ratings if cursor is close to left/right edge of star array.
2. (enh #33): Enhance touch methods for compatibility across more wider mobile device browsers.

version 3.2.0
=============
**Date:** 08-Nov-2014

1. Set release to stable in composer.json.
2. Updated CHANGE log to reflect user friendly date time formats.

version 3.1.0
=============
**Date:** 27-Oct-2014

1. enh #26: Add touch device support to enable touch and slide across stars.
2. enh #27: Reset events on the rating element before every refresh.
3. enh #28: Add rating.refresh event.


version 3.0.0
=============
**Date:** 13-Oct-2014

1. enh #20, #21: Included hover validation routine and rating state change on hover. Following new configurable properties added:

   - `hoverEnabled`: _boolean_ whether hover functionality is enabled. This will dynamically change the stars and caption on mouse hover. Defaults to `true`. This functionality will only work on desktop devices and if the input is not `disabled` or `readonly`.
   - `hoverChangeCaption`: _boolean_ control whether the caption should dynamically change on mouse hover. Defaults to `true`. Will be applicable only if `hoverEnabled` is `true`.
   - `hoverChangeStars`: _boolean_ control whether the stars should dynamically change on mouse hover. Defaults to `true`. Will be applicable only if `hoverEnabled` is `true`.

2. enh #21: Following new events are added:

   - `rating.hover`
   - `rating.hoverleave`
   
3. enh #22: More correct minimum value and clear value validation through new `getWidthFromValue` method.

4. enh #24: Set `clearValue` to default to `min` if not set.


version 2.6.0
=============
**Date:** 23-Aug-2014

1. enh #17: Dynamic configuration for `starCaptions` and `starCaptionClasses` using a function.

version 2.5.0
=============
**Date:** 27-May-2014

1. Change to entire plugin code to eliminate dependency of HTML5 input. Plugin size reduced to 8KB minified.
2. Uses special JQuery routines to trigger star rating changes.
3. Plugin support is now extended to all browsers including pre IE10 
4. Plugin support is now extended to all Touch based and mobile devices like iOS, Android. 
5. Removed cloning of inputs to allow better refreshing of input across ajax and other scenarios.
6. Caption and Clear elements parameters treated as identifiers rather than JQuery object elements.

version 2.1.0
=============
**Date:** 08-May-2014

1. Bug #8,#9,#10: Correct cloning and conversion of field to a range slider input.

version 2.0.0
=============

**Date:** 25-Apr-2014

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
**Date:** 04-Apr-2014

1. Widget is customizable for using any CSS markup to override Bootstrap styles.
2. Clear button class customization added.

version 1.1.0
=============
**Date:** 10-Mar-2014

Revamped the methods for usage across wider scenarios:

1. Included `update` method to set a value of a rating via javascript. 
2. Revamped the `refresh` method to enable refreshing all plugin options at runtime via parameters.

version 1.0.0
=============
**Date:** 01-Oct-2013

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
