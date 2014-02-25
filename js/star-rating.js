/*!
 * @copyright &copy; Kartik Visweswaran, Krajee.com, 2013
 * @version 1.0.0
 * 
 * A simple yet powerful JQuery star rating plugin for Twitter Bootstrap.
 * 
 * Built originally for Yii Framework 2.0. But is usable across frameworks & scenarios.
 * For more JQuery/Bootstrap plugins and demos visit http://plugins.krajee.com
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
        this.starTitles = options.starTitles;
        this.starTitleClasses = options.starTitleClasses;
        this.resetButton = options.resetButton;
        this.resetButtonTitle = options.resetButtonTitle;
        this.resetTitle = options.resetTitle;
        this.resetTitleClass = options.resetTitleClass;
        this.resetValue = options.resetValue;
        this.inputValue = this.$element.val();
        this.$container = this.createContainer();
        this.$star = this.$container.children("s");
        this.$stars = this.$container.find("s");
        this.$reset = this.$container.find(".reset");
        this.$caption = this.$container.find(".caption");
        this._init();
    };
    Rating.prototype = {
        constructor: Rating,
        _init: function() {
            var self = this;
            self.$element.before(self.$container);
            self.$element.hide();
            self.$star.on("click", function(e) {
                var numStars = $(e.target).parentsUntil("div").length + 1;
                var titleClass = self.starTitleClasses[numStars];
                var caption = '<span class="' + titleClass + '">' + self.starTitles[numStars] + '</span>';
                self.$element.val(numStars);
                self.$caption.html(caption);
                self.$stars.removeClass('rated');
                $(e.target).removeClass('rated').addClass('rated');
                $(e.target).parentsUntil("div", "s").removeClass('rated').addClass('rated');
                self.$element.trigger('rating.change', {
                    'value': numStars,
                    'caption': caption
                });
            });
            self.$reset.on("click", function(e) {
                var title = '<span class="' + self.resetTitleClass + '">' + self.resetTitle + '</span>';
                self.$stars.removeClass('rated');
                self.$caption.html(title);
                self.$element.val(self.resetValue);
                self.$element.trigger('rating.reset');
            });
        },
        createContainer: function() {
            var self = this;
            var css = (self.rtl) ? 'star-rating-rtl ' : 'star-rating ';
            css += (self.disabled || self.readonly) ? 'star-rating-disabled' : '';
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
            return '<div class="reset" title="' + self.resetButtonTitle + '">' + self.resetButton + '</div>';
        },
        renderCaption: function() {
            var self = this, val = self.inputValue;
            var css = isEmpty(self.starTitleClasses[val]) ? self.resetTitleClass : self.starTitleClasses[val];
            var caption = isEmpty(self.starTitles[val]) ? self.resetTitle : self.starTitles[val];
            return '<div class="caption"><span class="' + css + '">' + caption + '</span></div>';
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
        starTitles: {
            1: 'One Star',
            2: 'Two Stars',
            3: 'Three Stars',
            4: 'Four Stars',
            5: 'Five Stars',
        },
        starTitleClasses: {
            1: 'label label-danger',
            2: 'label label-warning',
            3: 'label label-info',
            4: 'label label-primary',
            5: 'label label-success',
        },
        resetButton: '<i class="glyphicon glyphicon-minus-sign"></i>',
        resetButtonTitle: 'Reset',
        resetTitle: 'Not Rated',
        resetTitleClass: 'label label-default',
        resetValue: 0
    };

}(jQuery));