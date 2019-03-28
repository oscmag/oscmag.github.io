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
    console.log('grid:', this.state.grid);
  }

  timer = (grid) => {
    this.setState({counter: this.state.counter + 1})
    setTimeout(() => {
      this.setState({grid})
    }, 2 * this.state.counter)
  }

  fillNextCell = async (grid, i = 0, j = 0) => {
    let pp = JSON.parse(JSON.stringify(grid));
    let availableNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let counter = 0;
    let loopThroughAvailableNumbs = async () => {
      if (counter === 9) {
        return 'none';
      }
      let availableNum = await this.findOneThatFits(pp, i, j, availableNums);
      if (availableNum !== 'none') {
        pp[i][j] = availableNum;
        await this.timer(pp);
        let nJ = j + 1;
        let nI = i;
        if (nJ > 8) {
          if (i === 8) {
            return;
          }
          nI++;
          nJ = 0;
        }
        let nextCell = await this.fillNextCell(pp, nI, nJ);
        if (nextCell === 'none') {
          availableNums.splice(availableNums.indexOf(availableNum, 1));
          console.log('availableNums: ', availableNums);
          if (availableNums.length < 1) {
            return 'none';
          }
        }
      } else {
        availableNums.splice(availableNums.indexOf(availableNum, 1));
        console.log('availableNums: ', availableNums);
        if (availableNums.length < 1) {
          return 'none';
        }
      }
      counter++;
      return await loopThroughAvailableNumbs();
    }
    return await loopThroughAvailableNumbs();
  }

  findOneThatFits = async (grid, i, j, availableNums) => {
    let counter = 0;
    while (counter < 9) {
      let randomIndex = Math.floor(Math.random() * availableNums.length);
      let availableNum = availableNums[randomIndex];
      if (i === 0 && j === 0) {
        return availableNum;
      };
      const isAvailable = await this.checkRow(grid, i, j, availableNum) && await this.checkColumn(grid, i, j, availableNum) && await this.checkBox(grid, i, j, availableNum);

      if (isAvailable) {
        console.log(i, j, (isAvailable), availableNum);
        return availableNum;
      } else {
        availableNums.splice(availableNums.indexOf(availableNum, 1));
        console.log('availableNums: ', availableNums);
        if (availableNums.length < 1) {
          return 'none';
        }
      }
    }
    return 'none';
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
