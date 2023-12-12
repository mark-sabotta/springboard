// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    const result = {};
    for(let i = 0; i < arr1.length; i++){
        result[arr1[i]] = arr2[i] || null;
    }
    return result;
}
