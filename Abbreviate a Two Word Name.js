// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

function abbrevName(name){
    let arr = name.split(' ')
    let result = arr.map(name => name.charAt(0).toUpperCase())
    return result.join('.')
  }