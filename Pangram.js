const isPangram = (sentence) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    for (let letter of alphabet) {
        if (!sentence.toLowerCase().includes(letter)) {
            return false
        }
    }
    return true
};

console.log(isPangram('abcdefghijklmnopqrstuvwxyz'))