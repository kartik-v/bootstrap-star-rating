/*!
 * @copyright &copy; Kartik Visweswaran, Krajee.com, 2013 - 2016
 * @version 3.5.7
 *
 * A simple yet powerful JQuery star rating plugin that allows rendering fractional star ratings and supports
 * Right to Left (RTL) input.
 * 
 * For more JQuery plugins visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
 */
(function (factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) { // jshint ignore:line
        // AMD. Register as an anonymous module.
        define(['jquery'], factory); // jshint ignore:line
    } else { // noinspection JSUnresolvedVariable
        if (typeof module === 'object' && module.exports) { // jshint ignore:line
            // Node/CommonJS
            // noinspection JSUnresolvedVariable
            module.exports = factory(require('jquery')); // jshint ignore:line
        } else {
            // Browser globals
            factory(window.jQuery);
        }
    }
}(function ($) {
    "use strict";

    $.fn.ratingLocales = {};

    var NAMESPACE, DEFAULT_MIN, DEFAULT_MAX, DEFAULT_STEP, isEmpty, addCss, validateAttr, getDecimalPlaces, applyPrecision,
        handler, Rating;
    NAMESPACE = '.rating';
    DEFAULT_MIN = 0;
    DEFAULT_MAX = 5;
    DEFAULT_STEP = 0.5;
    isEmpty = function (value, trim) {
        return value === null || value === undefined || value.length === 0 || (trim && $.trim(value) === '');
    };
    addCss = function ($el, css) {
        $el.removeClass(css).addClass(css);
    };
    validateAttr = function ($input, vattr, options) {
        var chk = isEmpty($input.data(vattr)) ? $input.attr(vattr) : $input.data(vattr);
        return chk ? chk : options[vattr];
    };
    getDecimalPlaces = function (num) {
        var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
        return !match ? 0 : Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
    };
    applyPrecision = function (val, precision) {
        return parseFloat(val.toFixed(precision));
    };
    handler = function ($el, event, callback, skipNS) {
        var ev = skipNS ? event : event.split(' ').join(NAMESPACE + ' ') + NAMESPACE;
        $el.off(ev).on(ev, callback);
    };
    Rating = function (element, options) {
        this.$element = $(element);
        this.init(options);
    };
    Rating.prototype = {
        constructor: Rating,
        _parseAttr: function (vattr, options) {
            var self = this, $el = self.$element, elType = $el.attr('type'), finalValue, val, chk;
            if (elType === 'range' || elType === 'number') {
                val = validateAttr($el, vattr, options);
                switch (vattr) {
                    case 'min':
                        chk = DEFAULT_MIN;
                        break;
                    case 'max':
                        chk = DEFAULT_MAX;
                        break;
                    default:
                        chk = DEFAULT_STEP;
                }
                finalValue = isEmpty(val) ? chk : val;
                return parseFloat(finalValue);
            }
            return parseFloat(options[vattr]);
        },
        setDefault: function (key, val) {
            var self = this;
            if (isEmpty(self[key])) {
                self[key] = val;
            }
        },
        getPosition: function (e) {
            var pageX = isEmpty(e.pageX) ? e.originalEvent.touches[0].pageX : e.pageX;
            return pageX - this.$rating.offset().left;
        },
        listenClick: function (e, callback) {
            e.stopPropagation();
            e.preventDefault();
            if (e.handled !== true) {
                callback(e);
                e.handled = true;
            } else {
                return false;
            }
        },
        starClick: function (e) {
            var self = this, pos;
            self.listenClick(e, function (ev) {
                if (self.inactive) {
                    return false;
                }
                pos = self.getPosition(ev);
                self.setStars(pos);
                self.$element.trigger('change').trigger('rating.change', [self.$element.val(), self.$caption.html()]);
                self.starClicked = true;
            });
        },
        starMouseMove: function (e) {
            var self = this, pos, out;
            if (!self.hoverEnabled || self.inactive || (e && e.isDefaultPrevented())) {
                return;
            }
            self.starClicked = false;
            pos = self.getPosition(e);
            out = self.calculate(pos);
            self.toggleHover(out);
            self.$element.trigger('rating.hover', [out.val, out.caption, 'stars']);
        },
        starMouseLeave: function (e) {
            var self = this, out;
            if (!self.hoverEnabled || self.inactive || self.starClicked || (e && e.isDefaultPrevented())) {
                return;
            }
            out = self.cache;
            self.toggleHover(out);
            self.$element.trigger('rating.hoverleave', ['stars']);
        },
        clearClick: function (e) {
            var self = this;
            self.listenClick(e, function () {
                if (!self.inactive) {
                    self.clear();
                    self.clearClicked = true;
                }
            });
        },
        clearMouseMove: function (e) {
            var self = this, caption, val, width, out;
            if (!self.hoverEnabled || self.inactive || !self.hoverOnClear || (e && e.isDefaultPrevented())) {
                return;
            }
            self.clearClicked = false;
            caption = '<span class="' + self.clearCaptionClass + '">' + self.clearCaption + '</span>';
            val = self.clearValue;
            width = self.getWidthFromValue(val);
            out = {caption: caption, width: width, val: val};
            self.toggleHover(out);
            self.$element.trigger('rating.hover', [val, caption, 'clear']);
        },
        clearMouseLeave: function (e) {
            var self = this, out;
            if (!self.hoverEnabled || self.inactive || self.clearClicked || !self.hoverOnClear || (e && e.isDefaultPrevented())) {
                return;
            }
            out = self.cache;
            self.toggleHover(out);
            self.$element.trigger('rating.hoverleave', ['clear']);
        },
        resetForm: function (e) {
            var self = this;
            if (e && e.isDefaultPrevented()) {
                return;
            }
            if (!self.inactive) {
                self.reset();
            }
        },
        initTouch: function (e) {
            var self = this, flag = (e.type === "touchend");
            self.setTouch(e, flag);
        },
        listen: function () {
            var self = this, $form = self.$element.closest('form'), $rating = self.$rating, $clear = self.$clear;
            handler($rating, 'touchstart touchmove touchend', $.proxy(self.initTouch, self));
            handler($rating, 'click touchstart', $.proxy(self.starClick, self));
            handler($rating, 'mousemove', $.proxy(self.starMouseMove, self));
            handler($rating, 'mouseleave', $.proxy(self.starMouseLeave, self));
            handler($clear, 'click touchstart', $.proxy(self.clearClick, self));
            handler($clear, 'mousemove', $.proxy(self.clearMouseMove, self));
            handler($clear, 'mouseleave', $.proxy(self.clearMouseLeave, self));
            if ($form.length) {
                handler($form, 'reset', $.proxy(self.resetForm, self));
            }
        },
        destroy: function () {
            var self = this, $el = self.$element;
            if (!isEmpty(self.$container)) {
                self.$container.before($el).remove();
            }
            $.removeData($el.get(0));
            $el.off('rating').removeClass('hide');
        },
        create: function (options) {
            var self = this, $el = self.$element;
            options = options || self.options || {};
            self.destroy();
            $el.rating(options);
        },
        setTouch: function (e, flag) {
            //noinspection JSUnresolvedVariable
            var self = this, ev, touches, pos, out, caption, w, width, isTouchCapable = 'ontouchstart' in window ||
                (window.DocumentTouch && document instanceof window.DocumentTouch);
            if (!isTouchCapable || self.inactive) {
                return;
            }
            ev = e.originalEvent;
            //noinspection JSUnresolvedVariable
            touches = !isEmpty(ev.touches) ? ev.touches : ev.changedTouches;
            pos = self.getPosition(touches[0]);
            if (flag) {
                self.setStars(pos);
                self.$element.trigger('change').trigger('rating.change', [self.$element.val(), self.$caption.html()]);
                self.starClicked = true;
            } else {
                out = self.calculate(pos);
                caption = out.val <= self.clearValue ? self.fetchCaption(self.clearValue) : out.caption;
                w = self.getWidthFromValue(self.clearValue);
                width = out.val <= self.clearValue ? (self.rtl ? (100 - w) + '%' : w + '%') : out.width;
                self.$caption.html(caption);
                self.$stars.css('width', width);
            }
        },
        initSlider: function (options) {
            var self = this;
            if (isEmpty(self.$element.val())) {
                self.$element.val(0);
            }
            self.initialValue = self.$element.val();
            self.setDefault('min', self._parseAttr('min', options));
            self.setDefault('max', self._parseAttr('max', options));
            self.setDefault('step', self._parseAttr('step', options));
            if (isNaN(self.min) || isEmpty(self.min)) {
                self.min = DEFAULT_MIN;
            }
            if (isNaN(self.max) || isEmpty(self.max)) {
                self.max = DEFAULT_MAX;
            }
            if (isNaN(self.step) || isEmpty(self.step) || self.step === 0) {
                self.step = DEFAULT_STEP;
            }
            self.diff = self.max - self.min;
        },
        init: function (options) {
            var self = this, $el = self.$element, defaultStar, starVal, starWidth;
            self.options = options;
            $.each(options, function (key, value) {
                self[key] = value;
            });
            self.starClicked = false;
            self.clearClicked = false;
            self.initSlider(options);
            self.checkDisabled();
            self.setDefault('rtl', $el.attr('dir'));
            if (self.rtl) {
                $el.attr('dir', 'rtl');
            }
            defaultStar = self.glyphicon ? '\ue006' : '\u2605';
            self.setDefault('symbol', defaultStar);
            self.setDefault('clearButtonBaseClass', 'clear-rating');
            self.setDefault('clearButtonActiveClass', 'clear-rating-active');
            self.setDefault('clearValue', self.min);
            addCss($el, 'form-control hide');
            self.$clearElement = isEmpty(options.clearElement) ? null : $(options.clearElement);
            self.$captionElement = isEmpty(options.captionElement) ? null : $(options.captionElement);
            if (self.$rating === undefined && self.$container === undefined) {
                self.$rating = $(document.createElement("div")).html('<div class="rating-stars"></div>');
                self.$container = $(document.createElement("div"));
                self.$container.before(self.$rating).append(self.$rating);
                $el.before(self.$container).appendTo(self.$rating);
            }
            self.$stars = self.$rating.find('.rating-stars');
            self.generateRating();
            self.$clear = !isEmpty(self.$clearElement) ? self.$clearElement : self.$container.find(
                '.' + self.clearButtonBaseClass);
            self.$caption = !isEmpty(self.$captionElement) ? self.$captionElement : self.$container.find(".caption");
            self.setStars();
            self.listen();
            if (self.showClear) {
                self.$clear.attr({"class": self.getClearClass()});
            }
            starVal = $el.val();
            starWidth = self.getWidthFromValue(starVal);
            self.cache = {
                caption: self.$caption.html(),
                width: (self.rtl ? (100 - starWidth) : starWidth) + '%',
                val: starVal
            };
            $el.removeClass('rating-loading');
        },
        checkDisabled: function () {
            var self = this;
            self.disabled = validateAttr(self.$element, 'disabled', self.options);
            self.readonly = validateAttr(self.$element, 'readonly', self.options);
            self.inactive = (self.disabled || self.readonly);
        },
        getClearClass: function () {
            return this.clearButtonBaseClass + ' ' + ((this.inactive) ? '' : this.clearButtonActiveClass);
        },
        generateRating: function () {
            var self = this, clear = self.renderClear(), caption = self.renderCaption(),
                css = self.rtl ? 'rating-container-rtl' : 'rating-container',
                stars = self.getStars();
            if (self.glyphicon) {
                css += (self.symbol === '\ue006' ? ' rating-gly-star' : ' rating-gly') + self.ratingClass;
            } else {
                css += isEmpty(self.ratingClass) ? ' rating-uni' : ' ' + self.ratingClass;
            }
            self.$rating.attr('class', css);
            self.$rating.attr('data-content', stars);
            self.$stars.attr('data-content', stars);
            css = self.rtl ? 'star-rating-rtl' : 'star-rating';
            self.$container.attr('class', css + ' rating-' + self.size);
            self.$container.removeClass('rating-active rating-disabled');
            if (self.inactive) {
                self.$container.addClass('rating-disabled');
            }
            else {
                self.$container.addClass('rating-active');
            }
            if (isEmpty(self.$caption)) {
                if (self.rtl) {
                    self.$container.prepend(caption);
                } else {
                    self.$container.append(caption);
                }
            }
            if (isEmpty(self.$clear)) {
                if (self.rtl) {
                    self.$container.append(clear);
                }
                else {
                    self.$container.prepend(clear);
                }
            }
            if (!isEmpty(self.containerClass)) {
                addCss(self.$container, self.containerClass);
            }
        },
        getStars: function () {
            var self = this, numStars = self.stars, stars = '', i;
            for (i = 1; i <= numStars; i++) {
                stars += self.symbol;
            }
            return stars;
        },
        renderClear: function () {
            var self = this, css;
            if (!self.showClear) {
                return '';
            }
            css = self.getClearClass();
            if (!isEmpty(self.$clearElement)) {
                addCss(self.$clearElement, css);
                self.$clearElement.attr({"title": self.clearButtonTitle}).html(self.clearButton);
                return '';
            }
            return '<div class="' + css + '" title="' + self.clearButtonTitle + '">' + self.clearButton + '</div>';
        },
        renderCaption: function () {
            var self = this, val = self.$element.val(), html;
            if (!self.showCaption) {
                return '';
            }
            html = self.fetchCaption(val);
            if (!isEmpty(self.$captionElement)) {
                addCss(self.$captionElement, 'caption');
                self.$captionElement.html(html);
                return '';
            }
            return '<div class="caption">' + html + '</div>';
        },
        fetchCaption: function (rating) {
            var self = this, val = parseFloat(rating), css, cap, capVal, cssVal,
                vCap = self.starCaptions, vCss = self.starCaptionClasses, caption;
            cssVal = typeof vCss === "function" ? vCss(val) : vCss[val];
            capVal = typeof vCap === "function" ? vCap(val) : vCap[val];
            cap = isEmpty(capVal) ? self.defaultCaption.replace(/\{rating}/g, val) : capVal;
            css = isEmpty(cssVal) ? self.clearCaptionClass : cssVal;
            caption = (val === self.clearValue) ? self.clearCaption : cap;
            return '<span class="' + css + '">' + caption + '</span>';
        },
        getWidthFromValue: function (val) {
            var self = this, min = self.min, max = self.max;
            if (val <= min || min === max) {
                return 0;
            }
            if (val >= max) {
                return 100;
            }
            return (val - min) * 100 / (max - min);
        },
        getValueFromPosition: function (pos) {
            var self = this, precision = getDecimalPlaces(self.step),
                val, factor, maxWidth = self.$rating.width();
            factor = (self.diff * pos) / (maxWidth * self.step);
            factor = self.rtl ? Math.floor(factor) : Math.ceil(factor);
            val = applyPrecision(parseFloat(self.min + factor * self.step), precision);
            val = Math.max(Math.min(val, self.max), self.min);
            return self.rtl ? (self.max - val) : val;
        },
        toggleHover: function (out) {
            var self = this, w, width, caption;
            if (self.hoverChangeCaption) {
                caption = out.val <= self.clearValue ? self.fetchCaption(self.clearValue) : out.caption;
                self.$caption.html(caption);
            }
            if (self.hoverChangeStars) {
                w = self.getWidthFromValue(self.clearValue);
                width = out.val <= self.clearValue ? (self.rtl ? (100 - w) + '%' : w + '%') : out.width;
                self.$stars.css('width', width);
            }
        },
        calculate: function (pos) {
            var self = this, defaultVal = isEmpty(self.$element.val()) ? 0 : self.$element.val(),
                val = arguments.length ? self.getValueFromPosition(pos) : defaultVal,
                caption = self.fetchCaption(val), width = self.getWidthFromValue(val);
            if (self.rtl) {
                width = 100 - width;
            }
            width += '%';
            return {caption: caption, width: width, val: val};
        },
        setStars: function (pos) {
            var self = this, out = arguments.length ? self.calculate(pos) : self.calculate();
            self.$element.val(out.val);
            self.$stars.css('width', out.width);
            self.$caption.html(out.caption);
            self.cache = out;
        },
        clear: function () {
            var self = this,
                title = '<span class="' + self.clearCaptionClass + '">' + self.clearCaption + '</span>';
            self.$stars.removeClass('rated');
            if (!self.inactive) {
                self.$caption.html(title);
            }
            self.$element.val(self.clearValue);
            self.setStars();
            self.$element.trigger('rating.clear');
        },
        reset: function () {
            var self = this;
            self.$element.val(self.initialValue);
            self.setStars();
            self.$element.trigger('rating.reset');
        },
        update: function (val) {
            var self = this;
            if (!arguments.length) {
                return;
            }
            self.$element.val(val);
            self.setStars();
        },
        refresh: function (options) {
            var self = this;
            if (!arguments.length) {
                return;
            }
            self.$rating.off('rating');
            if (self.$clear !== undefined) {
                self.$clear.off();
            }
            self.init($.extend(true, self.options, options));
            if (self.showClear) {
                self.$clear.show();
            } else {
                self.$clear.hide();
            }
            if (self.showCaption) {
                self.$caption.show();
            } else {
                self.$caption.hide();
            }
            self.$element.trigger('rating.refresh');
        }
    };

    $.fn.rating = function (option) {
        var args = Array.apply(null, arguments), retvals = [];
        args.shift();
        this.each(function () {
            var self = $(this), data = self.data('rating'), options = typeof option === 'object' && option,
                lang = options.language || self.data('language') || 'en', loc = {}, opts;

            if (!data) {
                if (lang !== 'en' && !isEmpty($.fn.ratingLocales[lang])) {
                    loc = $.fn.ratingLocales[lang];
                }
                opts = $.extend(true, {}, $.fn.rating.defaults, $.fn.ratingLocales.en, loc, options, self.data());
                data = new Rating(this, opts);
                self.data('rating', data);
            }

            if (typeof option === 'string') {
                retvals.push(data[option].apply(data, args));
            }
        });
        switch (retvals.length) {
            case 0:
                return this;
            case 1:
                return retvals[0];
            default:
                return retvals;
        }
    };

    $.fn.rating.defaults = {
        language: 'en',
        stars: 5,
        glyphicon: true,
        symbol: null,
        ratingClass: '',
        disabled: false,
        readonly: false,
        rtl: false,
        size: 'md',
        showClear: true,
        showCaption: true,
        starCaptionClasses: {
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
        },
        clearButton: '<i class="glyphicon glyphicon-minus-sign"></i>',
        clearButtonBaseClass: 'clear-rating',
        clearButtonActiveClass: 'clear-rating-active',
        clearCaptionClass: 'label label-default',
        clearValue: null,
        captionElement: null,
        clearElement: null,
        containerClass: null,
        hoverEnabled: true,
        hoverChangeCaption: true,
        hoverChangeStars: true,
        hoverOnClear: true
    };

    $.fn.ratingLocales.en = {
        defaultCaption: '{rating} Stars',
        starCaptions: {
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
        },
        clearButtonTitle: 'Clear',
        clearCaption: 'Not Rated'
    };

    $.fn.rating.Constructor = Rating;

    /**
     * Convert automatically inputs with class 'rating' into Krajee's star rating control.
     */
    $(document).ready(function () {
        var $input = $('input.rating');
        if ($input.length) {
            $input.removeClass('rating-loading').addClass('rating-loading').rating();
        }
    });
}));
