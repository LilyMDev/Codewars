// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let lengths = s.split(' ').map(ele => ele.length).sort((a,b) => a-b)
    return lengths[0]
  }