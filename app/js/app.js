$(document).ready(function() {

  /* ----
  // Navigation
  ------- */

  // Home to Page
  const mainNavElem = $('.mainNav__elem  a').not($('.mainNav__elem--pageActive a'));

  mainNavElem.click(function() {

    let pageName = $(this).text();

    // Transition
    $('.transition').toggle(function() {

      $('.transition__slide').addClass('active');

      // Animation Main
      $('main').css({top: '-40%'}).delay(600).promise().then(function() {

        // Reset Main
        $('main').css({top: '0', 'transition-duration': '0s'}).promise().then(function() {

          $('main').css({'transition-duration': ''});

        });

        // Edit Home
        $('main').addClass('pageActive');

        // Display Page Select
        $(`#${pageName}`).addClass('active');

        // Change h1 Position
        $('main h1').remove();
        $('.page.active .pageBackground').prepend(`<h1 class="title-h1">${pageName}</h1>`);

        // Scrollbar
        scrollbarPage();

        // Transition finish
        $('.transition__slide').removeClass('active').delay(600).promise().then(function() {

          $('.transition').toggle();

        });

      });

    });

  });

  // Page to Home
  const backToHome = $('.mainNav__elem--pageActive a, .header__identity a');

  backToHome.click(function() {

    // Transition
    $('.transition').toggle(function() {

      $('.transition__slideBack').addClass('active');

      // Animation Main + Page Active
      $('main, .page.active').css({top: '40%'}).delay(600).promise().then(function() {

        // Reset Main + Page Active
        $('main, .page.active').css({top: '0', 'transition-duration': '0s'});

        // Change h1 Position
        $('.page.active h1').remove();
        $('main .background').prepend('<h1 class="title-h1">John Doe</h1>');

        // Hide Page Select
        $('.page.active').removeClass('active');

        // Edit Home
        $('main').removeClass('pageActive');

        // Transition finish
        $('.transition__slideBack').removeClass('active').delay(600).promise().then(function() {

          $('.transition').toggle();

          // Reset Main + Page Active > transition-duration
          $('main, .page').css({'transition-duration': ''});

        });

      });

    });

  });


  /* ----
  // Scrollbar
  ------- */

  function scrollbarPage() {

    if($('.page.active') && $('.page.active').height() > window.innerHeight) {

      const scrollbar = $('.scrollbar');
      const scrollbarThumb = $('.scrollbar__thumb');
      let spaceTopBottom = ($('.page.active').height() + 220) - $('.page.active .pageWrap').height();

      // Initialisation
      scrollbarThumb.css('top', '0');

      // Scrollbar Height
      let scrollbarHeight = window.innerHeight - spaceTopBottom;
      scrollbar.height(`${scrollbarHeight}px`);

      // Thumb Height
      let scrollbarThumbHeightInPercent = (window.innerHeight * 100) / $('.page.active').height();
      scrollbarThumb.height(`${scrollbarThumbHeightInPercent}%`);

      // Move Scrollbar
      $(window).scroll(function() {

        // Height of Scrollbar space for scroll in percent
        let heightScrollbarForScrollInPercent = 100 - scrollbarThumbHeightInPercent;

        // Scrollbar Thumb Position
        let scrollbarThumbPosition = (($(window).scrollTop() * 100) / ($('.page.active').height() + 220 - window.innerHeight) * heightScrollbarForScrollInPercent) / 100;
        scrollbarThumb.css('top', `${scrollbarThumbPosition}%`);

      });

    }

  }

});
