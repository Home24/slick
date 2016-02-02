// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
;(function ($) {
    $.extend($.fn, {
        outerWidth: function (includeMargin) {
            var el = this[0];
            var width = el.offsetWidth;

            if (!includeMargin) return width;

            var style = getComputedStyle(el);

            width += parseInt(style.marginLeft) + parseInt(style.marginRight);
            return width;
        },
        outerHeight: function (includeMargin) {
            var el = this[0];
            var height = el.offsetHeight;

            if (!includeMargin) return height;

            var style = getComputedStyle(el);

            height += parseInt(style.marginTop) + parseInt(style.marginBottom);
            return height;
        }
    })
})(window.Zepto);
