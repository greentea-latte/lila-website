// Scroll to specific values
// scrollTo is the same
window.scroll({
  top: 2500,
  left: 0,
  behavior: 'smooth'
});

// Scroll certain amounts from current position
window.scrollBy({
  top: 100, // could be negative value
  left: 0,
  behavior: 'smooth'
});

$(document).ready(function () {

// sticky navi

$('.js--section-projects').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

// mobile navi

 /*MOBILE NAV*/

    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        // if (icon.hasClass('fas fa-bars')) {
        //     icon.addClass('fas fa-times');
        //     icon.removeClass('fas fa-bars');
        // } else {
        //     icon.removeClass('fas fa-times');
        //     icon.addClass('fas fa-bars');
        // }

    });

    $(window).resize(function () {

        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        if ($(window).width() > 767) {

            nav.css("display", "block");
            // icon.addClass('fas fa-times');
            icon.removeClass('fas fa-bars');

        } else {

            nav.css("display", "none");
            icon.addClass('fas fa-bars');
            // icon.removeClass('fas fa-times');

        }

    });



});
