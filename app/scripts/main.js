/*global jQuery */

(function($) {
    'use strict';

    var helpers = {
        mobileNav: {
            toggle: function() {
                var els = {
                    open: $('.js-toggle-open'),
                    close: $('.js-toggle-close')
                };

                els.open.on('click', function() {
                    $(this).addClass('nav-toggle--hidden');
                    els.close.removeClass('nav-toggle--hidden');
                    helpers.mobileNav.toggleNav();
                });

                els.close.on('click', function() {
                    $(this).addClass('nav-toggle--hidden');
                    els.open.removeClass('nav-toggle--hidden');
                    helpers.mobileNav.toggleNav();
                });
            },
            toggleNav: function() {
                var nav = $('.js-mobile-nav');

                nav.toggleClass('js-nav-hidden');
            },
            init: function() {
                helpers.mobileNav.toggle();
            }
        },

        init: function() {
            helpers.mobileNav.init();
        }
    };

    helpers.init();
})(jQuery);
