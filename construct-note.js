// add whatever parameters you deem necessary
function constructNote(message, letters) {
    if (message.length > letters.length) return false; // if message longer than letters return false

    // Frequency counter helper function
    const makeFreqCounter = (str) => {
        let frequencies = new Map();
        for (let char of str){
            let valCount = frequencies.get(char) || 0;
            frequencies.set(char, valCount + 1);
        }
        return frequencies;
    }

    const needed = makeFreqCounter(message);
    const useable = makeFreqCounter(letters);

    for (let [char, count] of needed) {
        if (!useable.has(char) || useable.get(char) < count) {
            return false;
        }
    }
    return true;
}

module.exports = constructNote;
