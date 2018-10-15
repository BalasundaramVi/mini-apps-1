
var gameOver = false;

var squares = document.getElementsByClassName('col');

var curPlayer = true;
var playerOneWins = 0;
var playerTwoWins = 0;

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', () => {
    playMove(event.target);
  })
}

var remainingSpots = 9;
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
      square.style.cssText='background-color: lightcoral';
      remainingSpots--;
      document.getElementById('turn').innerText = `Player O's turn!`;
    } else {
      square.innerText='O';
      square.style.cssText='background-color: lightblue';
      remainingSpots--;
      document.getElementById('turn').innerText = `Player X's turn!`;
    }
    square.style.color='black';
    board[row][col] = curPlayer;
    if (checkWins(curPlayer)) {
      if (curPlayer) {
        board = [['X', 'X', 'X'], ['X', 'X', 'X'],['X', 'X', 'X']];
        document.getElementById('turn').innerText = `Player X wins!!`;
        document.getElementById('turn').style.color = 'red';
        playerOneWins++;
        document.getElementById('p1score').innerText = playerOneWins.toString();
      } else {
        board = [['O', 'O', 'O'], ['O', 'O', 'O'],['O', 'O', 'O']];
        document.getElementById('turn').innerText = `Player O wins!!`;
        document.getElementById('turn').style.color = 'red';
        playerTwoWins++;
        document.getElementById('p2score').innerText = playerTwoWins.toString();
      }
    } else if (remainingSpots === 0) {
      document.getElementById('turn').innerText = `It's a tie!`;
      document.getElementById('turn').style.color = 'red';
    }
    curPlayer = !curPlayer;
  };
}

document.getElementById('reset').addEventListener('click', () => {
  board = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]];
  remainingSpots = 9;
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerText = 'A';
    squares[i].style.color = 'white';
    squares[i].style.cssText='background-color: white';
    curPlayer = true;
  };
  document.getElementById('turn').style.color = 'black';
  document.getElementById('turn').innerText = "'X' Goes First!";
});