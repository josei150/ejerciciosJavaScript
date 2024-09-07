const rows = (rowNum) => {
  let arr = rowNum ? [[1]] : [];
  for (let row = 1; row < rowNum; row++) {
    let currentRow = [1];
    //console.log(arr);
    for (let col = 1; col < row; col++) {
      console.log(currentRow);
      currentRow.push(arr[row - 1][col - 1] + arr[row - 1][col]);
    }
    currentRow.push(1);
    arr.push(currentRow);
    //console.log(currentRow);
  }
  return arr;
};

console.log(rows(6)); //[[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1],]