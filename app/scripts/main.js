(function() {
    'use strict';
    
    var helpers = {
        mobile_nav: {
            toggle: function() {
                var els = {
                    open:  $('.js-toggle-open'),
                    close: $('.js-toggle-close')
                };

                els.open.on('click', function() {
                    $(this).addClass('nav-toggle--hidden');
                    els.close.removeClass('nav-toggle--hidden');
                    helpers.mobile_nav.toggle_nav();
                });

                els.close.on('click', function() {
                    $(this).addClass('nav-toggle--hidden');
                    els.open.removeClass('nav-toggle--hidden');
                    helpers.mobile_nav.toggle_nav();
                });
            },
            toggle_nav: function() {
                var nav = $('.js-mobile-nav');

                nav.toggleClass('js-nav-hidden');
            },
            init: function() {
                helpers.mobile_nav.toggle();
            }
        },
        
        init: function() {
            helpers.mobile_nav.init();
        }
    };

    helpers.init();
})();