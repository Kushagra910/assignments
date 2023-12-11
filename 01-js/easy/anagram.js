/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let temp1 = str1.toLowerCase();
  let temp2 = str2.toLowerCase();
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < temp1.length; i++) {
    arr1.push(temp1[i]);
  }
  for (let i = 0; i < temp2.length; i++) {
    arr2.push(temp2[i]);
  }
  let s1 = "";
  let s2 = "";
  arr1.sort();
  arr2.sort();
  for (let i = 0; i < arr1.length; i++) {
    s1 += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    s2 += arr2[i];
  }
  return s1 == s2;
}

module.exports = isAnagram;
