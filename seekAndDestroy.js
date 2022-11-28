function destroyer() {
    const args = Array.from(arguments)
    //console.log(args)
    const firstArr = args.shift()
    // console.log(firstArr)
  
    const newArray = []
    for (let i = 0; i < firstArr.length; i++) {
      if (args.includes(firstArr[i]) === false ) {
        newArray.push(firstArr[i])
      }
    }
    return newArray;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);