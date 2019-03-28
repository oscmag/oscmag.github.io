const isAvailable = (grid, i, j, rNum) => {
  return checkRow(grid, i, j, rNum)
    && checkColumn(grid, i, j, rNum)
    && checkBox(grid, i, j, rNum);
}

const checkRow = (grid, i, j, rNum) => {
  for (let j2 = 0; j2 < 9; j2++) {
    if (grid[i][j2] === rNum) {
      return false;
    }
  }
  return true;
}

const checkColumn = (grid, i, j, rNum) => {
  for (let i2 = 0; i2 < 9; i2++) {
    if (grid[i2][j] === rNum) {
      return false;
    }
  }
  return true;
}

const checkBox = async (grid, i, j, rNum) => {
  for (let a = 3; a < 10; a = a + 3) {
    if (i < a) {
      for (let b = 3; b < 10; b = b + 3) {
        let found = await innerFunc(grid, i, j, rNum, a, b);
        switch(found) {
          case 'true':
            return true;
          case 'false':
            return false;
          default:
            continue;
        }
      }
    }
  }
  return false;
}
const innerFunc = (grid, i, j, rNum, aMax, bMax) => {
  if (j < bMax) {
    for (let i2 = aMax-3; i2 < aMax; i2++) {
      for (let j2 = bMax-3; j2 < bMax; j2++) {
        if (grid[i2][j2] === rNum) {
          return 'false';
        }
      }
    }
    return 'true';
  }
}

const checkSquare = (i, j) => {
  let square = '';
  if (i < 3 ) {
    square += 'T';
    if (j < 3) {
      square += 'L';
    } else if (j < 6) {
      square += 'M';
    } else {
      square += 'R';
    }
  } else if (i < 6) {
    square += 'M';
    if (j < 3) {
      square += 'L';
    } else if (j < 6) {
      square += 'M';
    } else {
      square += 'R';
    }
  } else {
    square += 'B';
    if (j < 3) {
      square += 'L';
    } else if (j < 6) {
      square += 'M';
    } else {
      square += 'R';
    }
  }

  return square;
}

export default {
  isAvailable, checkSquare,
}