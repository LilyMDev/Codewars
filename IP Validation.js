// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// One-line solution:
const isValidIP = str => (str.split('.').filter(n => (n >= 0 && n <= 255 && (parseInt(n).toString() === n))).length === 4)

// Readable solution:
function isValidIP(str) {
    let address = str.split('.')
    address = address.filter(n => (n >= 0 && n <= 255))
    address = address.filter((parseInt(n).toString() === n))
    return (addressFiltered.length === 4)
  }