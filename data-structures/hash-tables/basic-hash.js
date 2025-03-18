"use strict";

// 1ST FILE

//# bad hash function
function hashBad(key, arrayLength) {
  let total = 0;

  for (const char of key) {
    // map "a" to 1, "b" to 2 and etc
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLength;
  }

  return total;
}

// no matter how many times we call, we always get 0
hashBad("pink", 10); // output: 0

//# better hash function
function hashBetter(key, arrayLength) {
  let total = 0;
  let WEIRD_PRIME = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLength;
  }

  return total;
}

hashBetter("pink", 10);
