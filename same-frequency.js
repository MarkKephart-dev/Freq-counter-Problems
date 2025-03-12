// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    const num1Str = num1.toString();
    const num2Str = num2.toString();
    if (num1Str.length !== num2Str.length) return false; // if they are different lengths return false

    const makeFreqCounter = (str) => {
        let frequencies = new Map();
        for (let char of str){
            let valCount = frequencies.get(char) || 0;
            frequencies.set(char, valCount + 1);
        }
        return frequencies;
    }

    const freqNum1 = makeFreqCounter(num1Str);
    const freqNum2 = makeFreqCounter(num2Str);
    for (let [digit, count] of freqNum1) {
        if (!freqNum2.has(digit) || freqNum2.get(digit) !== count) return false;
    }
    return true;
}

module.exports = sameFrequency;
