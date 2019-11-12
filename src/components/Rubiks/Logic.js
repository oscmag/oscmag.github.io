export const rotate = function (notation, cube, sides) {
  let twice = false;
  if (notation.length === 2) {
    notation = notation[0];
    twice = true;
  }
  let updatedCube = JSON.parse(JSON.stringify(cube));
  const notationsMap = {
    F: ['front'],   // rotate front 90°
    R: ['right'],   // rotate right 90°
    U: ['top'],     // rotate top 90°
    L: ['left'],    // rotate left 90°
    B: ['back'],    // rotate back 90°
    D: ['bottom'],  // rotate bottom 90°

    Fprime: ['front'],   // rotate front -90°
    Rprime: ['right'],   // rotate right -90°
    Uprime: ['top'],     // rotate top -90°
    Lprime: ['left'],    // rotate left -90°
    Bprime: ['back'],    // rotate back -90°
    Dprime: ['bottom'],  // rotate bottom -90°

    M: ['middleM'],
    E: ['middleE'],
    S: ['middleS'],

    Mprime: ['middleM'],
    Eprime: ['middleE'],
    Sprime: ['middleS'],

    f: ['front', 'middleS'],   // rotate front 90°
    r: ['right', 'middleM'],   // rotate right 90°
    u: ['top', 'middleE'],     // rotate top 90°
    l: ['left', 'middleM'],    // rotate left 90°
    b: ['back', 'middleS'],    // rotate back 90°
    d: ['bottom', 'middleE'],  // rotate bottom 90°

    fprime: ['front', 'middleS'],   // rotate front -90°
    rprime: ['right', 'middleM'],   // rotate right -90°
    uprime: ['top', 'middleE'],     // rotate top -90°
    lprime: ['left', 'middleM'],    // rotate left -90°
    bprime: ['back', 'middleS'],    // rotate back -90°
    dprime: ['bottom', 'middleE'],  // rotate bottom -90°
  }

  const side = notationsMap[notation][0];
  const side2 = notationsMap[notation][1];

  const obj = {
    f: ['F', 'S'],
    r: ['R', 'Mprime'],
    u: ['U', 'Eprime'],
    l: ['L', 'M'],
    b: ['B', 'Sprime'],
    d: ['D', 'E'],

    fprime: ['Fprime', 'Sprime'],
    rprime: ['Rprime', 'M'],
    uprime: ['Uprime', 'E'],
    lprime: ['Lprime', 'Mprime'],
    bprime: ['Bprime', 'S'],
    dprime: ['Dprime', 'Eprime'],
  };

  let notation2;
  if (side2) {
    let oldNotation = notation;
    notation = obj[oldNotation][0];
    notation2 = obj[oldNotation][1];
  }


  const rotationArgs = {
    //clockwise
    R: ['x', 2, 'z', 'y', 'inc', 'decr'],
    U: ['y', 0, 'x', 'z', 'decr', 'decr'],
    D: ['y', 2, 'x', 'z', 'inc', 'decr'],
    F: ['z', 0, 'x', 'y', 'inc', 'decr'],
    B: ['z', 2, 'x', 'y', 'inc', 'inc'],
    L: ['x', 0, 'z', 'y', 'inc', 'inc'],
    
    M: ['x', 1, 'z', 'y', 'inc', 'inc'],
    S: ['z', 1, 'x', 'y', 'inc', 'decr'],
    E: ['y', 1, 'x', 'z', 'inc', 'decr'],

    //counter clockwise
    Rprime: ['x', 2, 'z', 'y', 'decr', 'inc'],
    Uprime: ['y', 0, 'x', 'z', 'inc', 'inc'],
    Dprime: ['y', 2, 'x', 'z', 'decr', 'inc'],
    Fprime: ['z', 0, 'x', 'y', 'decr', 'inc'],
    Bprime: ['z', 2, 'x', 'y', 'decr', 'decr'],
    Lprime: ['x', 0, 'z', 'y', 'decr', 'decr'],

    Mprime: ['x', 1, 'z', 'y', 'decr', 'decr'],
    Sprime: ['z', 1, 'x', 'y', 'decr', 'inc'],
    Eprime: ['y', 1, 'x', 'z', 'decr', 'inc'],

    // two levels at once
    // f: [['z', 0, 'x', 'y', 'inc', 'decr'], ['z', 1, 'x', 'y', 'inc', 'decr']],
    // r: [['x', 2, 'z', 'y', 'inc', 'decr'], ['x', 1, 'z', 'y', 'decr', 'decr']],
    // u: [['y', 0, 'x', 'z', 'decr', 'decr'], ['y', 1, 'x', 'z', 'decr', 'inc']],
    // l: [['x', 0, 'z', 'y', 'inc', 'inc'], ['x', 1, 'z', 'y', 'inc', 'inc']],
    // b: [['z', 2, 'x', 'y', 'inc', 'inc'], ['z', 1, 'x', 'y', 'decr', 'inc']],
    // d: [['y', 2, 'x', 'z', 'inc', 'decr'], ['y', 1, 'x', 'z', 'inc', 'decr']],

    // fprime: [['z', 0, 'x', 'y', 'decr', 'inc'], ['z', 1, 'x', 'y', 'decr', 'inc']],
    // rprime: [['x', 2, 'z', 'y', 'decr', 'inc'], ['x', 1, 'z', 'y', 'inc', 'inc']],
    // uprime: [['y', 0, 'x', 'z', 'inc', 'inc'], ['y', 1, 'x', 'z', 'inc', 'decr']],
    // lprime: [['x', 0, 'z', 'y', 'decr', 'decr'], ['x', 1, 'z', 'y', 'decr', 'decr']],
    // bprime: [['z', 2, 'x', 'y', 'decr', 'decr'], ['z', 1, 'x', 'y', 'inc', 'decr']],
    // dprime: [['y', 2, 'x', 'z', 'decr', 'inc'], ['y', 1, 'x', 'z', 'decr', 'inc']],
  }
  
  const options = {
    staticAxis: rotationArgs[notation][0], 
    staticValue: rotationArgs[notation][1], 
    threeStepAxis: rotationArgs[notation][2], 
    oneStepAxis: rotationArgs[notation][3], 
    oneStepDirection: rotationArgs[notation][4], 
    threeStepDirection: rotationArgs[notation][5]
  };

  const rotMap = getRotationMap(options);
  sides[side].forEach((piece, i) => {
    let rotatedPiece = JSON.parse(JSON.stringify(piece));
    rotatedPiece = rotatePiece(rotatedPiece, notation);
    updatedCube[rotMap[i].y][rotMap[i].x][rotMap[i].z] = rotatedPiece;
  })

  if (twice) {
    sides[side].forEach((piece, i) => {
      let rotatedPiece = JSON.parse(JSON.stringify(piece));
      rotatedPiece = rotatePiece(rotatedPiece, notation);
      updatedCube[rotMap[i].y][rotMap[i].x][rotMap[i].z] = rotatedPiece;
    })
  }
  if (side2) {
    const options2 = {
      staticAxis: rotationArgs[notation2][0], 
      staticValue: rotationArgs[notation2][1], 
      threeStepAxis: rotationArgs[notation2][2], 
      oneStepAxis: rotationArgs[notation2][3], 
      oneStepDirection: rotationArgs[notation2][4], 
      threeStepDirection: rotationArgs[notation2][5]
    };
    const rotMap2 = getRotationMap(options2);
    sides[side2].forEach((piece, i) => {
      let rotatedPiece = JSON.parse(JSON.stringify(piece));
      rotatedPiece = rotatePiece(rotatedPiece, notation2);
      updatedCube[rotMap2[i].y][rotMap2[i].x][rotMap2[i].z] = rotatedPiece;
    })
  }

  
  return updatedCube;
}

const rotatePiece = (piece, notation) => {
  let rotatedPiece = JSON.parse(JSON.stringify(piece));
  let rotationMap = {
    //clockwise
    F: {
      top: 'right',
      bottom: 'left',
      right: 'bottom',
      left: 'top',
      front: 'front'
    },
    R: {
      top: 'back',
      bottom: 'front',
      front: 'top',
      back: 'bottom',
      right: 'right',
    },
    U: {
      front: 'left',
      left: 'back',
      back: 'right',
      right: 'front',
      top: 'top'
    },
    L: {
      front: 'bottom',
      bottom: 'back',
      back: 'top',
      top: 'front',
      left: 'left'
    },
    B: {
      top: 'left',
      left: 'bottom',
      bottom: 'right',
      right: 'top',
      back: 'back'
    },
    D: {
      front: 'right',
      right: 'back',
      back: 'left',
      left: 'front',
      bottom: 'bottom'
    },
    M: {
      front: 'bottom',
      bottom: 'back',
      back: 'top',
      top: 'front',
    },
    E: {
      front: 'right',
      right: 'back',
      back: 'left',
      left: 'front',
    },
    S: {
      top: 'right',
      bottom: 'left',
      right: 'bottom',
      left: 'top',
    },

    //Counter clockwise
    Fprime: {
      right: 'top',
      left: 'bottom',
      bottom: 'right',
      top: 'left',
      front: 'front'
    },
    Rprime: {
      back: 'top',
      front: 'bottom',
      top: 'front',
      bottom: 'back',
      right: 'right',
    },
    Uprime: {
      left: 'front',
      back: 'left',
      right: 'back',
      front: 'right',
      top: 'top'
    },
    Lprime: {
      bottom: 'front',
      back: 'bottom',
      top: 'back',
      front: 'top',
      left: 'left'
    },
    Bprime: {
      left: 'top',
      bottom: 'left',
      right: 'bottom',
      top: 'right',
      back: 'back'
    },
    Dprime: {
      right: 'front',
      back: 'right',
      left: 'back',
      front: 'left',
      bottom: 'bottom'
    },
    Mprime: {
      top: 'back',
      bottom: 'front',
      front: 'top',
      back: 'bottom',
    },
    Eprime: {
      front: 'left',
      left: 'back',
      back: 'right',
      right: 'front',
    },
    Sprime: {
      right: 'top',
      left: 'bottom',
      bottom: 'right',
      top: 'left',
    },
  }

  for (let key in piece) {
    rotatedPiece[key] = rotationMap[notation][piece[key]];
  }

  return rotatedPiece;
}

const getRotationMap = (options) => {
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