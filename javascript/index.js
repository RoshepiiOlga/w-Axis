$('.slct').click(function(){
  let dropBlock = $(this).parent().find('.drop');
  let li = '';

  for (let i = 1; i <= 50; i ++){
    li += '<li><a val=' + i + '>' + i + '</a></li>';
  }
  dropBlock.html(li);

  if( dropBlock.is(':hidden') ) {
    dropBlock.slideDown();
    $(this).addClass('active');

    $('.drop').find('li').click(function(){
      let selectResult = $(this).html();

      $(this).parent().parent().find('input').val(selectResult);
      $(this).parent().parent().find('.slct').removeClass('active').html(selectResult);
      dropBlock.slideUp();
    });
  }
  else {
    $(this).removeClass('active');
    dropBlock.slideUp();
  }
return false;
});
