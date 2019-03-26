import React, { Component } from 'react';
import './Sudoku.css';

class Sudoku extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      counter: 0,
    }
  }

  componentDidMount = () => {
    this.createGrid();
  }

  createGrid = () => {
    const grid = [];
    for (let i = 0; i < 9; i++) {
      grid.push(['','','','','','','','','',]);
    }
    this.setState({grid});
  }

  fillGrid = async () => {
    const grid = [];
    for (let i = 0; i < 9; i++) {
      grid.push(['','','','','','','','','',]);
    }
    let start = Date.now();
    await this.fillNextCell(grid);
    let finish = Date.now();
    let processingTime = (finish - start) / 1000;
    console.log('processing time:', processingTime);
  }

  fillNextCell = async (grid, i = 0, j = 0) => {
    this.setState({counter: this.state.counter+1})
    let pp = JSON.parse(JSON.stringify(grid));
    let notAvailable = new Set();
    let availableNum;

    if (typeof pp[i][j] === 'number') {
      notAvailable.add(pp[i][j]);
      if (notAvailable.size > 8) {
        return 'none';
      }
      availableNum = await this.getAvailableNum(pp, i, j, notAvailable);
    } else {
      availableNum = await this.getAvailableNum(pp, i, j);
    }

    if (availableNum === 'none') {
      return 'none';
    }
    grid[i][j] = availableNum;
    pp = JSON.parse(JSON.stringify(grid));
    await setTimeout(() => {
      this.setState({grid: pp});
    }, 100 * this.state.counter);
    let nJ = j + 1;
    let nI = i;
    if (nJ > 8) {
      if (i === 8) {
        return;
      }
      nI++;
      nJ = 0;
    }
    const filledCell = await this.fillNextCell(pp, nI, nJ);
    if (filledCell === 'none') {
      return 'redo';
    } else if (filledCell === 'redo') {
      return await this.fillNextCell(pp, i, j);
    }
  }

  getAvailableNum = async (grid, i, j, notAvailable) => {
    if (!notAvailable) {
      notAvailable = new Set();
    }
    let rNum = Math.floor(Math.random() * 9) + 1;
    if (notAvailable.has(rNum) && notAvailable.size < 9) {
      return this.getAvailableNum(grid, i, j, notAvailable);
    }
    if (i === 0 && j === 0) {
      return rNum;
    };


    const isAvailable = await this.checkRow(grid, i, j, rNum) && await this.checkColumn(grid, i, j, rNum) && await this.checkBox(grid, i, j, rNum);

    if (isAvailable) {
      console.log('av', i, j, (isAvailable), rNum)
      return rNum;
    } else {
      console.log('not', i, j, (isAvailable), rNum)
      notAvailable.add(rNum);
      if (notAvailable.size > 8) {
        return 'none';
      }
      return await this.getAvailableNum(grid, i, j, notAvailable);
    }
  }

  checkRow = (grid, i, j, rNum) => {
    for (let j2 = 0; j2 < 9; j2++) {
      if (grid[i][j2] === rNum) {
        return false;
      }
    }
    return true;
  }

  checkColumn = (grid, i, j, rNum) => {
    for (let i2 = 0; i2 < 9; i2++) {
      if (grid[i2][j] === rNum) {
        return false;
      }
    }
    return true;
  }

  checkBox = async (grid, i, j, rNum) => {
    // console.log('start');
    for (let a = 3; a < 10; a = a + 3) {
      if (i < a) {
        for (let b = 3; b < 10; b = b + 3) {
          let found = await this.innerFunc(grid, i, j, rNum, a, b);
          switch(found) {
            case 'true':
              return true;
            case 'false':
              return false;
            default:
              continue;
          }
        }
      }
    }
    return false;
  }

  innerFunc = (grid, i, j, rNum, aMax, bMax) => {
    if (j < bMax) {
      for (let i2 = aMax-3; i2 < aMax; i2++) {
        for (let j2 = bMax-3; j2 < bMax; j2++) {
          if (grid[i2][j2] === rNum) {
            return 'false';
          }
        }
      }
      return 'true';
    }
  }

  checkSquare = (i, j) => {
    let square = '';
    if (i < 3 ) {
      square += 'T';
      if (j < 3) {
        square += 'L';
      } else if (j < 6) {
        square += 'M';
      } else {
        square += 'R';
      }
    } else if (i < 6) {
      square += 'M';
      if (j < 3) {
        square += 'L';
      } else if (j < 6) {
        square += 'M';
      } else {
        square += 'R';
      }
    } else {
      square += 'B';
      if (j < 3) {
        square += 'L';
      } else if (j < 6) {
        square += 'M';
      } else {
        square += 'R';
      }
    }

    return square;
  }

  render() {
    const {grid} = this.state;

    return (
      <div className='wrapper'>
        <div className='sudoku-menu'>
          <button onClick={this.fillGrid}>Fill Grid</button>
          <button onClick={this.createGrid}>Empty Grid</button>
        </div>
        <div className='grid'>
          {grid && grid.map((row, i) => {
            return row.map((cell, j) => {
              return <div className='cell' key={j}>{cell}</div>
            })
          })}
        </div>
      </div>
    );
  }
}

export default Sudoku;
