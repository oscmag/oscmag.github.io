import React from 'react';
import { withRouter } from 'react-router-dom';

import CubeFace from './CubeFace';
import RubiksNav from './RubiksNav';
import {rotate} from './Logic.js';
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
    const alts = ['d', 'f', 'b', 'l', 'r', 'u'];
    const operations = [];
    for (let i = 0; i < 30; i++) {
      const r = Math.floor(Math.random() * 6);
      operations.push(alts[r]);
    }
    const cubeAndSides = operations.reduce((acc, operation) => {
      let updatedCube = JSON.parse(JSON.stringify(acc.cube));
      updatedCube = rotate(operation, updatedCube, acc.sides);
      let sides = this.setSides(updatedCube, true);
      return {cube: updatedCube, sides}
    }, {cube, sides});
    
    this.setSides(cubeAndSides.cube);
    this.setState({cube: cubeAndSides.cube});
  }

  reset = () => {
    const {solutionCube} = this.state;
    this.setSides(solutionCube);
    this.setState({cube: this.state.solutionCube, rotateX: 0, rotateY: 0});
  }

  rotate = (notation) => {
    const {cube, sides} = this.state;
    const updatedCube = rotate(notation, cube, sides);
    this.setSides(updatedCube);
    this.setState({cube: updatedCube});
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
            {['front','back','right','left','top','bottom'].map((side, i) => {
              return <CubeFace sides={sides} side={side} key={i}/>
            })}
          </div>
          <RubiksNav rotate={this.rotate} shuffle={this.shuffle} reset={this.reset}/>
          <p className='solved'>Solved: <b className={this.isSolved() ? 'solved-text' : 'unsolved-text'}>{this.isSolved() ? 'true' : 'false'}</b></p>
        </div>
      );
    } else return <p>No cube</p>;
  }
}

export default withRouter(Rubiks);

