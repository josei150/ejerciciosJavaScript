const steps = (numTarget) => {
  if (numTarget <= 0) {
    throw new Error("Only positive numbers are allowed")
  }

  let numberOfSteps = 0;
  let iterNum = numTarget;
  while (iterNum > 1) {
    iterNum = iterNum % 2 === 0 ? iterNum / 2 : 3 * iterNum + 1
    numberOfSteps++
  }
  return numberOfSteps;
}

console.log(steps(3))
console.log(steps(12))
//console.log(steps(0))