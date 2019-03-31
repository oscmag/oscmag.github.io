import React, { Component } from 'react';
import withDragDropContext from './withDragDropContext';
import './Sudoku.css';

import Square from './Square';
import Cell from './Cell';
import helpers from '../../helpers/sudoku-helpers';

class Sudoku extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      counter: 0,
      availableNumbers: [1,2,3,4,5,6,7,8,9],
    }
  }

  componentWillMount = () => {
    this.createGrid();
  }

  createGrid = () => {
    const grid = [];
    for (let i = 0; i < 9; i++) {
      grid.push(['','','','','','','','','']);
    }
    this.setState({grid, selectedValue: undefined, processingTime: 0});
  }

  fillGrid = async (animate = true) => {
    const grid = [];
    for (let i = 0; i < 9; i++) {
      grid.push(['','','','','','','','','']);
    }
    let start = Date.now();
    await this.fillNextCell(grid, 0, 0, [1,2,3,4,5,6,7,8,9], animate);
    let finish = Date.now();
    let processingTime = (finish - start) / 1000;
    this.setState({processingTime})
    // console.log('processing time:', (processingTime + 's'));
    this.setState({counter: 0});
  }

  fillNextCell = async (grid, i = 0, j = 0, availableNums = [1,2,3,4,5,6,7,8,9], animate) => {
    this.setState({counter: this.state.counter+1})
    let pp = JSON.parse(JSON.stringify(grid));
    if (typeof pp[i][j] === 'number') {
      availableNums.splice(availableNums.indexOf((pp[i][j])), 1);
      if (availableNums.length < 1) {
        return 'none';
      }
    }
    let availableNum = await this.getAvailableNum(pp, i, j, availableNums);

    if (availableNum === 'none') {
      return 'none';
    }
    grid[i][j] = availableNum;
    pp = JSON.parse(JSON.stringify(grid));
    if (animate) {
      await setTimeout(() => {
        this.setState({grid: pp});
      }, 100 * this.state.counter);
    } else {
      this.setState({grid: pp});
    }

    let nJ = j + 1;
    let nI = i;
    if (nJ > 8) {
      if (i === 8) {
        return;
      }
      nI++;
      nJ = 0;
    }
    const filledCell = await this.fillNextCell(pp, nI, nJ, [1,2,3,4,5,6,7,8,9], animate);
    if (filledCell === 'none') {
      return 'redo';
    } else if (filledCell === 'redo') {
      return await this.fillNextCell(pp, i, j, availableNums, animate);
    }
  }

  getAvailableNum = async (grid, i, j, availableNums) => {
    let randomIndex = Math.floor(Math.random() * availableNums.length);
    let rNum = availableNums[randomIndex];

    if (i === 0 && j === 0) {
      return rNum;
    };

    const isAvailable = await helpers.isAvailable(grid, i, j, rNum);

    console.log(i, j, isAvailable, rNum)
    if (isAvailable) {
      return rNum;
    } else {
      availableNums.splice(availableNums.indexOf(rNum), 1);
      if (availableNums.length < 1) {
        return 'none';
      }
      return await this.getAvailableNum(grid, i, j, availableNums);
    }
  }

  createPuzzle = async () => {
    await this.fillGrid(false);
    this.removeNumbers();
  }

  removeNumbers = (num = 25) => {
    const grid = Array.from(this.state.grid);
    const positions = [];

    while (positions.length < num) {
      let randomRow = Math.floor(Math.random()*9);
      let randomColumn = Math.floor(Math.random()*9);
      const found = positions.find(pos => {
        return pos.x === randomRow && pos.y === randomColumn;
      })
      if (!found) {
        positions.push({x: randomRow, y: randomColumn});
      }
    }
    for (let el of positions) {
      grid[el.x][el.y] = undefined;
    }
    this.setState({grid});
  }

  handleClick = async (value, i, j) => {
    console.log('11111', value, i, j)
    const {numberGrabbed, grid, selectedValue} = this.state;
    if ((value === undefined || value === '') && numberGrabbed !== undefined) {
      const isAvailable = await helpers.isAvailable(grid, i, j, numberGrabbed);
      if (isAvailable) {
        let newGrid = grid.slice();
        newGrid[i][j] = numberGrabbed;
        this.setState({grid: newGrid, numberGrabbed: undefined});
      } else {
        this.setState({invalidNumber: numberGrabbed, numberGrabbed: undefined});
      }
    } else {
      const isNotSame = selectedValue !== value;
      this.setState({selectedValue: isNotSame ? value : undefined, invalidNumber: undefined});
    }
  }

  handleNumPick = (number) => {
    const isNotSame = number !== this.state.numberGrabbed;
    this.setState({numberGrabbed: isNotSame ? number : undefined, invalidNumber: undefined});
  }

  createBoxes = () => {
    const {grid, selectedValue, invalidNumber} = this.state;

    const boxes = [];
    for (let a = 0; a < 9; a = a + 3) {
      for (let b = 0; b < 9; b = b + 3) {
        let box = [];
        for (let i = a; i < a+3; i++) {
          for (let j = b; j < b+3; j++) {
            box.push(
              <Square
                grid={grid}
                cell={grid[i][j]}
                i={i}
                j={j}
                selectedValue={selectedValue}
                invalidNumber={invalidNumber}
                handleClick={this.handleClick}
                key={i + '' + j}
              />
            );
          }
        }
        boxes.push(box);
      }
    }
    return boxes;
  }

  render() {
    const {grid, selectedValue, availableNumbers, numberGrabbed, invalidNumber, processingTime} = this.state;
    return (
      <div className='wrapper'>
        <div className='sudoku-menu'>
          <div className='s-button' onClick={this.createPuzzle}>Create Sudoku</div>
          <div className='s-button' onClick={this.fillGrid}>Fill Grid</div>
          <div className='s-button' onClick={this.createGrid}>Empty Grid</div>
          <div className='s-button' onClick={() => this.removeNumbers()}>Remove numbers</div>
          <div className='s-button'>{`Time: ${processingTime + 's'}`}</div>
        </div>
        <div className='grid'>
          {
            this.createBoxes().map((box, i) => {
              return <div key={i} className='box'>
                {box.map(cell => cell)}
              </div>
            })
          }
        </div>
        <div className='available-numbers'>
          {availableNumbers.map(number => {
            return <Cell number={number} numberGrabbed={numberGrabbed} handleNumPick={this.handleNumPick} key={number}/>
          })}
        </div>
      </div>
    );
  }
}

export default withDragDropContext(Sudoku);
