// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let i = 0; // pointer for first string
    let j = 0; // pointer for second string

    for (let j = 0; j < str2.length; j++){
        if (str2[j] === str1[i]) {
            i++; // if they match, move to the next letter in both
            if (i === str1.length) return true; // if reached the end of word 1, return true
        }
    }
    return false;
}

module.exports = isSubsequence;