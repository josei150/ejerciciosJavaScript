const transform = (letters) => {
  const result = {}
  for(let score in letters){
    for(let letter of letters[score]){
      console.log(letter);
      result[letter.toLowerCase()] = parseInt(score)
    }
  }
  console.log(result);
  return result
};

transform({ 1: ['A', 'E'], 2: ['D', 'G'] })