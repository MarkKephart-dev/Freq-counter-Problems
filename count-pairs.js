// add whatever parameters you deem necessary
function countPairs(arr, target) {
    let seen = new Set();
    let count = 0;

    for (let num of arr) {
        let complement = target - num;
        if (seen.has(complement)) {
            count++;
        }
        seen.add(num);
    }

    return count;
}

module.exports = countPairs;