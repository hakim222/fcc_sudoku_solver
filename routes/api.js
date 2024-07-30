'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {
      let {puzzle,coordinate,value} = req.body;
      if(!puzzle || !coordinate || !value) return res.json({ error: 'Required field(s) missing' });
      if(!value.match(/^[1-9]$/)) return res.json({ error: 'Invalid value' });
      if(!coordinate.match(/^[a-i][1-9]$/ig)) return res.json({ error: 'Invalid coordinate'});
      if(puzzle.length!=81) return res.json({ error: 'Expected puzzle to be 81 characters long' });
      if (puzzle.match(/[^1-9.]/gi))return res.json({ error: 'Invalid characters in puzzle' });
      let rowMap = {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h':7, 'i':8};
      let colMap = {'1': 0, '2': 1, '3': 2, '4': 3, '5': 4, '6': 5, '7': 6, '8':7, '9':8};
      let [row, column] = coordinate.split("");
      row = rowMap[row.toLowerCase()];
      column = colMap[column];
      value = parseInt(value);

      let splittedRow = puzzle.match(/.{1,9}/g);
      if(splittedRow[row][column]==String(value))return res.json({valid: true})

      let placement = [];
      if(!solver.checkRowPlacement(puzzle, row, column, value)) placement.push("row");
      if(!solver.checkColPlacement(puzzle, row, column, value)) placement.push("column");
      if(!solver.checkRegionPlacement(puzzle, row, column, value)) placement.push("region");
      if(placement.length<1) return res.json({valid: true});
      return res.json({valid: false, conflict: placement})
    });
    
  app.route('/api/solve')
    .post((req, res) => {
      let puzzle = req.body.puzzle;
      if(!puzzle) return res.json({ error: 'Required field missing' });
      if(puzzle.length!=81) return res.json({ error: 'Expected puzzle to be 81 characters long' });
      if(puzzle.match(/[^1-9.]/gi))return res.json({ error: 'Invalid characters in puzzle' });
      
      let solution = solver.solve(puzzle);
      if(!solution) return res.json({ error: 'Puzzle cannot be solved' });
      return res.json({solution: solution});
    });
};
