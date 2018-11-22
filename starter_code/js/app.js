$(document).ready(function(){


    $(".owl-carousel").owlCarousel({
      loop:true,
      nav:false,
      margin:10,
      autowidth:true,
      autoplay:true,
      autoplayTimeout:4000,
      autoplayHoverPause:true,
      items:1,
    });
  
    $('.remaining-post, .readless').hide();
  
    $('.readmore').click(function(e){
      e.preventDefault();
      $(this).siblings('.remaining-post, .readless').slideDown();
      $(this).hide();
    });
  
    $('.readless').click(function(e){
      e.preventDefault();
      $(this).siblings('.remaining-post').slideUp();
      $(this).hide();
      $(this).siblings('.readmore').show();
  
    });

    //navigation
    $('#mobile-menu-trigger').click(function(){
      $('header nav > div').toggle();
    });
  });

