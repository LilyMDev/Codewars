// Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = n => {
    let array = []
    for(let i = 1; i <= n; i++){
      array.unshift(i)
    }
    return array
  };