import React from 'react';

function RubiksNav(props) {
  const {rotate, shuffle, reset, solve} = props;
  return (
    <div className='rubik-nav'>
      <div>
        <div className='r-button' onClick={() => rotate('R')}>R</div>
        <div className='r-button' onClick={() => rotate('F')}>F</div>
        <div className='r-button' onClick={() => rotate('L')}>L</div>
        <div className='r-button' onClick={() => rotate('B')}>B</div>
        <div className='r-button' onClick={() => rotate('U')}>U</div>
        <div className='r-button' onClick={() => rotate('D')}>D</div>
        <div className='r-button' onClick={() => rotate('M')}>M</div>
        <div className='r-button' onClick={() => rotate('E')}>E</div>
        <div className='r-button' onClick={() => rotate('S')}>S</div>
      </div>
      <div>
        <div className='r-button' onClick={() => rotate('Rprime')}>R'</div>
        <div className='r-button' onClick={() => rotate('Fprime')}>F'</div>
        <div className='r-button' onClick={() => rotate('Lprime')}>L'</div>
        <div className='r-button' onClick={() => rotate('Bprime')}>B'</div>
        <div className='r-button' onClick={() => rotate('Uprime')}>U'</div>
        <div className='r-button' onClick={() => rotate('Dprime')}>D'</div>
        <div className='r-button' onClick={() => rotate('Mprime')}>M'</div>
        <div className='r-button' onClick={() => rotate('Eprime')}>E'</div>
        <div className='r-button' onClick={() => rotate('Sprime')}>S'</div>
      </div>
      <div>
        <div className='r-button' onClick={shuffle}>Shuffle</div>
        <div className='r-button' onClick={solve}>Solve</div>
        <div className='r-button' onClick={reset}>Reset</div>
      </div>
    </div>
  );
}

export default RubiksNav;