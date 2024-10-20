const isPaired = (text) => {
  if(text === "") return true

  const pairs = {
    "(": 0,
    ")": 0,
    "{": 0,
    "}": 0,
    "[": 0,
    "]": 0
  }
  
  const brackets = text.match(/[\{+\}+\[+\]+\(+\)+]/g)
  
  if ((brackets[brackets.length / 2 - 1] === "(" && brackets[brackets.length / 2] !== ")") || (brackets[brackets.length / 2 - 1] === "[" && brackets[brackets.length / 2] !== "]") ||
    (brackets[brackets.length / 2 - 1] === "{" && brackets[brackets.length / 2] !== "}")) {
    return false
  }

  for (let word of brackets) {
    if (word in pairs) {
      if (pairs["("] < pairs[")"] || pairs["["] < pairs["]"] || pairs["{"] < pairs["}"]) {
        return false
      }
      pairs[word] += 1
    }
  }

  return pairs["("] === pairs[")"] && pairs["["] === pairs["]"] && pairs["{"] === pairs["}"]
};


const otherSolution = (brackets) => {
  brackets = brackets.replace(/[^{}\[\]\(\)]/g, '')
  
  for (let len = -1; len !== brackets.length;) {
    len = brackets.length
    brackets = brackets.replace(/\{\}|\[\]|\(\)/g, '')
    console.log(brackets);
  }
  return brackets.length === 0
}
console.log(otherSolution('{[]}'));
//console.log(isPaired('\\left(\\begin{array}{cc} \\frac{1}{3} & x\\\\ \\mathrm{e}^{x} &... x^2 \\end{array}\\right)'));
