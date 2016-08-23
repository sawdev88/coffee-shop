var removeSelected = function () {
  $('li').removeClass('selected');
}

var hideNav = function () {
    $('.main-nav ul').fadeOut();
}

$(window).on('scroll', function(event){
  var position = $(this).scrollTop();

  // hide brand when scroll down and show when at the top
  if ($(window).width() > 520) {
    if (position > 15) {
      $('.main-nav').addClass('nav-scroll-up');
      $('.overlay').fadeOut(500);
    } else {
      $('.main-nav').removeClass('nav-scroll-up');
      $('.overlay').fadeIn(800);
    }

  }

  //nav spy
  if (position < $('#menu').offset().top) {
    removeSelected();
    $('.home-nav').addClass('selected');
  }

  if (position > $('#menu').offset().top - 48) {
    removeSelected();
    $('.menu-nav').addClass('selected');
  }

  if (position > $('#about').offset().top - 44) {
    removeSelected();
    $('.about-nav').addClass('selected');
  }

  if (position > $('#contact').offset().top - 180) {
    removeSelected();
    $('.contact-nav').addClass('selected');
  }

  if (position > $('#about').offset().top + 200) {
    $('.icons figure').addClass('scale-up');
    $('.icons figure').removeClass('scale-down');
  } else {
    $('.icons figure').addClass('scale-down');
    $('.icons figure').removeClass('scale-up');
  }

});

// show nav on mobile
$('.mobile-show-nav').on('click', function (e) {
  e.stopPropagation();
  $('.main-nav ul').fadeToggle();
})


// hide nav when body is clicked
$('body').on('click', hideNav);
