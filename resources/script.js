$(document).ready(function() {

// More jQuery code goes in here later
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed:2000,
    slidesToShow: 1,
    draggable:false
  });
  var lastScrollTop=0;
  $(window).scroll(function() {
    var currentScrollTop=$(this).scrollTop();
    var navHeight=$('nav').height();

    if(currentScrollTop-lastScrollTop>50){
      console.log("hide");
      $('nav').animate({top: '-' + navHeight},150);
      lastScrollTop=currentScrollTop;
    }else if(lastScrollTop-currentScrollTop>50){
      console.log("show");
      $('nav').animate({top: '0px'}, 150);
      lastScrollTop = currentScrollTop;
    }
  });
});
