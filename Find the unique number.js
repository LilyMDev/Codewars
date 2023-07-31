// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    const sorted = arr.sort()
    return (sorted[0] === sorted[1]) ? sorted[sorted.length-1] : sorted[0]
  }
  