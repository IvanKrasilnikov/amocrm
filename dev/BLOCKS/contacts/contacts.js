$(function() {
  $('#conversion-second-phone').mask('+375(99) 999-99-99');
  
  $('.contacts__map-overlay').click(function(e) {
		$(e.target).remove();
	});
});
