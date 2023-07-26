// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

function isTriangle(a,b,c)
{
  let arr = [a,b,c].sort((x,y) => x-y)
  if (a <= 0 || b <= 0 || c <= 0) return false
  else return (arr[0] + arr[1] > arr[2]) ? true : false
}
