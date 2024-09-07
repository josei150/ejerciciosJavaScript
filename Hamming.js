const compute = (DNA1, DNA2) => {
  if (DNA1.length !== DNA2.length) {
    throw new Error('strands must be of equal length')
  }

  let distance = 0;

  for (let index = 0; index < DNA1.length; index++) {
    if (DNA1[index] !== DNA2[index]) {
      distance += 1
    }
  }
  
  return distance
};

console.log(compute('GGACGGATTCTG', 'AGGACGGATTCT')); //9
console.log(compute('A', 'G')); //1

