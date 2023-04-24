const word = "hello";
let vowelscount = 0;
let consonantcount = 0;

for (let i = 0; i < word.length; i++) {
  if (
    word[i] === "a" ||
    word[i] === "e" ||
    word[i] === "i" ||
    word[i] === "o" ||
    word[i] === "u"
  ) {
    vowelscount++;
  } else {
    consonantcount++;
  }
}

console.log(
  word + " has " + consonantcount + " consonants and " + vowelscount + " vowels"
);
