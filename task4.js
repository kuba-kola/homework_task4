Array.prototype.myFilter = function (arr, callback) {
    const filteredArr = [];
  
    for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i], i, arr)) {
        filteredArr.push(arr[i]);
    }
    }
    return filteredArr;

}

function myReducer (arr, callback, start) {

}