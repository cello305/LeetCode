/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly 
once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
*/

/*
if s and t are not the same length, false

otherwise, if letter from string s not in object, add it once
if encountered again, increment by one

saas
   ^


s x 2
a x 2



*/

// s = SATA


function groupAnagram(s, t) {
    const lettersMap = {};
    const s = ["aet", "tae", "eta", "nat", "tan"];
    const t = ["tea", "ate", "eat", "tab", "man"];

    if (s.length != t.length) {
        return false;
    }

    for (let char of s) {
        if(!letterMap[char]) {
            letterMap[char] = 1;
        } else {

            letterMap[char]++;
        }
    }

    for (let char of t) {
        if(!letterMap[char]) {
            return false;
        }

        if(letterMap[char]) {
            letterMap[char]--;
        }

        if(letterMap === 0) {
            delete lettersMap
        }

    }
    return Object.keys(letterMap).length === 0;

}

console.log(groupAnagram);

/*
strs["eat","tea","tan","ate","nat","bat"];

const sLetters = {};

if(s.length != t.length){
    return strs[];
}
for(let char of s){
    if(!sLetters[char]){
        sLetters[char] = 1;
    } else
        sLetters[char++];
}
*/