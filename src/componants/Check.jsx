import React from "react";

export function check(arr, row, col, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[row][i] === val) {
      return false;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][col] === val) {
      return false;
    }
  }

  let gr = row - (row % 3);
  let gc = col - (col % 3);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (arr[i + gr][j + gc] == val) {
        return false;
      }
    }
  }
  return true;
}
