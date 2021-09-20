Change Log: `bootstrap-star-rating`
===================================

## Version 4.1.2

**Date:** 20-Sep-2021

- Simplify NPM module handling.

## Version 4.1.1

**Date:** 11-Sep-2021

- (enh #215): Correct NPM module handling.

## Version 4.1.0

**Date:** 25-Jul-2021

- (bug #213): Correct `mousenter` event to `mouseenter`.
- (enh #212): Enhance caption badge styles.
- (enh #211): Correct keyboard arrow keys behavior for RTL oriented inputs.
- (enh #210): Revamp themes - set default theme to Krajee SVG.

## Version 4.0.9

**Date:** 21-May-2021

- Correct `minThreshold` default value.

## Version 4.0.8

**Date:** 21-May-2021

- (enh #209): Enhancements to support BS 5.x (and 4.x/3.x).

## Version 4.0.7

**Date:** 20-May-2021

- (enh #208): Corrected positioning of the base input on which the rating is triggered.
- (enh #205): Add Dutch Translations.
- (enh #200): Activate Open Collective.
- (enh #199): Add Greek Translations.
- (enh #145): Minimum value threshold validation.
    - New property `minThreshold` which allows a star rated with minimum value always. The initial value
      of the rating is set to `minThreshold` if it has a value undefined or a value less than `minThreshold`
    - The `minThreshold` value must be a value between the `min` and `max` values 
    - If `minThreshold` is set to less than `min` the plugin will default `minThreshold` to the `min` value
    - If `minThreshold` is set to greater than `max` the plugin will default `minThreshold` to the `max` value
- (enh #129): Enhance accessibility & make the  stars keyboard focusable.
    - New property `keyboardEnabled` - defaults to `true`
        - allow use of `tab` keyboard button to navigate to the rating
        - allow use of arrow `right` and arrow `left` keyboard buttons to change the rating value
    - New property `mouseEnabled` - defaults to `true` 
        - when set to false - the mouse cannot be used to change the ratings
- (enh #111): Add titles to individual star elements.
  - New config property `starTitles` (can be set as object or function) - will set the title for each star
- (enh #110): Hover events reworked. New events added `rating:mouseenter` and `rating:mouseleave`
```
$('#ratingInput').on('rating:mouseenter rating:mouseleave', function(e, index, status, $star) {
    console.log(index); // the index number of the star where the event was triggered
    console.log(status); // whether the mouse event was triggered on `empty-star` or `filled-star`
    console.log($star); // the current star jquery object where event was triggered 
    console.log($star.attr('title')); // can get properties of the star object
}); 
```  

## Version 4.0.6

**Date:** 25-May-2019

- (enh #195): Update Bootstrap dependency.
- (enh #194, enh #180): Allow StarCaptionClasses CSS classes to also be set by Percentage width.
- (enh #190): Update German Translations.
- Implement stale bot.

## Version 4.0.5

**Date:** 04-Oct-2018

- (enh #189): Add Bengali Translations.
- (enh #188): Allow `showCaption` when `displayOnly` is `true`.

## Version 4.0.4

**Date:** 15-Sep-2018

- Enhancements to support Bootstrap v4.x.
- Better styling of stars for the 5 rating sizes and maintain consistency across themes.
- (enh #187): Add Kazakh translations.
- (enh #184): Correct rating-input style to keep it hidden - yet trigger required validation.
- (enh #182): New Krajee Font Awesome 5.x `fas` theme.
- (bug #177, enh #179): New property `showCaptionAsTitle`
    - Useful for caption to be displayed as title for readonly ratings. 

## Version 4.0.3

**Date:** 03-Nov-2017

- (bug #173): Correct `rating:change` event.
- (enh #171): Rename events to start with `rating:` instead of `rating`.
- (enh #170): Enhancements to support Bootstrap v4.x framework.

## Version 4.0.2

**Date:** 27-Aug-2017

- (enh #170): Enhancements to support Bootstrap v4.x framework.
- Chronological sorting of issues and enhancements in the CHANGE log.
- (enh #164): Add Turkish Translations.
- (enh #163): Add Korean Translations.
- (enh #162): Add Italian Translations.
- (enh #161): Add Farsi Translations.
- (enh #156): More correct form reset event listening.
- (enh #155): Styling enhancements and code optimizations.
- (enh #154): New property `zeroAsNull` to treat zero value rating as null.
- (enh #153): Add ability to configure `required` attribute for input.
- Add github issue and PR contribution templates.
- (enh #142): Enable scroll when rating is readonly or disabled.
- (enh #139): Do not refer to minified files in bower main metadata .
- (enh #132): Add Polish Translations.
- (enh #131): Add Arabic Translations.
- (enh #130): Better management of themes and locales.
- (enh #127): Add Chinese Translations.
- (enh #124): Add License Headers.
- (enh #123): Add Italian Translations.
- (enh #122): Add Spanish Translations.
- (enh #115): Add Romanian Translations.
- (enh #108): Add French Translations.

## Version 4.0.1

**Date:** 28-Feb-2016

- Update package.json to include `peerDependencies` instead of `dependencies`.
- (enh #103): Implement method chaining and revamp private methods 
    - enhance public methods like `create`, `destroy`, `refresh`, `clear`, `reset` to return the rating element jQuery object
- (bug #102): Revamp generation of rating via `refresh` method.
- (bug #101): Correct caption setting when `showCaption` is `false`.
- (bug #100): Correct caption and clear rendering methods.
- (bug #99): Correct documentation for refresh method.

## Version 4.0.0

**Date:** 16-Feb-2016

- (enh #97): Add `animate` property to enable / disable animation of star highlight on hover / change.
- (enh #96): Add support for `bootstrap-sass` official repo via `sass` branch.
- (enh #95): Add display only capability.
- (enh #94): Add Theming Functionality.
    - New property `theme` will assign a CSS class with the `rating-<theme-name>` to the rating container.
    - Themes included
        - The default (blank) theme (for displaying bootstrap glyphicons)
        - `krajee-svg` (for displaying svg icons)
        - `krajee-uni` (for displaying unicode symbols as stars)
        - `krajee-fa` (for displaying font awesome icons)
    - Add ability to override and add one's own themes

    **Various new features and BC breaking enhancements**

    - **REMOVED**: `symbol`, `glyphicon`, `ratingClass` properties will be removed. 
    - The requirement for the above will be replaced with the `theme` property (and can also be implemented using the `containerClass` property).
    - Stars now have a better padding and spacing that can be configured via CSS and themes
    - New property `filledStar` - will allow one to set the markup for `filledStar` - will default to 
        - `<i class="glyphicon glyphicon-star"></i>`
    - New property `emptyStar` - will allow one to set the markup for `emptyStar` - will default to 
        - `<i class="glyphicon glyphicon-star-empty"></i>`
    - Exclusive support for SVG (and a prebuilt `krajee-svg` theme that contains two different ready to use SVG icons).
- (enh #91): Add SVG Icon Support

## Version 3.5.8

**Date:** 16-Feb-2016

- (bug #90): Rename reserved word used as variable.
- (enh #89): Add Portugese Brazilian Translations.
- (enh #88): Add German Translations.

## Version 3.5.7

**Date:** 22-Jan-2016

- (enh #86): Refactor code for listening events and deep extend options correctly.
- (enh #84): Add Ukranian Translations.

## Version 3.5.6

**Date:** 29-Dec-2015

- (enh #82): Added "main" key into NPM package.json.
- (enh #81): Simplify README docs.
- (bug #77): Correct `touches` and `changedTouches` validation.
- (enh #76): Add Russian Translations.

## Version 3.5.5

**Date:** 22-Nov-2015

- (enh #75): Implement Locales and Translations.
- (enh #74): Universal Module Definition for use with CommonJS, AMD or browser globals.
- (enh #71): Fix `Error: Cannot read property 'pageX' of undefined` error on touch devices.

## Version 3.5.4

**Date:** 20-Sep-2015

- Update bootstrap bower version to support only 3.x variants.
- (enh #63): Add `package.json` for npm install.
- (enh #59): Remove `String.prototype.replaceAll` and implement regex replace.
- (enh #47): Styling enhancements for printed output (better star colors and hide clear button).

## Version 3.5.3

**Date:** 18-Jun-2015

- Fixes for composer.json dependencies.
- (enh #58): Remove redundant tooltip title on hover of caption element.

## Version 3.5.2

**Date:** 10-May-2015

- (enh #46): More correct init of `clear` and `caption` elements.
- (enh #45): Validate on `touchstart` for devices that do not support `click` event.

## Version 3.5.1

**Date:** 13-Feb-2015

- Set copyright year to current.
- (enh #44): Ability to integrate with other font icon CSS frameworks like Font Awesome.
    - New property `ratingClass` added to allow configuring other icon framework css classes.

## Version 3.5.0

**Date:** 31-Jan-2015

- (enh #42): Code cleanup and restructure for JS lint changes (using JSHint Code cleanup library).
- (enh #39): Prevent invalid star rating for numStars > 5 with default value & hoverChange enabled.

## Version 3.4.0

**Date:** 16-Dec-2014

- (enh #36): Added `create` method to create the rating plugin (typically after a destroy).
- (enh #35): Added `destroy` method to destroy the rating plugin.

## Version 3.3.0

**Date:** 17-Nov-2014

- (enh #33): Enhance touch methods for compatibility across more wider mobile device browsers.
- (bug #32): Prevent invalid star ratings if cursor is close to left/right edge of star array.

## Version 3.2.0

**Date:** 08-Nov-2014

- Updated CHANGE log to reflect user friendly date time formats.
- Set release to stable in composer.json.

## Version 3.1.0

**Date:** 27-Oct-2014

- enh #28: Add rating.refresh event.
- enh #27: Reset events on the rating element before every refresh.
- enh #26: Add touch device support to enable touch and slide across stars.


## Version 3.0.0

**Date:** 13-Oct-2014

- enh #24: Set `clearValue` to default to `min` if not set.
- enh #22: More correct minimum value and clear value validation through new `getWidthFromValue` method.
- enh #21: Following new events are added:
   - `rating.hover`
   - `rating.hoverleave`
- enh #20, #21: Included hover validation routine and rating state change on hover. Following new configurable properties added:
   - `hoverEnabled`: _boolean_ whether hover functionality is enabled. This will dynamically change the stars and caption on mouse hover. Defaults to `true`. This functionality will only work on desktop devices and if the input is not `disabled` or `readonly`.
   - `hoverChangeCaption`: _boolean_ control whether the caption should dynamically change on mouse hover. Defaults to `true`. Will be applicable only if `hoverEnabled` is `true`.
   - `hoverChangeStars`: _boolean_ control whether the stars should dynamically change on mouse hover. Defaults to `true`. Will be applicable only if `hoverEnabled` is `true`.

## Version 2.6.0

**Date:** 23-Aug-2014

- enh #17: Dynamic configuration for `starCaptions` and `starCaptionClasses` using a function.

## Version 2.5.0

**Date:** 27-May-2014

- Caption and Clear elements parameters treated as identifiers rather than JQuery object elements.
- Removed cloning of inputs to allow better refreshing of input across ajax and other scenarios.
- Plugin support is now extended to all Touch based and mobile devices like iOS, Android. 
- Plugin support is now extended to all browsers including pre IE10 
- Uses special JQuery routines to trigger star rating changes.
- Change to entire plugin code to eliminate dependency of HTML5 input. Plugin size reduced to 8KB minified.

## Version 2.1.0

**Date:** 08-May-2014

- Bug #8,#9,#10: Correct cloning and con## Version of field to a range slider input.

## Version 2.0.0


**Date:** 25-Apr-2014

- Automatically degrades to a normal SELECT dropdown input for browsers that do not support 
   HTML 5 range input.
- Uses HTML 5 range input to change ratings. Polyfills for range input in case JQuery/Javascript is disabled.
- Any star symbol (unicode or icon font) can be embedded instead of Glyphicon.
- Bootstrap style is made optional and configurable. Can override CSS to use any style.
- Right to left (RTL) support enhancement. Optimally uses the `dir` attribute of the range input.
- Render and display fractional star ratings. Configure number of stars, min, max, step, and theoretically 
   support any fractional rating.
- Revamp of entire plugin code. Cleverly leverages CSS3 styles, animations, and HTML5 input features 
   to render the plugin.

## Version 1.2.0

**Date:** 04-Apr-2014

- Clear button class customization added.
- Widget is customizable for using any CSS markup to override Bootstrap styles.

## Version 1.1.0

**Date:** 10-Mar-2014

Revamped the methods for usage across wider scenarios:

- Revamped the `refresh` method to enable refreshing all plugin options at runtime via parameters.
- Included `update` method to set a value of a rating via javascript. 

## Version 1.0.0

**Date:** 01-Oct-2013

Initial release. The following features are included in this release:

- Convert any HTML input to a star rating control. Recommended input is of `type = number`, which will help fallback to a number input for browsers not supporting JQuery or Javascript.
- The plugin automatically converts an input with `type = number` to a star rating control if you set its `class = rating`. All options to the input can be passed as HTML5 `data` attributes.
- Involves pure CSS3 styling of the stars. Say goodbye to image sprites or playing with image backgrounds. Offers clean scalable vector icons for consistent display across devices.
- Specifically uses Bootstrap 3.x styles & glyphs. Can be combined to work better for Bootstrap styled projects (or input group addons).
- Ability to clear values and options for the stars. Control where the clear button element can be shown.
- Reset star rating to the initial value when the form is reset.
- Ability to control and display caption of the selected stars. Each rated star can have its own caption. Control where the caption element can be shown.
- Ability to size the rating control including the stars, caption, and clear button. Five prebuilt size templates are available `xl`, `lg`, `md`, `sm`, and `xs`.
- Support for RIGHT TO LEFT (RTL) input. Automatically changes star styling for RTL.
- Triggers JQuery events for advanced development. Events currently available are `rating.change`, `rating.clear`, and  `rating.reset`.
- Disabled and readonly input star rating support.
- Size of the entire plugin is less than 9KB (about 6KB for the minified JS and 3KB for the minified CSS).