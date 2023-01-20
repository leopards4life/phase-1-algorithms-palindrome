function isPalindrome(word) {
   if ((word.charAt(0) === word.length - 1) && (word.charAt(1) === word.length - 2)) {
    return true;
   } else {
    return false;
   };
};

/* 
  Add your pseudocode here
// Create if else statement = if matches, return true, if not return false
// Check if word.length is divisible evenly
// Check if first character matches last character
// Check if second character matches second to last character
// Check if third character matches third to last character

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
