
$(document).ready(function(){

////////////////////////// tUrn Calculator //////////////////////////////////
$('.cell').on('click',function(){
  if(tuRn % 2 === 0){
  $('.WINNER').text( 'X Should Play')
  }else if (tuRn % 2 !== 0){
    $('.WINNER').text( 'O Should Play')}
})

/////////////////////////////// Sqr Click Events //////////////////////////////
$('.cell').click(function(){
    tuRn += 1
    const sQrId = $(this).attr('id');
    const sQrIdNum= sQrId.substr(4);
    if (tuRn % 2 === 0 ){
      $(this).addClass('Xcolor');
      $(this).text('X');
      gameBox[sQrIdNum] = 'X';

    } else if (tuRn % 2 !== 0){
      $(this).addClass('Ocolor');
      $(this).text('O')
      gameBox[sQrIdNum] = 'O'};
    winNer(gameBox);
    $(this).attr('disabled','disabled')

})
/////////////////////////////     Restart Button   /////////////////////////////
$('.start').on('click', function(){
  let player1nameInput = $('#player1').val()
  console.log(player1nameInput);
  $('#player1Name').html(player1nameInput);
})
/////////////////////////////     Restart Button   /////////////////////////////
$('.restart').on('click',function(){
  $('.cell').text('').removeClass('Xcolor Ocolor').removeAttr('disabled');
  tuRn = 0;
  $('.WINNER').text('');
  gameBox = ['sQr0','sQr1','sQr2','sQr3','sQr4','sQr5','sQr6','sQr7','sQr8'];

})


// $('#player1Name').html(player1nameInput);

});
