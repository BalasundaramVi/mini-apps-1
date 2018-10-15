
var gameOver = false;

var squares = document.getElementsByClassName('col');

var curPlayer = true;

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', () => {
    playMove(event.target);
  })
}

var board = [[-1, -1, -1],
             [-1, -1, -1],
             [-1, -1, -1]];

var checkWins = player => {
  if(board[0][0] === player && board[0][1] === player && board[0][2] === player) {
    return true;
  } else if (board[1][0] === player && board[1][1] === player && board[1][2] === player) {
    return true;
  } else if (board[2][0] === player && board[2][1] === player && board[2][2] === player) {
    return true;
  } else if (board[0][0] === player && board[1][0] === player && board[2][0] === player) {
    return true;
  } else if (board[0][1] === player && board[1][1] === player && board[2][1] === player) {
    return true;
  } else if (board[0][2] === player && board[1][2] === player && board[2][2] === player) {
    return true;
  } else if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    return true;
  } else if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    return true;
  } else {
    return false;
  }
}

playMove = square => {
  var row = square.id.slice(0,1);
  var col = square.id.slice(1,2);
  if (board[row][col] === -1) {
    if (curPlayer) {
      square.innerText='X';
    } else {
      square.innerText='O';
    }
    square.style.color='black';
    board[row][col] = curPlayer;
    if (checkWins(curPlayer)) {
      if (curPlayer) {
        console.log('X wins!');
      } else {
        console.log('O wins!');
      }
    }
    curPlayer = !curPlayer;
  };
  console.log(curPlayer);
  console.log(board);
}