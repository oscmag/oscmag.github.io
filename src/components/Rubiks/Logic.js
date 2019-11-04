export const rotate = function (notation, cube, sides) {
  let updatedCube = JSON.parse(JSON.stringify(cube));
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
    r: ['x', 2, 'z', 'y', 'inc', 'decr'],
    u: ['y', 0, 'x', 'z', 'decr', 'decr'],
    d: ['y', 2, 'x', 'z', 'inc', 'decr'],
    f: ['z', 0, 'x', 'y', 'inc', 'decr'],
    b: ['z', 2, 'x', 'y', 'inc', 'inc'],
    l: ['x', 0, 'z', 'y', 'inc', 'inc']
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
  
  return updatedCube;
}

const rotatePiece = (piece, notation) => {
  let rotatedPiece = JSON.parse(JSON.stringify(piece));
  let rotationMap = {
    //clockwise
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
    },

    //Counter clockwise
    fPrime: {
      right: 'top',
      left: 'bottom',
      bottom: 'right',
      top: 'left',
      front: 'front'
    },
    rPrime: {
      back: 'top',
      front: 'bottom',
      top: 'front',
      bottom: 'back',
      right: 'right',
    },
    uPrime: {
      left: 'front',
      back: 'left',
      right: 'back',
      front: 'right',
      top: 'top'
    },
    lPrime: {
      bottom: 'front',
      back: 'bottom',
      top: 'back',
      front: 'top',
      left: 'left'
    },
    bPrime: {
      left: 'top',
      bottom: 'left',
      right: 'bottom',
      top: 'right',
      back: 'back'
    },
    dPrime: {
      right: 'front',
      back: 'right',
      left: 'back',
      front: 'left',
      bottom: 'bottom'
    }
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