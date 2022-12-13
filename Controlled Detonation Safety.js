function safe_mine_field(mine_field) {
  let safePositions = [];
  for (let i = 0; i < mine_field.length; i++) {
    for (let j = 0; j < mine_field[i].length; j++) {
      if (mine_field[i][j] != 'M' && mine_field[i][j] != 'T') {
        if (isSafe(mine_field, i, j)) {
          let arr = [i, j];
          safePositions.push(arr);
        }
      }
    }
  }
  return safePositions;
}

function isSafe(mine_field, posx, posy) {
  let safeNorth = true;
  let safeSouth = true;
  let safeEast = true;
  let safeWest = true;
  // Check North
  if (posx > 0) {
    for (let i = posx; i >= 0 && i >= posx - 4; i--) {
      if (mine_field[i][posy] === 'T') {
        safeNorth = true;
        break;
      }
      if (mine_field[i][posy] === 'M') {
        safeNorth = false;
        break;
      }
    }
  }
  // Check South
  if (posx < mine_field.length) {
    for (let i = posx; i < mine_field.length && i <= posx + 4; i++) {
      if (mine_field[i][posy] === 'T') {
        safeSouth = true;
        break;
      }
      if (mine_field[i][posy] === 'M') {
        safeSouth = false;
        break;
      }
    }
  }
  // Check East
  if (posy < mine_field[posx].length) {
    for (let j = posy; j < mine_field[posx].length && j <= posy + 4; j++) {
      if (mine_field[posx][j] === 'T') {
        safeEast = true;
        break;
      }
      if (mine_field[posx][j] === 'M') {
        safeEast = false;
        break;
      }
    }
  }
  // Check West
  if (posy > 0) {
    for (let j = posy; j >= 0 && j >= posy - 4; j--) {
      if (mine_field[posx][j] === 'T') {
        safeWest = true;
        break;
      }
      if (mine_field[posx][j] === 'M') {
        safeWest = false;
        break;
      }
    }
  }
  return safeNorth && safeWest && safeEast && safeSouth;
}
