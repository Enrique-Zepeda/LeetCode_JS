var repeatedCharacter = function (s) {
  const newArray = Array.from(s);
  const empyArray = [];
  console.log(newArray);
  for (let i = 0; i < newArray.length; i++) {
    let letter = newArray[i];
    if (empyArray.includes(letter)) {
      return letter;
    } else {
      empyArray.push(letter);
    }
  }
};

console.log(repeatedCharacter("abccbaacz"));
console.log(repeatedCharacter("abcdd"));
