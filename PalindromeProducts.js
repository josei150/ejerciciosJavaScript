class Palindromes {
  static generate({ maxFactor, minFactor }) {
    if (maxFactor < minFactor) {
      throw new Error('min must be <= max')
    }

    const small = {}
    const large = {}
    const palindomeNumbers = []


    let newMax = maxFactor
    for (let index = minFactor; index <= maxFactor; index++) {
      if (maxFactor >= 9999) {
        newMax = maxFactor / 4
      }
      for (let index2 = minFactor; index2 <= newMax; index2++) {
        let factor = index * index2
        if (factor.toString() === factor.toString().split("").reverse().join("")) {
          palindomeNumbers.push(factor)
        }
      }
    }

    palindomeNumbers.sort((a, b) => a - b)
    small["value"] = palindomeNumbers[0] || null
    large["value"] = palindomeNumbers[palindomeNumbers.length - 1] || null
    small["factors"] = []
    large["factors"] = []

    for (let index = minFactor; index < maxFactor; index++) {
      if (small["value"] % index === 0 && (small["value"] / index <= maxFactor && small["value"] / index >= minFactor) && index <= small["value"] / index) {
        small.factors.push([index, small["value"] / index])
      }

      if (large["value"] % index === 0 && (large["value"] / index <= maxFactor && large["value"] / index >= minFactor) && index <= large["value"] / index) {
        large.factors.push([index, large["value"] / index])
      }
    }

    return { largest: large, smallest: small }
  }

}

const numbers = Palindromes.generate({ maxFactor: 9, minFactor: 1 })
console.log(numbers.smallest, numbers.largest);
