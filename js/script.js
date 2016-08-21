$(window).on('scroll', function(event){
  var postion = $(this).scrollTop();
  console.log(postion);

  // hide brand when scroll down and show when at the top
  if (postion > 15) {
    $('.main-nav').addClass('nav-scroll-up');
  } else {
    $('.main-nav').removeClass('nav-scroll-up');
  }

});
