import React from 'react';
import logo from '../../assets/rubiks_cube_logo.png';

function CubeFace(props) {
  const {side, piece} = props;
  const color = Object.keys(piece).find(key => piece[key] === side);
  
  return (
    <div className={`cube-face cube-face--${side} ${color ? color : 'black'}`}></div>
  );
}

export default CubeFace;