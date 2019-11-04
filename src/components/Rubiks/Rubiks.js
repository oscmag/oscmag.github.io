import React from 'react';
import { withRouter } from 'react-router-dom';

import solver from 'rubiks-cube-solver';
import CubeFace from './CubeFace';
import RubiksNav from './RubiksNav';
import {rotate} from './Logic.js';
import './Rubiks.css';

class Rubiks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rotateX: 0, 
      rotateY: 0, 
      rotate: undefined, 
      levels: 'horizontal',
      offsets: [0,0],
    };
  }

  componentDidMount = () => {

    // corner pieces
    const cp1 = {white: 'top', blue: 'back', orange: 'left'}
    const cp2 = {white: 'top', blue: 'back', red: 'right'}
    const cp3 = {white: 'top', green: 'front', orange: 'left'}
    const cp4 = {white: 'top', green: 'front', red: 'right'}

    const cp5 = {yellow: 'bottom', blue: 'back', orange: 'left'}
    const cp6 = {yellow: 'bottom', blue: 'back', red: 'right'}
    const cp7 = {yellow: 'bottom', green: 'front', orange: 'left'}
    const cp8 = {yellow: 'bottom', green: 'front', red: 'right'}

    // edge pieces
    const ep1 = {white: 'top', blue: 'back'}
    const ep2 = {white: 'top', red: 'right'}
    const ep3 = {white: 'top', orange: 'left'}
    const ep4 = {white: 'top', green: 'front'}

    const ep5 = {yellow: 'bottom', blue: 'back'}
    const ep6 = {yellow: 'bottom', red: 'right'}
    const ep7 = {yellow: 'bottom', orange: 'left'}
    const ep8 = {yellow: 'bottom', green: 'front'}

    const ep9 = {green: 'front', red: 'right'}
    const ep10 = {green: 'front', orange: 'left'}
    const ep11 = {blue: 'back', orange: 'left'}
    const ep12 = {blue: 'back', red: 'right'}

    // center (mid) pieces
    const mp1 = {white: 'top'}
    const mp2 = {yellow: 'bottom'}
    const mp3 = {orange: 'left'}
    const mp4 = {red: 'right'}
    const mp5 = {blue: 'back'}
    const mp6 = {green: 'front'}


    const cube = [
      [ [cp3, ep3, cp1],    [ep4, mp1, ep1],    [cp4, ep2, cp2] ],
      [ [ep10, mp3, ep11],  [mp6, {}, mp5],   [ep9, mp4, ep12] ],
      [ [cp7, ep7, cp5],    [ep8, mp2, ep5],    [cp8, ep6, cp6] ]
    ];

    this.setSides(cube);
    
    this.setState({
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
      middleM: [cube[0][1][2], cube[0][1][1], cube[0][1][0], cube[1][1][2], cube[1][1][1], cube[1][1][0], cube[2][1][2], cube[2][1][1], cube[2][1][0]],
      middleE: [cube[1][0][0], cube[1][1][0], cube[1][2][0], cube[1][0][1], cube[1][1][1], cube[1][2][1], cube[1][0][2], cube[1][1][2], cube[1][2][2]],
      middleS: [cube[0][0][1], cube[0][1][1], cube[0][2][1], cube[1][0][1], cube[1][1][1], cube[1][2][1], cube[2][0][1], cube[2][1][1], cube[2][2][1]],
    }
    if (!noStateUpdate) {
      this.setState({sides});
    } else {
      return sides;
    }
  }

  shuffle = async() => {
    const alts = [
      'D', 'F', 'B', 'L', 'R', 'U', 
      'Dprime', 'Fprime', 'Bprime', 'Lprime', 'Rprime', 'Uprime', 
      'M', 'E', 'S', 'Mprime', 'Eprime', 'Sprime'
    ];
    const operations = [];

    let opposits = {
      D: 'Dprime', 
      F: 'Fprime', 
      B: 'Bprime', 
      L: 'Lprime', 
      R: 'Rprime', 
      U: 'Uprime', 
      Dprime: 'D', 
      Fprime: 'F', 
      Bprime: 'B', 
      Lprime: 'L', 
      Rprime: 'R', 
      Uprime: 'U',
      M: 'Mprime',
      E: 'Eprime',
      S: 'Sprime',
      Mprime: 'M',
      Eprime: 'E',
      Sprime: 'S'
    }
    let lastMove;

    for (let i = 0; i < 20; i++) {
      let r = Math.floor(Math.random() * alts.length);
      while (i > 0 && alts[r] === opposits[lastMove]) {
        r = Math.floor(Math.random() * alts.length);
      } 
      operations.push(alts[r]);
      lastMove = alts[r];
    }
    let timer = 0;
    operations.forEach(async (operation, i) => {
      if (i > 0) {
        timer += 200;
        await this.sleep(timer);
      }
      this.rotate(operation, true);
    })
  }

  reset = () => {
    const {solutionCube} = this.state;
    this.setSides(solutionCube);
    this.setState({cube: this.state.solutionCube, rotateX: 0, rotateY: 0, rott: !this.state.rott});
  }

  rotate = async (notation, shuffling) => {
    let levels;
    if (['R','L', 'Rprime','Lprime', 'M', 'Mprime'].includes(notation)) {
      levels = 'vertical';
    } else if (['F','B', 'Fprime','Bprime', 'S', 'Sprime'].includes(notation)) {
      levels = 'depth';
    } else {
      levels = 'horizontal';
    }
    const timer = shuffling ? 110 : 200;
    this.setState({levels});
    await this.sleep(100);
    this.setState({rotate: notation})
    
    setTimeout(() => {
      const {cube, sides} = this.state;
      const updatedCube = rotate(notation, cube, sides);
      this.setSides(updatedCube);
      this.setState({cube: updatedCube, rotate: undefined});
    }, timer)
  }
  
  solve = () => {
    const {sides} = this.state;
    const cubeString = this.parseCubeToString(sides);
    let solveMoves = solver(cubeString);
    solveMoves = solveMoves.split(' ');
    let timer = 0;
    solveMoves.forEach(async (operation, i) => {
      if (i > 0) {
        timer += 200;
        await this.sleep(timer);
      }
      this.rotate(operation, true);
    })

    console.log('cube string:', cubeString);
    console.log('solve moves:', solveMoves);
  }

  parseCubeToString = (sides) => {
    const map = {
      green: 'F',
      white: 'U',
      yellow: 'D',
      orange: 'L',
      red: 'R',
      blue: 'B'
    }

    let cubeString = '';
    ['front', 'right', 'top', 'bottom', 'left', 'back'].forEach(side => {
      sides[side].forEach(piece => {
        for (let key in piece) {
          if (piece[key] === side) {
            cubeString += map[key];
          }
        }
      })
    })

    return cubeString;
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

  onMouseDown = (e) => {
    this.setState({mouseDown: true});
  }
  onMouseUp = () => {
    this.setState({mouseDown: false});
  }

  onMouseMove = (e) => {
    this.setState({testing2: this.state.testing2 + 1});
    if(this.state.mouseDown) {
      this.visuallyRotate(e.movementX, e.movementY)
    }
  }
  onTouchMove = (e) => {
    let offsetX = e.touches[0].clientX;
    let offsetY = e.touches[0].clientY;

    let y = offsetY - (this.state.offsets[1] || 0);
    let x = offsetX - (this.state.offsets[0] || 0);

    this.visuallyRotate(x, y)

    this.setState({offsets: [offsetX, offsetY]});
  }
  onTouchStart = (e) => {
    this.setState({offsets: [e.touches[0].clientX, e.touches[0].clientY]});
  }
  onTouchEnd = () => {
    this.setState({offsets: [0,0]});
  }

  getClasses = (i, j, k) => {
    let classes = '';
    if (j === 2) {
      classes += ' rightPiece';
    }
    if (j === 1) {
      classes += ' midVertPiece';
    }
    if (j === 0) {
      classes += ' leftPiece';
    }
    if (i === 2) {
      classes += ' bottomPiece';
    }
    if (i === 1) {
      classes += ' midHorPiece';
    }
    if (i === 0) {
      classes += ' topPiece';
    }
    if (k === 2) {
      classes += ' backPiece';
    }
    if (k === 1) {
      classes += ' midDepthPiece';
    }
    if (k === 0) {
      classes += ' frontPiece';
    }
    return classes;
  }

  sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
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
    const {cube, rotateX, rotateY, mouseDown, rotate, levels} = this.state;

    if (cube) {
      return (
        <div className='settings' onMouseMove={this.onMouseMove} onTouchMove={this.onTouchMove} onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd} onMouseUp={this.onMouseUp}>
          <div className={`cube ${mouseDown ? 'dragging' : ''}`} onMouseDown={this.onMouseDown} style={{transform: `translateZ(-80px) rotateY(${rotateY}deg) rotateX(${rotateX}deg`}}>
            {cube.map((y, i) => {
              if (levels === 'horizontal') {
                if (i === 0) {
                  return <div className={`first-level ${rotate === 'U' ? 'rotateU' : rotate === 'Uprime' ? 'rotateUPrime' : ''}`} key={i}>
                  {y.map((x, j) => {
                    return x.map((z, k) => {
                      let classes = this.getClasses(i, j, k);
                      return (
                        <div className={`piece-3d ${classes}`} key={k}>
                          {['front','back','right','left','top','bottom'].map((side, l) => {
                            return <CubeFace side={side} key={l} piece={z}/>
                          })}
                        </div>
                      )
                    });
                  })}
                  </div>
                } else if (i === 1) {
                  return <div className={`second-level ${rotate === 'E' ? 'rotateE' : rotate === 'Eprime' ? 'rotateEPrime' : ''}`} key={i}>
                  {y.map((x, j) => {
                    return x.map((z, k) => {
                      let classes = this.getClasses(i, j, k);
                      return (
                        <div className={`piece-3d ${classes}`} key={k}>
                          {['front','back','right','left','top','bottom'].map((side, l) => {
                            return <CubeFace side={side} key={l} piece={z}/>
                          })}
                        </div>
                      )
                    });
                  })}
                  </div>
                } else if (i === 2) {
                  return <div className={`third-level ${rotate === 'D' ? 'rotateD' : rotate === 'Dprime' ? 'rotateDPrime' : ''}`} key={i}>
                  {y.map((x, j) => {
                    return x.map((z, k) => {
                      let classes = this.getClasses(i, j, k);
                      return (
                        <div className={`piece-3d ${classes}`} key={k}>
                          {['front','back','right','left','top','bottom'].map((side, l) => {
                            return <CubeFace side={side} key={l} piece={z}/>
                          })}
                        </div>
                      )
                    })}
                  )}
                  </div>
                } else return null;
              } else if (levels === 'vertical') {
                return (
                  <>
                    <div className={`first-level ${rotate === 'L' ? 'rotateL' : rotate === 'Lprime' ? 'rotateLPrime' : ''}`} key='1'>
                      {y.map((x, j) => {
                        if (j === 0) {
                          return x.map((z, k) => {
                            let classes = this.getClasses(i, j, k);
                            return (
                              <div className={`piece-3d ${classes}`} key={k}>
                                {['front','back','right','left','top','bottom'].map((side, l) => {
                                  return <CubeFace side={side} key={l} piece={z}/>
                                })}
                              </div>
                            )
                          })
                        } else return null;
                      })}
                    </div>
                    <div className={`second-level ${rotate === 'M' ? 'rotateM' : rotate === 'Mprime' ? 'rotateMPrime' : ''}`} key='2'>
                      {y.map((x, j) => {
                        if (j === 1) {
                          return x.map((z, k) => {
                            let classes = this.getClasses(i, j, k);
                            return (
                              <div className={`piece-3d ${classes}`} key={k}>
                                {['front','back','right','left','top','bottom'].map((side, l) => {
                                  return <CubeFace side={side} key={l} piece={z}/>
                                })}
                              </div>
                            )
                          })
                        } else return null;
                      })}
                  </div>
                  <div className={`third-level ${rotate === 'R' ? 'rotateR' : rotate === 'Rprime' ? 'rotateRPrime' : ''}`} key='3'>
                      {y.map((x, j) => {
                        if (j === 2) {
                          return x.map((z, k) => {
                            let classes = this.getClasses(i, j, k);
                            return (
                              <div className={`piece-3d ${classes}`} key={k}>
                                {['front','back','right','left','top','bottom'].map((side, l) => {
                                  return <CubeFace side={side} key={l} piece={z}/>
                                })}
                              </div>
                            )
                          })
                        } else return null; 
                      })}
                    </div>
                </>
                )
              } else if (levels === 'depth') {
                return (
                  <>
                    <div className={`first-level ${rotate === 'F' ? 'rotateF' : rotate === 'Fprime' ? 'rotateFPrime' : ''}`} key='1'>
                        {y.map((x, j) => {
                          return x.map((z, k) => {
                            if (k === 0) {
                              let classes = this.getClasses(i, j, k);
                              return (
                                <div className={`piece-3d ${classes}`} key={i}>
                                  {['front','back','right','left','top','bottom'].map((side, l) => {
                                    return <CubeFace side={side} key={l} piece={z}/>
                                  })}
                                </div>
                              )
                            } else return null;
                          })}
                        )}
                      </div>
                      <div className={`second-level ${rotate === 'S' ? 'rotateS' : rotate === 'Sprime' ? 'rotateSPrime' : ''}`} key='2'>
                        {y.map((x, j) => {
                          return x.map((z, k) => {
                            if (k === 1) {
                              let classes = this.getClasses(i, j, k);
                              return (
                                <div className={`piece-3d ${classes}`} key={i}>
                                  {['front','back','right','left','top','bottom'].map((side, l) => {
                                    return <CubeFace side={side} key={l} piece={z}/>
                                  })}
                                </div>
                              )
                            } else return null;
                          })
                        })}
                    </div>
                    <div className={`third-level ${rotate === 'B' ? 'rotateB' : rotate === 'Bprime' ? 'rotateBPrime' : ''}`} key='3'>
                        {y.map((x, j) => {
                          return x.map((z, k) => {
                            if (k === 2) {
                              let classes = this.getClasses(i, j, k);
                              return (
                                <div className={`piece-3d ${classes}`} key={i}>
                                  {['front','back','right','left','top','bottom'].map((side, l) => {
                                    return <CubeFace side={side} key={l} piece={z}/>
                                  })}
                                </div>
                              )
                            } else return null;
                          })}
                        )}
                      </div>
                  </>
                )
              } else return null;
            })}
          </div>
          <RubiksNav rotate={this.rotate} shuffle={this.shuffle} reset={this.reset} solve={this.solve}/>
          <p className='solved'>Solved: <b className={this.isSolved() ? 'solved-text' : 'unsolved-text'}>{this.isSolved() ? 'true' : 'false'}</b></p>
        </div>
      );
    } else return <p>No cube</p>;
  }
}

export default withRouter(Rubiks);

