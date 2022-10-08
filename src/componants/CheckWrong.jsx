import React from "react";

const CheckWrong = (arr, row, col, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[row][i] === val && i !== col) {
      return false;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][col] === val && i !== row) {
      return false;
    }
  }

  let gr = row - (row % 3);
  let gc = col - (col % 3);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (arr[i + gr][j + gc] == val && i + gr !== row && j + gc !== col) {
        return false;
      }
    }
  }
  return true;
};

export default CheckWrong;
