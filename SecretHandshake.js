const commands = (num) => {
  const actions = []

  const binary = toReverseBinary(num)

  for (let binaryNum = 0; binaryNum < binary.length; binaryNum++) {
    if (binaryNum === 0 && binary[binaryNum] == "1") {
      actions.push("wink")
    }
    if (binaryNum === 1 && binary[binaryNum] == "1") {
      actions.push("double blink")
    }
    if (binaryNum === 2 && binary[binaryNum] == "1") {
      actions.push("close your eyes")
    }
    if (binaryNum === 3 && binary[binaryNum] == "1") {
      actions.push("jump")
    }
    if (binaryNum === 4 && binary[binaryNum] == "1") {
      actions.reverse()
    }
  }
  return actions
};

function toReverseBinary(num) {
  let dividend = num;
  const binary = []

  while (dividend > 0) {
    if (dividend % 2 === 0) {
      binary.push(0)
    }
    if (dividend % 2 !== 0) {
      binary.push(1)
    }
    dividend = Math.floor(dividend / 2)
  }
  return binary.join("")
}

console.log(commands(16))