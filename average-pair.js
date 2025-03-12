// add whatever parameters you deem necessary
function averagePair(numArr, targetAvg) {
    const targetTotal = targetAvg * 2;
    let right = numArr.length - 1;
    for (let left = 0; left < right; left++) {
        if (numArr[left] + numArr[right] === targetTotal) {
            return true;
        } else if (numArr[left] + numArr[right] > targetTotal) {
            right--;
        } 
    }
    return false;
}

module.exports = averagePair;