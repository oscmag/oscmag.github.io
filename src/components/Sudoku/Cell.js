import React from 'react';
import {ItemTypes} from './item-types';
import { DragSource } from 'react-dnd'
import './Cell.css';

function Cell({connectDragSource, isDragging, number, numberGrabbed, handleNumPick}) {
  return connectDragSource(
    <div
      className={`cell ${numberGrabbed === number ? 'grabbed-number' : ''}`}
      onClick={() => handleNumPick(number)}
      key={number}
    >
      {number}
    </div>
  )
}

const cardSource = {
  beginDrag: ({number, numberGrabbed, handleNumPick}) => {
    handleNumPick(number);
    return {number, numberGrabbed}
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }
}


export default DragSource(ItemTypes.CARD, cardSource, collect)(Cell);
