const rows = (numRows) => {
  const triangle = [];
  let currentRow = [];
  for (let row = 0; row < numRows; row++) {
    currentRow.push(1)
    for (let index = 0; index < row; index++) {
      currentRow.push(row);
    }
    triangle.push(currentRow);
    triangle[row][triangle[row].length - 1] = 1;
    currentRow = []
  }

  for (let row = 4; row < triangle.length; row++) {
    for (let num = 1; num < triangle[row].length - 1; num++) {
      triangle[row][num] = triangle[row - 1][num - 1] + triangle[row - 1][num]
    }
  }
  return triangle
};

//console.log(rows(5)); //[[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1],]
console.log(rows(6)); //[[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1],]
//console.log(rows(10)); //[[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1], 
//[1, 7, 21, 35, 35, 21, 7, 1], [1, 8, 28, 56, 70, 56, 28, 8, 1], [1, 9, 36, 84, 126, 126, 84, 36, 9, 1],] 