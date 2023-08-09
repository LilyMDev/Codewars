// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

function towerBuilder(n) {
    let result = []
    for (let i = 1; i <= n; i++){
      result.push((" ").repeat(n - i) + ("*").repeat(2*i - 1) + (" ").repeat(n - i))
    }
    return result
  }