// add whatever parameters you deem necessary
function separatePositive(numArr) {
    let left = 0;
    let right = numArr.length - 1;

    while (left < right) {
        if (numArr[left] < 0 && numArr[right] > 0) {
            // Swap negative on left side with positive on right side
            [numArr[left], numArr[right]] = [numArr[right], numArr[left]];
            left++;
            right--;
        } else {
            if (numArr[left] > 0) left++;
            if (numArr[right] < 0) right--;
        }
    }

    return numArr;
}

module.exports = separatePositive;