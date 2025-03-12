// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    let object = {};
    for (let i = 0; i < arr1.length; i++){
        if (arr2[i]){
            object[arr1[i]] = arr2[i];
        } else {
            object[arr1[i]] = null;
        }
        
    }
    return object;
}

module.exports = twoArrayObject;