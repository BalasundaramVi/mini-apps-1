const createBoard = () => {
  const board = [];
  for (let i = 0; i < 8; i += 1) {
    const row = [];
    for (let j = 0; j < 8; j += 1) {
      let tile;
      if ((i + j) % 2 === 1) {
        tile = 'dark';
      } else {
        tile = 'light';
      }
      row.push({
        piece: null,
        king: false,
        tile,
        selected: false,
        moveOption: null,
      });
    }
    board.push(row);
  }

  board[0][1].piece = 'white';
  board[0][3].piece = 'white';
  board[0][5].piece = 'white';
  board[0][7].piece = 'white';
  board[1][0].piece = 'white';
  board[1][2].piece = 'white';
  board[1][4].piece = 'white';
  board[1][6].piece = 'white';
  board[2][1].piece = 'white';
  board[2][3].piece = 'white';
  board[2][5].piece = 'white';
  board[2][7].piece = 'white';

  board[5][0].piece = 'red';
  board[5][2].piece = 'red';
  board[5][4].piece = 'red';
  board[5][6].piece = 'red';
  board[6][1].piece = 'red';
  board[6][3].piece = 'red';
  board[6][5].piece = 'red';
  board[6][7].piece = 'red';
  board[7][0].piece = 'red';
  board[7][2].piece = 'red';
  board[7][4].piece = 'red';
  board[7][6].piece = 'red';

  return board;
};

export default createBoard;
