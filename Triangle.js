class Triangle {
  constructor(...sides) {
    [this.sideA, this.sideB, this.sideC] = sides;
  }

  isTriangle() {
    if (this.sideA === 0 || this.sideB === 0 || this.sideC === 0) return false;
    if (this.sideA + this.sideB < this.sideC || this.sideB + this.sideC < this.sideA || this.sideA + this.sideC < this.sideB) return false
    return true
  }

  get isEquilateral() {
    if (!this.isTriangle()) return false
    if (this.sideA === this.sideB && this.sideA === this.sideC) {
      return true;
    }
    return false;
  }

  get isIsosceles() {
    if (!this.isTriangle()) return false
    if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC) {
      return true;
    }
    return false;
  }

  get isScalene() {
    if (!this.isTriangle()) return false
    if (this.sideA !== this.sideB && this.sideA !== this.sideC) {
      return true;
    }
    return false;
  }
}

const triangle = new Triangle(1, 2, 1);

console.log(triangle.isIsosceles)