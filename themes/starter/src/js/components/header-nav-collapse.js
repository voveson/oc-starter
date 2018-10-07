/**
 * Header Nav Collapse
 *
 */

import $ from 'jquery';

$(() => {
  $('.js-header-nav-collapse').click(function(e) {
    e.preventDefault();
    const target = $(this).data('header-nav-collapse');
    $(target).toggleClass('header-nav-is-open');
  });

  Modernizr.on('touchevents', (result) => { // eslint-disable-line no-undef
    if (result && $(window).outerWidth() > 767) {
      $('.header-nav-section__item').on('touchstart', function(e) {
        if (!$(this).hasClass('hover') && $(this).has('.header-nav-dropdown').length > 0) {
          e.preventDefault();
          e.stopPropagation();
        }

        $('.header-nav-section__item').removeClass('hover');
        $(this).toggleClass('hover');
      });
    }
  });
});
