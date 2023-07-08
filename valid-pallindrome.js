// My solution
var isPalindrome = function (s) {
  const alphaNumberc = Array.from(
    "abcdefghijklmnopqrstujwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
  );
  const json_string = JSON.stringify(s);
  let filteredString = "";
  for (let i = 0; i < json_string.length; i++) {
    const char = json_string[i];
    const index = alphaNumberc.indexOf(char);
    if (index > -1) {
      filteredString += alphaNumberc[index];
    }
  }
  filteredString = filteredString.toLowerCase();
  if (!filteredString.length) {
    return true;
  }
  const length = filteredString.length;
  let frontPointer = 0;
  let backPointer = length - 1;
  while (frontPointer < backPointer) {
    if (filteredString[frontPointer] == filteredString[backPointer]) {
      frontPointer++;
      backPointer--;
    } else {
      return false;
    }
  }
  return true;
};

/**
 * 2 Pointer | Midde Convergence
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length <= 1) return true;

  let [left, right] = [0, s.length - 1];
  let leftChar, rightChar;
  while (left < right) {
    leftChar = s[left];
    rightChar = s[right];

    // skip char if non-alphanumeric
    if (!/[a-zA-Z0-9]/.test(leftChar)) {
      left++;
    } else if (!/[a-zA-Z0-9]/.test(rightChar)) {
      right--;
    } else {
      // compare letters
      if (leftChar.toLowerCase() != rightChar.toLowerCase()) {
        return false;
      }
      left++;
      right--;
    }
  }
  return true;
};

/**
 * 2 Pointer | Midde Convergence | No RegEx | No Copying
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const isAlphaNumeric = (c) =>
    (c.toLowerCase() >= "a" && c.toLowerCase() <= "z") ||
    (c >= "0" && c <= "9");

  let left = 0;
  let right = s.length - 1;
  let skipLeft,
    skipRight,
    endsEqual = false;

  while (left < right) {
    skipLeft = !isAlphaNumeric(s.charAt(left));
    if (skipLeft) {
      left++;
      continue;
    }

    skipRight = !isAlphaNumeric(s.charAt(right));
    if (skipRight) {
      right--;
      continue;
    }

    endsEqual = s.charAt(left).toLowerCase() === s.charAt(right).toLowerCase();
    if (!endsEqual) return false;

    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome("race a car"));
