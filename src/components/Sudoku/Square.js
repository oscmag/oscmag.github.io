import React from 'react';
import { ItemTypes } from './item-types'
import { DropTarget } from 'react-dnd'
import './Square.css';

const squareTarget = {
  drop(props) {
    props.handleClick(props.number, props.i, props.j);
  },
  canDrop(props) {
    return squareAvailable(props.grid, props.i, props.j);
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }
}

function squareAvailable(grid, i, j) {
  if (typeof grid[i][j] === 'number') {
    return false;
  } else {
    return true;
  }
}

function Square({grid, cell, selectedValue, selectedSquare, invalidNumber, handleClick, i, j, connectDropTarget, isOver}) {
  return connectDropTarget(
    <div
      className={`
        cell
        ${grid[i][j] === selectedValue ? ' selected-value' : ''}
        ${invalidNumber === grid[i][j] && invalidNumber !== undefined ? 'invalid-number' : ''}
        ${selectedSquare.row === i && selectedSquare.column === j ? ' selected-square' : ''}
      `}
      onClick={() => handleClick(grid[i][j], i, j)}
      key={j}
    >
      {cell}
    </div>
  )
}

export default DropTarget(ItemTypes.CARD, squareTarget, collect)(Square)