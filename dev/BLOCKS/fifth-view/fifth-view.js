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
