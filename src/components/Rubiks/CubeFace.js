import React from 'react';
import logo from '../../assets/rubiks_cube_logo.png';

function CubeFace(props) {
  const {sides, side} = props;
  return (
  <div className={`cube-face cube-face--${side}`}>
    {sides[side].map((piece, i) => {
      const color = Object.keys(piece).find(key => piece[key] === side);
      if (side === 'bottom' && i === 4) {
        return <div className={`piece ${color}`} key={i}>{<img src={logo} alt='logo' height='40' width='40'/>}</div>;
      } else {
        return <div className={`piece ${color}`} key={i}></div>;
      }
    })}
  </div>
  );
}

export default CubeFace;