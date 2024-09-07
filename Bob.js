const hey = (message) => {
  const regex = /[A-Z]/g
  const found = message.match(regex);
  message = message.trim();
  if (message === "") {
    return "Fine. Be that way!"
  }

  if (message.endsWith("?") && message.split("").every((letter) => letter.toUpperCase() === letter) && found !== null) {
    return "Calm down, I know what I'm doing!";
  }

  if (message.endsWith("?")) {
    return "Sure.";
  }


  if (message.split("").every((letter) => letter.toUpperCase() === letter) && found !== null) {
    return "Whoa, chill out!";
  }

  return "Whatever.";
};

console.log(hey('WHAT THE HELL WERE YOU THINKING?'));
console.log(hey('FCECDFCAAB'));
console.log(hey('\n\r \t'));