function isPalindrome(word) {
   let splitString = word.split("");
   let splitReversedString = splitString.reverse();
   let reversedWord = splitReversedString.join("");
  if (reversedWord === word) {
    return true;
  } else {
    return false;
  };
};

/* 
  Add your pseudocode here
// Create a function that reverses a string
// Assign reversed string to a variable
// Check if reversed string matches word

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
