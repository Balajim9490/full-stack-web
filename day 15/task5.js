function countVowels(str) {
    let vowelCount = 0;
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();

      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount++;
      }
    }
    return vowelCount;
  }
  console.log(countVowels("the movie is block buster"))
  console.log(countVowels("the climax is highlight"))