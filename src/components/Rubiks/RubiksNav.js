import React from 'react';

function RubiksNav(props) {
  const {rotate, shuffle, reset} = props;
  return (
    <div className='rubik-nav'>
      <div className='r-button' onClick={() => rotate('r')}>r</div>
      <div className='r-button' onClick={() => rotate('f')}>f</div>
      <div className='r-button' onClick={() => rotate('l')}>l</div>
      <div className='r-button' onClick={() => rotate('b')}>b</div>
      <div className='r-button' onClick={() => rotate('u')}>u</div>
      <div className='r-button' onClick={() => rotate('d')}>d</div>

      <div className='r-button' onClick={shuffle}>Shuffle</div>
      <div className='r-button' onClick={reset}>Reset</div>
    </div>
  );
}

export default RubiksNav;