class Matrix {
  constructor(rowsAndColumns) {
    this.matrix = rowsAndColumns.split("\n")
    this.matrix = this.matrix.map((row) => { return row.split(" ") })
    this.row = []
    this.column = []
    let rows_length = this.matrix.length
    let cols_length = this.matrix[0].length

    if (rows_length >= cols_length) {
      for (let rows = 0; rows < rows_length; rows++) {
        let auxRow = []
        let auxCol = []

        for (let col = 0; col < cols_length; col++) {

          if (rows > rows_length - 1) {
            continue
          }

          if (rows < rows_length) {
            auxRow.push(parseInt(this.matrix[rows][col]))
          }
          if (col < cols_length) {
            auxCol.push(parseInt(this.matrix[col][rows]))
          }
        }
        this.row.push((auxRow))
        this.column.push((auxCol))
      }

    } else {
      for (let rows = 0; rows < cols_length; rows++) {
        let auxRow = []
        let auxCol = []

        for (let col = 0; col < rows_length; col++) {

          if (col > cols_length - 1) {
            continue
          }

          if (rows < rows_length) {
            auxRow.push(parseInt(this.matrix[rows][col]))
          }
          if (col < cols_length) {
            auxCol.push(parseInt(this.matrix[col][rows]))
          }
        }
        this.row.push((auxRow))
        this.column.push((auxCol))
      }
    }
  }

  get rows() {
    return this.row
  }

  get columns() {
    return this.column
  }
}

//const matrix = new Matrix('1 2 3 4\n5 6 7 8\n9 8 7 6')
//const matrix = new Matrix('1 2 3\n4 5 6\n7 8 9\n8 7 6')

const matrix = new Matrix('1 2 3\n4 5 6\n7 8 9\n8 7 6')



