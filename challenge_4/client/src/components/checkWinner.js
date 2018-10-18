class checkWinner{

  constructor(row, col, color, board) {
    this.win = undefined;
    if (this.checkRow(row, col, color, board)) {
      this.win=true;
    } else if (this.checkCol(row, col, color, board)) {
      this.win=true;
    } else if (this.checkDiagonals(row, col, color, board)) {
      this.win=true;
    } else {
      this.win=false;
    }
  }

  // CHECK ROW ALGORITHM ////////////////////////////
  checkRow(row, col, color, board) {
    var start;
    var end;
    if ((col - 3) > 0) {
      start = col - 3;
    } else {
      start = 0;
    }
  
    if ((col + 3) > 6) {
      end = 6;
    } else {
      end = col + 3;
    }
    var count = 0;
    for (var i = start; i <= end; i++) {
      if (board[row][i] === color) {
        count++;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }
    }
    return false;
  }
  
  // CHECK COLUMN ALGORITHM ////////////////////////////
  checkCol(row, col, color, board) {
    var start;
    var end;
    if ((row - 3) > 0) {
      start = row - 3;
    } else {
      start = 0;
    }
  
    if ((row + 3) > 5) {
      end = 5;
    } else {
      end = row + 3;
    }
    var count = 0;
    for (var i = start; i <= end; i++) {
      if (board[i][col] === color) {
        count++;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }
    }
    return false;
  }
  
  // CHECK MINOR DIAGONAL ALGORITHM ////////////////////////////
  checkMinorDiagonals(row, col, color, board) {
    var startCol = col - 3;
    var endCol = col + 3;
    var startRow = row + 3;
    var endRow = row - 3;
  
    var count = 0;
    while (startCol <= endCol && startRow >= endRow) {
      if (startCol < 0 || startRow > 5 || startCol > 6 || startRow < 0) {
        startCol++;
        startRow--;
        continue;
      }
  
      if (board[startRow][startCol] === color) {
        count++;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }
  
      startCol++;
      startRow--;
    }
    return false;
  }

  // CHECK MAJOR DIAGONAL ALGORITHM ////////////////////////////
  checkMajorDiagonals(row, col, color, board) {
    var startCol = col - 3;
    var endCol = col + 3;
    var startRow = row - 3;
    var endRow = row + 3;
  
    var count = 0;
    while (startCol <= endCol && startRow <= endRow) {
      if (startCol < 0 || startRow < 0 || startCol > 6 || startRow > 5) {
        startCol++;
        startRow++;
        continue;
      }
  
      if (board[startRow][startCol] === color) {
        count++;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }
  
      startCol++;
      startRow++;
    }
    return false;
  }
  
  // CHECK ALL DIAGONALS ALGORITHM ////////////////////////////
  checkDiagonals(row, col, color, board) {
    if (this.checkMajorDiagonals(row, col, color, board)) {
      return true;
    } else if (this.checkMinorDiagonals(row, col, color, board)) {
      return true;
    }
    return false;
  }

};

export default checkWinner;