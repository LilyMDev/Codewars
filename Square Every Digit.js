// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

const squareDigits = num => Number(num.toString().split('').map(x => x**2).join(''))
