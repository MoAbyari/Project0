//
//
// // const gamebox = [sGr0,sGr1,sGr2,sGr3,sGr4,sGr5,sGr6,sGr7,sGr8]
//
//
// const winNer = function (gameBox){
//   if ((gameBox[0]===gameBox[1]) && (gameBox[0]===gameBox[2])
//       || (gameBox[0]===gameBox[3]) && (gameBox[0]===gameBox[6])
//       || (gameBox[0]===gameBox[4]) && (gameBox[0]===gameBox[8])
//
//       || (gameBox[1]===gameBox[4]) && (gameBox[1]===gameBox[7])
//
//       || (gameBox[2]===gameBox[5]) && (gameBox[2]===gameBox[8])
//       || (gameBox[2]===gameBox[4]) && (gameBox[2]===gameBox[6])
//
//       || (gameBox[3]===gameBox[4]) && (gameBox[3]===gameBox[5])
//       || (gameBox[6]===gameBox[7]) && (gameBox[6]===gameBox[8])
//     )
//   {
//   const result = 'X is winner';
//   console.log(result);
//   }
// };
//
// // winNer(['sGr0','sGr1','sGr2','X','X','X','sGr6','sGr7','sGr8']);
// // winNer(['sGr0','sGr1','X','sGr3','sGr4','X','sGr6','sGr7','X']);
// // winNer(['sGr0','sGr1','X','sGr3','X','sGr5','X','sGr7','sGr8']);
// // winNer(['sGr0','sGr1','sGr2','sGr3','sGr4','sGr5','sGr6','sGr7','sGr8']);
// // winNer(['sGr0','sGr1','X','X','sGr4','sGr5','sGr6','X','sGr8']);
// // winNer(['sGr0','sGr1','sGr2','sGr3','sGr4','sGr5','sGr6','sGr7','sGr8']);
// // winNer(['sGr0','sGr1','sGr2','sGr3','sGr4','sGr5','sGr6','sGr7','sGr8']);
// // winNer(['X','X','X','O','O','O','sGr6','sGr7','sGr8']);
