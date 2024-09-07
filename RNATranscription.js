const toRna = (DNASequence) => {
    let resultRNA = "";

    for (let letter of DNASequence) {
        if (sequenceRNA[letter]) {
            resultRNA += sequenceRNA[letter];
        }
    }

    return resultRNA;
};

const sequenceRNA = {
    "G": "C",
    "C": "G",
    "T": "A",
    "A": "U",
}

console.log(toRna('G'))