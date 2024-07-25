function reverse(word) {
    //String checker
    if (typeof word !== 'string') {
      return 'Invalid input! Only strings are allowed.';
    }
  
    // Convert string to array, reverse and join
    return word.split('').reverse().join('');
}

const word = 'hello';
const reversedWord = reverse(word);
console.log(reversedWord); // 'olleh'

//non-string
const nonStringInput = 12345;
const invalidReversedWord = reverse(nonStringInput);
console.log(invalidReversedWord); // 'Invalid input! Only strings are allowed.'