const isIsogram = (text) => {
  const letters = text.toLowerCase().split("")
  console.log(letters);
  
  const result = {}
  for (let index = 0; index < letters.length; index++) {
    if(letters[index] in result && letters[index] !== " " && letters[index] !== "-"){
      return false
    }
    result[letters[index]] = 1
  }
  return true
};

console.log(isIsogram('six-year-old'));
