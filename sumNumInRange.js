// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers--
// plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.


function sumAll(arr) {
    //find max and min numb in array
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    //create a new array to save result
    let sumNum = 0;
    //find num between min and max, include min and max
    for (let i = min; i <= max; i++) {
        //sum all of numb
       sumNum +=i
    }
    //return the result
    return sumNum
  }
  
  sumAll([1, 4]);