import React from 'react';
import logo from '../../assets/rubiks_cube_logo.png';

function CubeFace(props) {
  const {side, piece} = props;
  const color = Object.keys(piece).find(key => piece[key] === side);
  let showLogo = false; //(Object.keys(piece).length === 1 && color === 'white') ? true : false;

  return (
  <div className={`cube-face cube-face--${side} ${color ? color : 'black'}`}>{showLogo && <img src={logo} alt='logo' height='42' width='42'/>}</div>
  );
}

export default CubeFace;