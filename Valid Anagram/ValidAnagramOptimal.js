var isAnagram = function(s, t) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let sLetters = new Array(26).fill(0);
    let tLetters = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        let indexS = alphabet.indexOf(s[i]);
        sLetters[indexS]++;
    }
    for (let i = 0; i < t.length; i++) {
        let indexT = alphabet.indexOf(t[i]);
        tLetters[indexT]++;
    }
    for (let i = 0; i < 26; i++) {
        if (sLetters[i] !== tLetters[i]) {
            return false;
        }
    }
    return true;
};