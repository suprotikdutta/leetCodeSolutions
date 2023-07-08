//My Soultion -------> Wrong
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (!stack.length) {
      stack.push(s[i]);
      continue;
    }
    if (s[i] == ")") {
      if (stack[stack.length - 1] != "(") {
        return false;
      }
    } else if (s[i] == "}") {
      if (stack[stack.length - 1] != "{") {
        return false;
      }
    } else if (s[i] == "]") {
      if (stack[stack.length - 1] != "[") {
        return false;
      }
    }
    stack.pop();
    stack.push(s[i]);
  }
  return true;
};

//Optimized solution
var isValid = function (s) {
  let stack = [];
  const map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (const char of s) {
    /* Time O(N) */
    const isBracket = char in map;
    if (!isBracket) {
      stack.push(char);
      continue;
    } /* Space O(N) */

    const isEqual = stack[stack.length - 1] === map[char];
    if (isEqual) {
      stack.pop();
      continue;
    }

    return false;
  }

  return stack.length === 0;
};
console.log(isValid("(]"));
