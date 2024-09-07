const costOneBook = 800;

const discounts = {
  5: .25,
  4: .20,
  3: .1,
  2: .05,
  1: 0,
}

const cost = (books) => {
  if (books.length === 0) {
    return 0;
  }

  const cantOfBooks = [0, 0, 0, 0, 0];
  for (let book of books) {
    cantOfBooks[book - 1] += 1;
  }

  cantOfBooks.sort();
  cantOfBooks.reverse();

  const discountsPerGroups = [];
  
  while (!cantOfBooks.every((numBook) => numBook === 0)) {
    let findDiscount = 0;
    for (let book = 0; book < cantOfBooks.length; book++) {
      if (cantOfBooks[book] > 0) {
        if ((cantOfBooks[0] === 4 && cantOfBooks[2] === 4 && cantOfBooks[3] === 2 && cantOfBooks[4] === 2) || (cantOfBooks[0] === 3 && cantOfBooks[2] === 3 && cantOfBooks[3] === 1 && cantOfBooks[4] === 2) || (cantOfBooks[0] === 2 && cantOfBooks[2] === 2 && cantOfBooks[3] === 1 && cantOfBooks[4] === 1) || (cantOfBooks[0] === 1 && cantOfBooks[1] === 2 && cantOfBooks[3] === 0 && cantOfBooks[4] === 1)) {
          for (let index = 0; index < 5; index++) {
            if (cantOfBooks[index] > 0) {
              cantOfBooks[index] -= 1;
              findDiscount += 1;
            }
            if (findDiscount == 4) {
              break;
            }
          }
          break;
        }
        cantOfBooks[book] -= 1;
        findDiscount += 1;
      }
    }
    discountsPerGroups.push((costOneBook * findDiscount) - ((costOneBook * findDiscount) * discounts[findDiscount]))
  }
  return discountsPerGroups.reduce((a, b) => a + b)

}


console.log(cost([1, 1, 2, 2, 3, 3, 4, 5, 1, 1, 2, 2, 3, 3, 4, 5])) // 10240