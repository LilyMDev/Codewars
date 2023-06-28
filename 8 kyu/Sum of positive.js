// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
    let sum = 0
    arr.forEach(integer =>{
      if (integer > 0) sum += integer
    })
    return sum
  }