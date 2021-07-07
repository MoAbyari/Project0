
$(document).ready(function(){
let tuRn = 0;
let winner = '';

if(tuRn % 2 === 0){
  winner = 'O'
}else if (tuRn % 2 !== 0){winner = 'X'}
let gameBox = ['sGr0','sGr1','sGr2','sGr3','sGr4','sGr5','sGr6','sGr7','sGr8'];

$('.cell').on('click',function(){
tuRn += 1
console.log(tuRn);
})

const winNer = function (gameBox){
  if ((gameBox[0]===gameBox[1]) && (gameBox[0]===gameBox[2])
      || (gameBox[0]===gameBox[3]) && (gameBox[0]===gameBox[6])
      || (gameBox[0]===gameBox[4]) && (gameBox[0]===gameBox[8])

      || (gameBox[1]===gameBox[4]) && (gameBox[1]===gameBox[7])

      || (gameBox[2]===gameBox[5]) && (gameBox[2]===gameBox[8])
      || (gameBox[2]===gameBox[4]) && (gameBox[2]===gameBox[6])

      || (gameBox[3]===gameBox[4]) && (gameBox[3]===gameBox[5])
      || (gameBox[6]===gameBox[7]) && (gameBox[6]===gameBox[8])
    )
  {
  const result = `${winner} is winner`;
  console.log(result);
  }
};

$('#cell0').click(function(){
  if (tuRn % 2 === 0 ){
    $(this).css({'background-color' : 'blue','font-size':'80px', 'text-align':'center'});
    $(this).text('X');
    gameBox[0] = 'X';
    console.log(gameBox);
  } else if (tuRn % 2 !== 0){
    $(this).css({'background-color' : 'red','font-size':'80px', 'text-align':'center'});
    $(this).text('O')
    gameBox[0] = 'O'};
    console.log(gameBox);
    winNer(gameBox);
})
$('#cell1').click(function(){
  if (tuRn % 2 === 0 ){
    $(this).css({'background-color' : 'blue','font-size':'80px', 'text-align':'center'});
    $(this).text('X');
    gameBox[1] = 'X';
    console.log(gameBox);
  } else if (tuRn % 2 !== 0){
    $(this).css({'background-color' : 'red','font-size':'80px', 'text-align':'center'});
    $(this).text('O')
    gameBox[1] = 'O'};
    console.log(gameBox);
    winNer(gameBox);
})
$('#cell2').click(function(){
  if (tuRn % 2 === 0 ){
    $(this).css({'background-color' : 'blue','font-size':'80px', 'text-align':'center'});
    $(this).text('X');
    gameBox[2] = 'X';
    console.log(gameBox);
  } else if (tuRn % 2 !== 0){
    $(this).css({'background-color' : 'red','font-size':'80px', 'text-align':'center'});
    $(this).text('O')
    gameBox[2] = 'O'};
    console.log(gameBox);
    winNer(gameBox);
})
$('#cell3').click(function(){
  if (tuRn % 2 === 0 ){
    $(this).css({'background-color' : 'blue','font-size':'80px', 'text-align':'center'});
    $(this).text('X');
    gameBox[3] = 'X';
    console.log(gameBox);
  } else if (tuRn % 2 !== 0){
    $(this).css({'background-color' : 'red','font-size':'80px', 'text-align':'center'});
    $(this).text('O')
    gameBox[3] = 'O'};
    console.log(gameBox);
    winNer(gameBox);
})
$('#cell4').click(function(){
  if (tuRn % 2 === 0 ){
    $(this).css({'background-color' : 'blue','font-size':'80px', 'text-align':'center'});
    $(this).text('X');
    gameBox[4] = 'X';
    console.log(gameBox);
  } else if (tuRn % 2 !== 0){
    $(this).css({'background-color' : 'red','font-size':'80px', 'text-align':'center'});
    $(this).text('O')
    gameBox[4] = 'O'};
    winNer(gameBox);
    console.log(gameBox);
})
$('#cell5').click(function(){
  if (tuRn % 2 === 0 ){
    $(this).css({'background-color' : 'blue','font-size':'80px', 'text-align':'center'});
    $(this).text('X');
    gameBox[5] = 'X';
    console.log(gameBox);
  } else if (tuRn % 2 !== 0){
    $(this).css({'background-color' : 'red','font-size':'80px', 'text-align':'center'});
    $(this).text('O');
    gameBox[5] = 'O'};
    console.log(gameBox);
    winNer(gameBox);
})
$('#cell6').click(function(){
  if (tuRn % 2 === 0 ){
    $(this).css({'background-color' : 'blue','font-size':'80px', 'text-align':'center'});
    $(this).text('X');
    gameBox[6] = 'X';
    console.log(gameBox);
  } else if (tuRn % 2 !== 0){
    $(this).css({'background-color' : 'red','font-size':'80px', 'text-align':'center'});
    $(this).text('O')
    gameBox[6] = 'O'};
    console.log(gameBox);
    winNer(gameBox);
})
$('#cell7').click(function(){
  if (tuRn % 2 === 0 ){
    $(this).css({'background-color' : 'blue','font-size':'80px', 'text-align':'center'});
    $(this).text('X');
    gameBox[7] = 'X';
    console.log(gameBox);
  } else if (tuRn % 2 !== 0){
    $(this).css({'background-color' : 'red','font-size':'80px', 'text-align':'center'});
    $(this).text('O')
    gameBox[7] = 'O'};
    winNer(gameBox);
    console.log(gameBox);
})
$('#cell8').click(function(){
  if (tuRn % 2 === 0 ){
    $(this).css({'background-color' : 'blue','font-size':'80px', 'text-align':'center'});
    $(this).text('X');
    gameBox[8] = 'X';
    console.log(gameBox);
  } else if (tuRn % 2 !== 0){
    $(this).css({'background-color' : 'red','font-size':'80px', 'text-align':'center'});
    $(this).text('O')
    gameBox[8] = 'O'};
    winNer(gameBox);
    console.log(gameBox);
})


});
