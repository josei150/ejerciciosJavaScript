const answer = (statement) => {
  const words = statement.split(" ")

  //Aquí tengo que hacer una validación para lanzar los errores

  if (statement.includes("cubed")) {
    throw Error("Unknown operation")
  }

  if (statement.includes("Who")) {
    throw Error("Unknown operation")
  }

  const filteredWords = words.filter((word) =>
    word === "plus" || word === "minus" || word === "multiplied" || word === "divided" || !isNaN(parseInt(word)))

  if (filteredWords.length != 0 && words.every(word => isNaN(parseInt(word)))) {
    throw Error("Syntax error")
  }


  console.log(words);
  for (let index = 0; index < words.length; index++) {
    if ((words[index] === "is" && isNaN(parseInt(words[index + 1]))) || (!isNaN(parseInt(words[index])) && !isNaN(parseInt(words[index + 1]))) ||
      words[index] === "plus" && isNaN(parseInt(words[index + 1])) || words[index] === "minus" && isNaN(parseInt(words[index + 1])) ||
      words[index] === "by" && isNaN(parseInt(words[index + 1])) || isNaN(parseInt(words[words.length - 1]))) {
      throw Error("Syntax error")
    }
  }



  if (filteredWords.length === 1) {
    return parseInt(filteredWords[0])
  }

  let result = parseInt(filteredWords[0])

  for (let index = 1; index < filteredWords.length; index++) {

    //console.log(result);

    if (index % 2 === 0) {
      continue
    }

    if (filteredWords[index] === "plus") {
      result += parseInt(filteredWords[index + 1])
    }

    if (filteredWords[index] === "minus") {
      result -= parseInt(filteredWords[index + 1])
    }

    if (filteredWords[index] === "multiplied") {
      result *= parseInt(filteredWords[index + 1])
    }

    if (filteredWords[index] === "divided") {
      result /= parseInt(filteredWords[index + 1])
    }

  }
  return result

};

console.log(answer("What is 1 plus 2 1?"))
//console.log(answer("What is 6 multiplied by 4?"))
//console.log(answer("What is 25 divided by e?"))
//console.log(answer("What is 5 plus 5 6 plus 2?"))

