// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    let positiveCount = 0,
        negativeSum = 0
    input.forEach(element => {
      element > 0 ? positiveCount += 1 : negativeSum += element
    })
    return([positiveCount,negativeSum])
  }