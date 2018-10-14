var pContainerHeight = $('.background').height();
$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.layer-4').css({
      'transform' : 'translate(0px, '+ wScroll /7 +'%)',
      'filter' : 'blur('+ wScroll/180+'px)'

    });

    $('.layer-3').css({
      'transform' : 'translate(0px, '+ wScroll /15 +'%)'


    });

    $('.layer-2').css({
      'transform' : 'translate(0px, '+ wScroll /25+'%)'


    });

    $('.layer-1').css({
      'transform' : 'translate(0px, '+ wScroll /65 +'%)'
    });

    $('.bird-layer').css({
      'transform' : 'perspective(500px) translateZ('+ wScroll/2+'px) translateX('+ wScroll/2.5+'px)',
      'filter' : 'blur('+ wScroll/500+'px)'
      // 'transform' : 'translate('+ wScroll /5 +'%, -'+ wScroll /100 +'%)'
    });

  }

  if(wScroll >= $('.content').offset().top){

    $('.navbar').addClass('nav-show');

  }
  else{

    $('.navbar').removeClass( 'nav-show' );
  }

  if(wScroll >= $('.body-title').offset().top){

    $('.title').addClass('title-show');

  }
  else{

    $('.title').removeClass( 'title-show' );
  }

  if(wScroll >= $('.cont').offset().top-40){

    $('.title').addClass('title-left');





    $('#object').each(function(){

				$(this).addClass("slideUp");

		});

  }else{

      $('.title').removeClass( 'title-left' );
      // $('.img').removeClass('img-animate');

    }





  //
  // // Landing Elements
  // if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {
  //
  //
  // }
  //
  //
  // // Promoscope
  // if(wScroll > $('.large-window').offset().top - $(window).height()){
  //
  //   $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});
  //
  //   var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);
  //
  //   $('.window-tint').css({'opacity': opacity});
  //
  // }
  //
  //
  // // Floating Elements
  //
  // if(wScroll > $('.blog-posts').offset().top - $(window).height()){
  //
  //   var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();
  //
  //   $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});
  //
  //   $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});
  //
  // }
});
