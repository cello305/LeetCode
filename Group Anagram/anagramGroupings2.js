strs["eat","tea"];

const sLetters = {};
let groupings = [];

for(let i = 0; strs.length < 0; i++){
    if(!sLetters[char]){
        sLetters[char] = 1;
    } else 
        sLetters[char]++;
}   

for(let i = 1; strs.length < 0; i++){
    for(let i = 0; sLetters[i]; i++){
        if(sLetters[i] == text.charAt(i)){
            sLetters[char]--;
        }
        else if(sLetters == {}){
            groupings = strs[i];
        }
        } i++;
    }

/*const array = [1, 2, 3, 4, 5];
const obj = {};

for (let i = 0; i < array.length; i++) {
  obj[i] = array[i];
}

for (const key in obj) {
  console.log(`Key: ${key}, Value: ${obj[key]}`);
}
 */
