class Squares {
  constructor(limit) {
    this.limit = limit
  }

  get sumOfSquares() {
    let result = 0;
    for (let num = 1; num <= this.limit; num++) {
      result = result + (num * num)
    }
    return result
  }

  get squareOfSum() {
    let result = 0;
    for (let num = 1; num <= this.limit; num++) {
      result = result + num
    }
    return result * result
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares
  }
}
const squar = new Squares(100)
console.log(squar.sumOfSquares);
console.log(squar.squareOfSum);
console.log(squar.difference);
