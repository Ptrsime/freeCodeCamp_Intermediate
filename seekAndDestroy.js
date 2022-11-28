// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

function destroyer() {
    // separate arguments
    const args = Array.from(arguments)
    const firstArr = args.shift()
    
    // create new variabel to store array result
    const newArray = []

    // compare if array is not in the arguments, put array in new array
    for (let i = 0; i < firstArr.length; i++) {
      if (args.includes(firstArr[i]) === false ) {
        newArray.push(firstArr[i])
      }
    }
    return newArray;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);