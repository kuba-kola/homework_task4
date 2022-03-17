function myFilter (arr, callback, thisArg) {
    const filteredArr = [];
  
    for (let i = 0; i < arr.length; i++) {
        const thisCallback = callback.call(thisArg, arr[i], i, arr);

        if (thisCallback) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

function myReducer (arr, callback, initialValue) {
    let res = initialValue;

    for (let i = 0; i < arr.length; i++) {
        let res = callback.call(res, arr[i], i, arr);
    }
    
    return res;

}