function diffArray(arr1, arr2) {
    const newArr = [];
    var x = arr1.concat(arr2)
  
    for (let i = 0; i < x.length; i++) {
      if ((arr1.indexOf(x[i]) === -1 ) || (arr2.indexOf(x[i]) === -1)) { 
        newArr.push(x[i])
      }
    }
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);