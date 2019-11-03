import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../../assets/rubiks_cube_logo.png';

import './Rubiks.css';

class Rubiks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {rotateX: 0, rotateY: 0};
  }

  componentDidMount = () => {

    // corner pieces
    const cp1 = {yellow: 'top', blue: 'back', red: 'left'}
    const cp2 = {yellow: 'top', blue: 'back', orange: 'right'}
    const cp3 = {yellow: 'top', green: 'front', red: 'left'}
    const cp4 = {yellow: 'top', green: 'front', orange: 'right'}

    const cp5 = {white: 'bottom', blue: 'back', red: 'left'}
    const cp6 = {white: 'bottom', blue: 'back', orange: 'right'}
    const cp7 = {white: 'bottom', green: 'front', red: 'left'}
    const cp8 = {white: 'bottom', green: 'front', orange: 'right'}

    // edge pieces
    const ep1 = {yellow: 'top', blue: 'back'}
    const ep2 = {yellow: 'top', orange: 'right'}
    const ep3 = {yellow: 'top', red: 'left'}
    const ep4 = {yellow: 'top', green: 'front'}

    const ep5 = {white: 'bottom', blue: 'back'}
    const ep6 = {white: 'bottom', orange: 'right'}
    const ep7 = {white: 'bottom', red: 'left'}
    const ep8 = {white: 'bottom', green: 'front'}

    const ep9 = {green: 'front', orange: 'right'}
    const ep10 = {green: 'front', red: 'left'}
    const ep11 = {blue: 'back', red: 'left'}
    const ep12 = {blue: 'back', orange: 'right'}

    // center (mid) pieces
    const mp1 = {yellow: 'top'}
    const mp2 = {white: 'bottom'}
    const mp3 = {red: 'left'}
    const mp4 = {orange: 'right'}
    const mp5 = {blue: 'back'}
    const mp6 = {green: 'front'}


    const cube = [
      [ [cp3, ep3, cp1],    [ep4, mp1, ep1],    [cp4, ep2, cp2] ],
      [ [ep10, mp3, ep11],  [mp6, null, mp5],   [ep9, mp4, ep12] ],
      [ [cp7, ep7, cp5],    [ep8, mp2, ep5],    [cp8, ep6, cp6] ]
    ];

    this.setSides(cube);
    
    this.setState({
      show: 'front',
      solutionCube: cube,
      cube
    });
  }

  setSides = (cube, noStateUpdate) => {
    const sides = {
      front: [cube[0][0][0], cube[0][1][0], cube[0][2][0], cube[1][0][0], cube[1][1][0], cube[1][2][0], cube[2][0][0], cube[2][1][0], cube[2][2][0]],
      back: [cube[0][2][2], cube[0][1][2], cube[0][0][2], cube[1][2][2], cube[1][1][2], cube[1][0][2], cube[2][2][2], cube[2][1][2], cube[2][0][2]],
      left: [cube[0][0][2], cube[0][0][1], cube[0][0][0], cube[1][0][2], cube[1][0][1], cube[1][0][0], cube[2][0][2], cube[2][0][1], cube[2][0][0]],
      right: [cube[0][2][0], cube[0][2][1], cube[0][2][2], cube[1][2][0], cube[1][2][1], cube[1][2][2], cube[2][2][0], cube[2][2][1], cube[2][2][2]],
      top: [cube[0][0][2], cube[0][1][2], cube[0][2][2], cube[0][0][1], cube[0][1][1], cube[0][2][1], cube[0][0][0], cube[0][1][0], cube[0][2][0]],
      bottom: [cube[2][0][0], cube[2][1][0], cube[2][2][0], cube[2][0][1], cube[2][1][1], cube[2][2][1], cube[2][0][2], cube[2][1][2], cube[2][2][2]],
    }
    if (!noStateUpdate) {
      this.setState({sides});
    } else {
      return sides;
    }
  }

  shuffle = () => {
    let {cube, sides} = this.state;
    // let cube = JSON.parse(JSON.stringify(cube));
    const alts = ['d', 'f', 'b', 'l', 'r', 'u'];
    const operations = [];
    for (let i = 0; i < 30; i++) {
      const r = Math.floor(Math.random() * 6);
      operations.push(alts[r]);
    }
    const cubeAndSides = operations.reduce((acc, operation) => {
      let updatedCube = JSON.parse(JSON.stringify(acc.cube));
      return this.rotate(operation, updatedCube, acc.sides);
    }, {cube, sides});
    
    this.setSides(cubeAndSides.cube);
    this.setState({cube: cubeAndSides.cube});
  }

  reset = () => {
    const {solutionCube} = this.state;
    this.setSides(solutionCube);
    this.setState({cube: this.state.solutionCube, rotateX: 0, rotateY: 0});
  }

  getRotationMap = (options) => {
    const {staticAxis, staticValue, threeStepAxis, oneStepAxis, oneStepDirection, threeStepDirection} = options;
    const arr = [];
    let fallNum = threeStepDirection === 'inc' ? 0 : 2;
    let lastNum = oneStepDirection === 'inc' ? 0 : 2;

    for (let i = 0; i < 9; i++) {
      if (i % 3 === 0 && i !== 0) {
        if (threeStepDirection === 'inc') {
          fallNum = fallNum === 2 ? 0 : fallNum + 1;
        } else if (threeStepDirection === 'decr') {
          fallNum = fallNum === 0 ? 2 : fallNum - 1;
        }
      }
      arr.push({
        [oneStepAxis]: lastNum,
        [staticAxis]: staticValue,
        [threeStepAxis]: fallNum,
      })

      if (oneStepDirection === 'inc') {
        lastNum = lastNum === 2 ? 0 : lastNum + 1;
      } else if (oneStepDirection === 'decr') {
        lastNum = lastNum === 0 ? 2 : lastNum - 1;
      }
    }
    return arr;
  }

  rotate = (notation, currentCube, currentSides) => {
    let {cube, sides} = this.state;
    let updatedCube = JSON.parse(JSON.stringify(currentCube || cube));
    sides = currentSides || sides;

    const notationsMap = {
      f: 'front',   // rotate front 90°
      r: 'right',   // rotate right 90°
      u: 'top',     // rotate top 90°
      l: 'left',    // rotate left 90°
      b: 'back',    // rotate back 90°
      d: 'bottom',  // rotate bottom 90°
    }
    const side = notationsMap[notation];

    const rotationArgs = {
      right: ['x', 2, 'z', 'y', 'inc', 'decr'],
      top: ['y', 0, 'x', 'z', 'decr', 'decr'],
      bottom: ['y', 2, 'x', 'z', 'inc', 'decr'],
      front: ['z', 0, 'x', 'y', 'inc', 'decr'],
      back: ['z', 2, 'x', 'y', 'inc', 'inc'],
      left: ['x', 0, 'z', 'y', 'inc', 'inc']
    }
    const options = {
      staticAxis: rotationArgs[side][0], 
      staticValue: rotationArgs[side][1], 
      threeStepAxis: rotationArgs[side][2], 
      oneStepAxis: rotationArgs[side][3], 
      oneStepDirection: rotationArgs[side][4], 
      threeStepDirection: rotationArgs[side][5]
    };

    const rotMap = this.getRotationMap(options);
    sides[side].forEach((piece, i) => {
      let rotatedPiece = JSON.parse(JSON.stringify(piece));
      rotatedPiece = this.rotatePiece(rotatedPiece, notation);
      updatedCube[rotMap[i].y][rotMap[i].x][rotMap[i].z] = rotatedPiece;
    })
    
    if (!currentCube) {
      this.setSides(updatedCube);
      this.setState({cube: updatedCube});
    } else {
      let updatedSides = this.setSides(updatedCube, true);
      return {cube: updatedCube, sides: updatedSides};
    }
  }

  rotatePiece = (piece, notation) => {
    let rotatedPiece = JSON.parse(JSON.stringify(piece));
    let rotationMap = {
      f: {
        top: 'right',
        bottom: 'left',
        right: 'bottom',
        left: 'top',
        front: 'front'
      },
      r: {
        top: 'back',
        bottom: 'front',
        front: 'top',
        back: 'bottom',
        right: 'right',
      },
      u: {
        front: 'left',
        left: 'back',
        back: 'right',
        right: 'front',
        top: 'top'
      },
      l: {
        front: 'bottom',
        bottom: 'back',
        back: 'top',
        top: 'front',
        left: 'left'
      },
      b: {
        top: 'left',
        left: 'bottom',
        bottom: 'right',
        right: 'top',
        back: 'back'
      },
      d: {
        front: 'right',
        right: 'back',
        back: 'left',
        left: 'front',
        bottom: 'bottom'
      }
    }

    for (let key in piece) {
      rotatedPiece[key] = rotationMap[notation][piece[key]];
    }

    return rotatedPiece;
  }

  isSolved = () => {
    const {cube, solutionCube} = this.state;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          for (let key in cube[i][j][k]) {
            if (cube[i][j][k][key] !== solutionCube[i][j][k][key]) {
              return false;
            }
          }
        }
      }
    }
    return true;
  }

  onMouseDown = () => {
    this.setState({mouseDown: true});
  }
  onMouseUp = () => {
    this.setState({mouseDown: false});
  }

  onMouseMove = (e) => {
    if(this.state.mouseDown) {
      this.visuallyRotate(e.movementX, e.movementY)
    }
  }

  visuallyRotate = (xMovement, yMovement) => {
    let yValue = this.state.rotateY + xMovement;
    let xValue = this.state.rotateX - yMovement;
    if (yValue >= 360 || yValue <= -360) {
      yValue = 0;
    }
    if (xValue >= 360 || xValue <= -360) {
      xValue = 0;
    }
    this.setState({rotateX: xValue, rotateY: yValue})
  }


  render() {
    const {cube, sides, show, rotateX, rotateY, mouseDown} = this.state;
    if (cube && sides) {
      return (
        <div className='settings' onMouseMove={this.onMouseMove} onMouseUp={this.onMouseUp}>
          <div className={`cube show-${show} ${mouseDown ? 'dragging' : ''}`} onMouseDown={this.onMouseDown} style={{transform: `translateZ(-100px) rotateY(${rotateY}deg) rotateX(${rotateX}deg`}}>
            <div className='cube__face cube__face--front'>
              {sides.front.map((piece, i) => {
                const color = Object.keys(piece).find(key => piece[key] === 'front');
                return <div className={`piece ${color}`} key={i}></div>;
              })}
            </div>
            <div className='cube__face cube__face--back'>
              {sides.back.map((piece, i) => {
                const color = Object.keys(piece).find(key => piece[key] === 'back');
                return <div className={`piece ${color}`} key={i}></div>;
              })}
            </div>
            <div className='cube__face cube__face--right'>
              {sides.right.map((piece, i) => {
                const color = Object.keys(piece).find(key => piece[key] === 'right');
                return <div className={`piece ${color}`} key={i}></div>;
              })}
            </div>
            <div className='cube__face cube__face--left'>
              {sides.left.map((piece, i) => {
                const color = Object.keys(piece).find(key => piece[key] === 'left');
                return <div className={`piece ${color}`} key={i}></div>;
              })}
            </div>
            <div className='cube__face cube__face--top'>
              {sides.top.map((piece, i) => {
                const color = Object.keys(piece).find(key => piece[key] === 'top');
                return <div className={`piece ${color}`} key={i}></div>;
              })}
            </div>
            <div className='cube__face cube__face--bottom'>
              {sides.bottom.map((piece, i) => {
                const color = Object.keys(piece).find(key => piece[key] === 'bottom');
                return <div className={`piece ${color}`} key={i}>{(color === 'white' && i === 4) ? <img src={logo} alt='logo' height='40' width='40'/> : ''}</div>;
              })}
            </div>
          </div>
          <div className='rubik-nav'>
            <button onClick={() => this.rotate('r')}>r</button>
            <button onClick={() => this.rotate('f')}>f</button>
            <button onClick={() => this.rotate('l')}>l</button>
            <button onClick={() => this.rotate('b')}>b</button>
            <button onClick={() => this.rotate('u')}>u</button>
            <button onClick={() => this.rotate('d')}>d</button>

            <button onClick={this.shuffle}>Shuffle</button>
            <button onClick={this.reset}>Reset</button>
          </div>
          <p className='solved'>Solved: <b className={this.isSolved() ? 'solved-text' : 'unsolved-text'}>{this.isSolved() ? 'true' : 'false'}</b></p>
        </div>
      );
    } else return <p>No cube</p>;
  }
  // render() {
  //   const {character} = this.context;
  //   return (
  //     <div className='settings'>
  //       Settings
  //     </div>
  //   );
  // }
}

export default withRouter(Rubiks);

