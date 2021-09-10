/*
https://gist.github.com/jeanettable/710f546781803b53409d534d25da0c56
Palindrome Check
Learning Objective
Analyze and compare recursive and iterative approaches
Interviewer Prompt
Given an string str, create a function that returns a boolean, corresponding to whether that string is a palindrome (spelled the same backwards and forwards). Our palindrome check should be case-insensitive.

Examples
isPal('car') => false
isPal('racecar') => true
isPal('RaCecAr') => true
isPal('!? 100 ABCcba 001 ?!') => true
*/

// SRS Solution
// Examples: level or Level or LEVel --> true
// Pizza --> false

// Approach: recursion
// function takes a string, if the first and last letters are NOT the same, return false
// if the first and last letters are the same, remove the first and lats letters and recursively call the "new" word again
// Do that until you get to 1 or 2 letters left (maybe 1 or 0), return true/fase in that base case

function palindromeCheck(string) {
  let lowerString = string.toLowerCase();

  // Base case
  if (lowerString.length <= 1) {
    return true;
  }
  // Checkout for false case
  if (lowerString[0] !== lowerString[lowerString.length - 1]) {
    return false;
  } else {
    let shortenedString = lowerString.slice(1, lowerString.length - 1);
    return palindromeCheck(shortenedString);
  }
}

console.log(palindromeCheck('Level'));
console.log(palindromeCheck('pizza'));

// Iterative Solution
function isPalIterative(str) {
  while (str.length > 1) {
    let first = str[0].toLowerCase();
    let last = str[str.length - 1].toLowerCase();
    if (first != last) return false;
    str = str.slice(1, str.length - 1);
  }
  return true;
}
