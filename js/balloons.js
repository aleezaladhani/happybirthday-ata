$('.balloon-wrapper').click(function(e) {
  balloonID = $('#'+e.target.id+'').parent().attr('id');

  setTimeout(function() {
    $('#'+balloonID+' .note').css({'display': 'flex', 'z-index': '1001'});
    $('#'+balloonID+'').css('z-index', '1000');
    $('#'+balloonID+' .balloon').css('z-index', '1002');
    $('#'+balloonID+' .face').css({'z-index': '1003', 'opacity': '0.8'});
  }, 0);

  $('.row > div:not(#'+balloonID+'), .main-message, #footer').css('opacity', '0.4');
})

$('.audio-controls').click(function(e) {
  if ($('.audio-controls i').attr('class') == 'fa fa-volume-up') {
    $('.audio-controls i').attr('class', 'fa fa-volume-off');
  } else if ($('.audio-controls i').attr('class') == 'fa fa-volume-off') {
    $('.audio-controls i').attr('class', 'fa fa-volume-up');
  }
})

$(document).click(function(e) {
  if (!$(e.target).closest('.note').length) {
    if ($('.note').is(":visible")) {
      $('.note').hide();
      $('.balloon-wrapper').css('z-index', '998');
      $('.face').css('opacity', '0.4');
      $('.main-message, #footer, .balloon-wrapper').css('opacity', '1');
    }
    if ($(e.target).attr('class') == 'face') {
      balloonID = $('#'+e.target.id+'').parent().attr('id');
      $('.row > div:not(#'+balloonID+'), .main-message, #footer').css('opacity', '0.4');
    }
  }
})
