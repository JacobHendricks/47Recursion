/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1
  return nums[i] * product(nums, i + 1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestSoFar = 0) {
  if (idx === words.length) return longestSoFar;
  longestSoFar = Math.max(words[idx].length, longestSoFar);
  return longest(words, idx + 1, longestSoFar);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = "") {
  if (idx >= str.length) return newStr;
  newStr += str[idx];
  return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0, binary = false) {
  if (str[idx] == str[str.length - 1 - idx]) {binary = true;}
  if (binary === false || idx >= str.length / 2) return binary
  return isPalindrome(str, idx + 1, binary)
}

// Other Solution

// function isPalindrome(str, idx = 0) {
//   let leftIdx = idx;
//   let rightIdx = str.length - idx - 1;
//   if (leftIdx >= rightIdx) return true;
//   if (str[leftIdx] !== str[rightIdx]) return false;
//   return isPalindrome(str, idx + 1);
// }

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1
  if (arr[idx] === val) return idx
  return findIndex(arr, val, idx + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = str.length - 1, newStr = "") {
  if (idx < 0) return newStr;
  newStr += str[idx];
  return revString(str, idx - 1, newStr);
}

// Other solution

// function revString(str, idx = 0, newStr = "") {
//   if (newStr.length === str.length) return newStr;
//   newStr += str[str.length - 1 - idx];
//   return revString(str, idx + 1, newStr);
// }

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, strArr = []) {
  for (let val in obj) {
    if (
      typeof obj[val] === 'object' &&
      !Array.isArray(obj[val]) &&
      obj[val] !== null
    ) {
      gatherStrings(obj[val], strArr)
    }
    if (typeof obj[val] === "string") strArr.push(obj[val])
  }
  return strArr;
}

let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};


// Provided Solution

// function gatherStrings(obj) {
//   let stringArr = [];
//   for (let key in obj) {
//     if (typeof obj[key] === "string") stringArr.push(obj[key]);
//     if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
//   }
//   return stringArr;
// }


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

// function binarySearch(arr, val, start = 0, end = arr.length) {
//   if (arr.length === 0) return -1;
//   if (val < arr[start] || val > arr[end]) return -1;

//   if (start > end) {
//     return -1;
//   }
//   let mid = Math.floor((start + end) / 2);
//   if (arr[mid] === val) {
//     return mid;
//   }
//   if (arr[mid] > val) {
//     binarySearch(arr, val, start, mid - 1)
//   }
//   return binarySearch(arr, val, mid + 1, end)
// }

// function binarySearch(arr, val, start = 0, end = arr.length - 1) {
//   // if (arr.length === 0) return -1;
//   // if (val < arr[start] || val > arr[end]) return -1;

//   if (start > end) return -1;
//   let mid = Math.floor((start + end) / 2);
//   if (arr[mid] === val) {
//     return mid;
//   } else if (val < arr[mid]) {
//     binarySearch(arr, val, start, mid - 1)
//   } else {
//     binarySearch(arr, val, mid + 1, end)
//   }
// }

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
