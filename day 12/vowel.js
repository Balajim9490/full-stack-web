
var char = 'e'; 

if (char === 'a' || char ==='e'|| char ==='i' || char ==='o' || char ==='u') {
  console.log(`${char} is a vowel.`);
} else if (char.match(/[a-z]/)) {
  console.log(`${char} is a consonant.`);
} else {
  console.log(`${char} is not a letter.`);
}