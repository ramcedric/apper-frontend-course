function isPalindrome(word) {
    //String checker
    if (typeof word !== 'string') {
      return false;
    }
  
    //Make all lowercase for checking
    const cleanedWord = word.toLowerCase();
  
    //Copied from reverse.js
    return cleanedWord === cleanedWord.split('').reverse().join('');
}

  //message output
const messages = {
    palindrome: 'It is a palindrome!',
    notPalindrome: 'It is not a palindrome!',
    invalidInput: 'Invalid input! Only strings are allowed.'
};

//Array of words to check
const words = ['RACECAR', 'mamamiaasd', 123, null];
  
//Check if the word is palindrome, not palindrome or invalid
words.forEach(word => {
    if (typeof word !== 'string') {
      console.log(`Word: ${word} - ${messages.invalidInput}`);
    } else {
      const message = isPalindrome(word) ? messages.palindrome : messages.notPalindrome;
      console.log(`Word: ${word} - ${message}`);
    }
});