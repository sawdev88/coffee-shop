$(window).on('scroll', function(event){
  var position = $(this).scrollTop();

  // hide brand when scroll down and show when at the top
  if ($(window).width() > 520) {
    if (position > 15) {
      $('.main-nav').addClass('nav-scroll-up');
    } else {
      $('.main-nav').removeClass('nav-scroll-up');
    }
  }

  //nav spy
  if (position < $('#menu').offset().top) {
    removeSelected();
    $('.home-nav').addClass('selected');
  }
  if (position > $('#menu').offset().top) {
    removeSelected();
    $('.menu-nav').addClass('selected');
  }

  if (position > $('#about').offset().top - 100) {
    removeSelected();
    $('.about-nav').addClass('selected');
  }

  if (position > $('#contact').offset().top - 200) {
    removeSelected();
    $('.contact-nav').addClass('selected');
  }

});

var removeSelected = function () {
  $('li').removeClass('selected');
}

// show nav on mobile
$('.mobile-show-nav').on('click', function () {
  $('.main-nav ul').fadeToggle();
})
