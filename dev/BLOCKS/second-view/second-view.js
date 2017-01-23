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
