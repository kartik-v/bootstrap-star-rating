/*!
 * @copyright &copy; Kartik Visweswaran, Krajee.com, 2013
 * @version 1.0.0
 * 
 * A simple yet powerful JQuery star rating plugin for Twitter Bootstrap.
 * 
 * Built originally for Yii Framework 2.0. But is usable across frameworks & scenarios.
 * For more Yii related demos visit http://demos.krajee.com
 */
(function($) {
    var isEmpty = function(value, trim) {
        return value === null || value === undefined || value == []
            || value === '' || trim && $.trim(value) === '';
    };
    // Rating public class definition
    var Rating = function(element, options) {
        this.$element = $(element);
        this.min = options.min;
        this.max = options.max;
        this.step = options.step;
        this.disabled = options.disabled;
        this.readonly = options.readonly;
        this.rtl = options.rtl;
        this.size = options.size;
        this.showReset = options.showReset;
        this.showCaption = options.showCaption;
        this.starCaptions = options.starCaptions;
        this.starCaptionClasses = options.starCaptionClasses;
        this.resetButton = options.resetButton;
        this.resetButtonTitle = options.resetButtonTitle;
        this.resetCaption = options.resetCaption;
        this.resetCaptionClass = options.resetCaptionClass;
        this.resetValue = options.resetValue;
        this.inactive = (this.disabled || this.readonly);
        this.inputValue = this.$element.val();
        this.$resetElement = options.resetElement;
        this.$captionElement = options.captionElement;
        this.$container = this.createContainer();
        this.$star = this.$container.children("s");
        this.$stars = this.$container.find("s");
        this.$reset = !isEmpty(this.$resetElement) ? this.$resetElement : this.$container.find(".reset");
        this.$caption = !isEmpty(this.$captionElement) ? this.$captionElement : this.$container.find(".caption");
        this._init();
    };
    Rating.prototype = {
        constructor: Rating,
        _init: function() {
            var self = this;
            self.$element.before(self.$container);
            self.$element.hide();
            self.$star.on("click", function(e) {
                if (!self.inactive) {
                    var numStars = $(e.target).parentsUntil("div").length + 1;
                    var titleClass = self.starCaptionClasses[numStars];
                    var caption = '<span class="' + titleClass + '">' + self.starCaptions[numStars] + '</span>';
                    self.$element.val(numStars);
                    self.$caption.html(caption);
                    self.$stars.removeClass('rated');
                    $(e.target).removeClass('rated').addClass('rated');
                    $(e.target).parentsUntil("div", "s").removeClass('rated').addClass('rated');
                    self.$element.trigger('rating.change', {
                        'value': numStars,
                        'caption': caption
                    });
                }
            });
            self.$reset.on("click", function(e) {
                if (!self.inactive) {
                    var title = '<span class="' + self.resetCaptionClass + '">' + self.resetCaption + '</span>';
                    self.$stars.removeClass('rated');
                    self.$caption.html(title);
                    self.$element.val(self.resetValue);
                    self.$element.trigger('rating.reset');
                }
            });
        },
        createContainer: function() {
            var self = this;
            var css = (self.rtl) ? 'star-rating-rtl' : 'star-rating';
            css += self.inactive ? ((self.disabled) ? ' ' + css + '-disabled ' : ' ') : ' ' + css + '-active ';
            css += 'rating-' + self.size;
            var stars = self.renderStars();
            var reset = self.renderReset();
            var caption = self.renderCaption();
            var content = (self.rtl) ? caption + stars + reset : reset + stars + caption;
            var container = $(document.createElement("div")).attr({"class": css}).html(content);
            return container;
        },
        renderStars: function() {
            var begin = '', end = '';
            var self = this;
            for (var i = self.min; i <= self.max; i += self.step) {
                begin += (!isEmpty(self.inputValue) && i <= self.inputValue) ? '<s class="rated">' : '<s>';
                end += '</s>';
            }
            return begin + end;
        },
        renderReset: function() {
            var self = this;
            if (!self.showReset) {
                return '';
            }
            var css = (self.inactive) ? 'reset' : 'reset reset-active';
            if (!isEmpty(self.$resetElement)) {
                self.$resetElement.removeClass(css).addClass(css).attr({"title": self.resetButtonTitle});
                self.$resetElement.html(self.resetButton);
                return '';
            }
            return '<div class="' + css + '" title="' + self.resetButtonTitle + '">' + self.resetButton + '</div>';
        },
        renderCaption: function() {
            var self = this, val = self.inputValue;
            if (!self.showCaption) {
                return '';
            }
            var css = isEmpty(self.starCaptionClasses[val]) ? self.resetCaptionClass : self.starCaptionClasses[val];
            var caption = isEmpty(self.starCaptions[val]) ? self.resetCaption : self.starCaptions[val];
            var html = '<span class="' + css + '">' + caption + '</span>';
            if (!isEmpty(self.$captionElement)) {
                self.$captionElement.removeClass('caption').addClass('caption').attr({"title": self.resetButtonTitle});
                self.$captionElement.html(html);
                return '';
            }

            return '<div class="caption">' + html + '</div>';
        }
    };

    //Star rating plugin definition
    $.fn.rating = function(option) {
        var args = Array.apply(null, arguments);
        args.shift();
        return this.each(function() {
            var $this = $(this),
                data = $this.data('rating'),
                options = typeof option === 'object' && option;

            if (!data) {
                $this.data('rating', (data = new Rating(this, $.extend({}, $.fn.rating.defaults, options, $(this).data()))));
            }

            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    };

    $.fn.rating.defaults = {
        min: 1,
        max: 5,
        step: 1,
        disabled: false,
        readonly: false,
        rtl: false,
        size: 'md',
        showReset: true,
        showCaption: true,
        starCaptions: {
            1: 'One Star',
            2: 'Two Stars',
            3: 'Three Stars',
            4: 'Four Stars',
            5: 'Five Stars',
        },
        starCaptionClasses: {
            1: 'label label-danger',
            2: 'label label-warning',
            3: 'label label-info',
            4: 'label label-primary',
            5: 'label label-success',
        },
        resetButton: '<i class="glyphicon glyphicon-minus-sign"></i>',
        resetButtonTitle: 'Reset',
        resetCaption: 'Not Rated',
        resetCaptionClass: 'label label-default',
        resetValue: 0,
        captionElement: null,
        resetElement: null
    };

}(jQuery));