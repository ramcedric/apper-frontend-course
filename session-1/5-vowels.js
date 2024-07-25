function convertToVowels(word) {
    //String checker
    if (typeof word !== 'string') {
      return 'Invalid input! Only strings are allowed.';
    }
  
    //Set vowels
    const vowels = new Set('aeiouAEIOU');
    
    //Store empty string
    let result = '';
    
    //Loop through each character
    for (let char of word) {
      //Check the vowels
      if (vowels.has(char)) {
        //Add vowel to result
        result += char;
      }
    }
    
    //Return vowels
    return result;
}
  
const word = 'thisisrandomshenAnIgans';
const wordWithOnlyVowels = convertToVowels(word);
console.log(wordWithOnlyVowels); // 'iiaoeAIa'
  
//non-string
const nonStringInput = 12345;
const invalidInputResult = convertToVowels(nonStringInput);
console.log(invalidInputResult); // 'Invalid input! Only strings are allowed.'