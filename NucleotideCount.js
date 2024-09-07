function countNucleotides(strand) {
  const nucleotides = {
    "A": 0,
    "C": 0,
    "G": 0,
    "T": 0
  }

  let resultCountNucleotides = []

  for (let nucleotide of strand) {
    if (nucleotide in nucleotides) {
      nucleotides[nucleotide] += 1
    } else {
      throw Error("Invalid nucleotide in strand")
    }
  }

  for (let index in nucleotides) {
    resultCountNucleotides.push(nucleotides[index])
  }

  return resultCountNucleotides.join(" ")
}

console.log(countNucleotides("AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC")); //'20 12 17 21'
