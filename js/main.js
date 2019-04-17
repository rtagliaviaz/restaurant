$(document).ready(function(){

  //smooth scroll
  $('.navbar-nav a').click(function (scr) {
    scr.preventDefault();
    let target = $(this).attr('href');

    $('html, body').stop().animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });

  //magnific popup
  $('.gallery-cont').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // other options
    gallery: {
      enabled: true
    }
  });
});
