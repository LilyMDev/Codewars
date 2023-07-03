// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

var countBits = function(n) {
    let binaryN = n.toString(2)
    let bits = binaryN.split("0").join("")
    return bits.length
  };