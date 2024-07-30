class SudokuSolver {

  validate(puzzleString) {
    if (puzzleString.length != 81) return false;
    if (puzzleString.match(/[^1-9.]/gi)) return false;
    return true;
  }

  checkRowPlacement(puzzleString, row, column, value) {
    let splittedRow = puzzleString.match(/.{1,9}/g);
    if (splittedRow[row].includes(value)) return false;
    return true;
  }

  checkColPlacement(puzzleString, row, column, value) {
    const splittedColumn = Array(9).fill('');
    for (let i = 0; i < puzzleString.length; i++) {
      splittedColumn[i % 9] += puzzleString[i];
    }
    if (splittedColumn[column].includes(value)) return false;
    return true;
  }

  checkRegionPlacement(puzzleString, row, column, value) {
    const splittedRegion = [];
    const splittedIndex = Math.floor((row + column) / 5);
    // Define the starting indices for each 3x3 region in the string
    const regionStarts = [
      0, 3, 6,       // Row 1
      27, 30, 33,    // Row 2
      54, 57, 60     // Row 3
  ];
  
  for (const rowStart of regionStarts) {
      for (let colStart = 0; colStart < 3; colStart++) {
          // Compute the starting index of the 3x3 region
          const start = rowStart + colStart * 9;
          
          // Extract the 3x3 region from the string
          const region = [
            puzzleString[start], puzzleString[start+1], puzzleString[start+2],
            puzzleString[start+9], puzzleString[start+10], puzzleString[start+11],
            puzzleString[start+18], puzzleString[start+19], puzzleString[start+20]
          ];
          
          // Convert the region to a string and append to the regions array
          splittedRegion.push(region.join(''));
      }
  }
    if (splittedRegion[splittedIndex].includes(value)) return false;
    return true;
  }

  solve(puzzleString) {
    // Convert the puzzle string into a 2D board array
    const board = [];
    for (let i = 0; i < 9; i++) {
      board.push(puzzleString.slice(i * 9, (i + 1) * 9).split('').map(c => c === '.' ? 0 : parseInt(c)));
    }

    // Function to check if placing num in board[row][col] is valid
    function isValid(board, num, row, col) {
      // Check row
      for (let x = 0; x < 9; x++) {
        if (board[row][x] === num) return false;
      }

      // Check column
      for (let x = 0; x < 9; x++) {
        if (board[x][col] === num) return false;
      }

      // Check 3x3 box
      const startRow = Math.floor(row / 3) * 3;
      const startCol = Math.floor(col / 3) * 3;
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          if (board[startRow + r][startCol + c] === num) return false;
        }
      }

      return true;
    }

    // Function to find the next empty spot
    function findEmpty(board) {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (board[row][col] === 0) {
            return [row, col];
          }
        }
      }
      return null;
    }

    // Recursive function to solve the Sudoku board using backtracking
    function solveBoard(board) {
      const emptySpot = findEmpty(board);
      if (!emptySpot) return true; // Puzzle solved

      const [row, col] = emptySpot;
      for (let num = 1; num <= 9; num++) {
        if (isValid(board, num, row, col)) {
          board[row][col] = num;
          if (solveBoard(board)) {
            return true;
          }
          board[row][col] = 0; // Backtrack
        }
      }
      return false; // Trigger backtracking
    }

    // Start solving the board
    if (solveBoard(board)) {
      // Convert the solved board back into a string
      return board.flat().join('').replace(/0/g, '.');
    }

    return null;  // Return null if the puzzle is unsolvable
  }
}

module.exports = SudokuSolver;

