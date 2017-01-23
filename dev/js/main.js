$(function() {
  $("#toHome").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
  });
});

$(function() {
  $('.certifications__pictures').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});

$(function() {
  $('#conversion-second-phone').mask('+375(99) 999-99-99');
  
  $('.contacts__map-overlay').click(function(e) {
		$(e.target).remove();
	});
});

$(function() {
  $('.modal-trigger').leanModal();
  
  $('.fifth-view__item-question').click(function(e) {
    var answerObj = $(e.currentTarget).siblings('.fifth-view__item-answer');
    var dataHeightAnswer = answerObj.data('height');
    var heightAnswer = answerObj.height();
    var simbolObj = $(e.currentTarget).find('.material-icons');
    
    if (dataHeightAnswer === undefined) {
      answerObj.data('height', heightAnswer);
      dataHeightAnswer = heightAnswer;
    }
    
    if (answerObj.height() === 0 || answerObj.css('display') === 'none') {
      answerObj.height(0).show().height(dataHeightAnswer);
      simbolObj.text('remove');
    } else {
      answerObj.height(0);
      simbolObj.text('add');
    }
  });
});

$(function(){
  $('#first-view-phone').mask('+375(99) 999-99-99');
  
  $('.first-view__partners > .wrapper').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 767,
        settings: {
          autoplay: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 479,
        settings: {
          autoplay: false,
          slidesToShow: 2
        }
      }
    ]
  });
});

$(function() {
  $('.fourth-view__tile-text').mCustomScrollbar({
    theme: 'dark'
  });
});

$(function() {
  $('#modal-phone').mask('+375(99) 999-99-99');
});

$(function() {
  var heightGridClose;
  
  $('.second-view__tile-text').mCustomScrollbar({
    theme: 'dark'
  });
  
  if ($('.second-view__tile').length > 6) {
    $('.second-view__more-wrapper').show();
    $('.second-view__tile').slice(6).hide();
    //heightGridClose = $('.second-view__grid').height();
  }
  
  heightGrid();
  
  $(window).resize(function() {
    heightGrid();
  });
  
  
  $('.second-view__more-button').click(function() {
    var textOpen = 'Cвернуть';
    if ($('.second-view__more-button').text() !== textOpen) {
      $('.second-view__grid').css('max-height', heightGridClose);
      $('.second-view__tile').show();
      
      $('.second-view__grid').stop(true, true);
      $('.second-view__grid').animate({maxHeight: 9999}, 20000);
      
      $('.second-view__more-button').text(textOpen);
    } else {
      closeGrid();
    }
  });
  
  function heightGrid() {
    var breakpointMd = 991;
    var breakpointXs = 479;
    
    if (document.documentElement.clientWidth < breakpointXs) {
      heightGridClose = 1920;
    } else if (document.documentElement.clientWidth < breakpointMd) {
      heightGridClose = 960;
    } else {
      heightGridClose = 641;
    }
    
    closeGrid();
  }
  
  function closeGrid() {
    $('.second-view__grid').stop(true, true);
    $('.second-view__grid').animate(
      {height: heightGridClose},
      800,
      'swing',
      function() {
        $('.second-view__grid').css({
          'height': 'auto',
          'max-height': heightGridClose
        });
      }
    );
    $('.second-view__more-button').text('Еще функции...');
  }
});

$(function() {
  $('.aside__menu').sideNav({
    edge: 'right'
  });
});

$(function() {
  $('#conversion-phone').mask('+375(99) 999-99-99');
});
