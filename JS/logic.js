let tuRn = 0;
let winner = '';
let gameBox = ['sQr0','sQr1','sQr2','sQr3','sQr4','sQr5','sQr6','sQr7','sQr8'];
let currentPlayer = 'O';

// let player1nameInput = ''
// $('.start').on('click', function(){
//   let player1nameInput = $('#player1').val();
//   console.log(player1nameInput);
// })

///////////////////////////// Who is the winner //////////////////////////////
const winnerVar = function(){
  if((tuRn) % 2 === 0){
  winner = 'X'
  }else if ((tuRn) % 2 !== 0){winner = 'O'}
}

//////////////////////////// Logic for winning ///////////////////////////////
const winNer = function (gameBox){
  if ((gameBox[0]!=='sQr0')&& ((gameBox[0]===gameBox[1]) && (gameBox[1]===gameBox[2]))
  || (gameBox[3]!=='sQr3') && ((gameBox[0]===gameBox[3]) && (gameBox[3]===gameBox[6]))
  || (gameBox[4]!=='sQr4') && ((gameBox[0]===gameBox[4]) && (gameBox[4]===gameBox[8]))

  || (gameBox[7]!=='sQr7') && ((gameBox[1]===gameBox[4]) && (gameBox[4]===gameBox[7]))

  || (gameBox[2]!=='sQr2') && ((gameBox[2]===gameBox[5]) && (gameBox[5]===gameBox[8]))
  || (gameBox[6]!=='sQr6') && ((gameBox[2]===gameBox[4]) && (gameBox[4]===gameBox[6]))

  || (gameBox[5]!=='sQr5') && ((gameBox[3]===gameBox[4]) && (gameBox[4]===gameBox[5]))
  || (gameBox[8]!=='sQr8') && ((gameBox[6]===gameBox[7]) && (gameBox[7]===gameBox[8]))
    )
  {
    winnerVar();
    const result = `${winner} is winner`;
    $('.WINNER').text(`${winner} is the winner`)
    $('.cell').attr('disabled','disabled');
    } else if (tuRn > 8){ $('.WINNER').text(`Draw!`)};


  };
