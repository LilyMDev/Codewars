// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

function domainName(url){
    let arr = url.split('://').join(".").split(".")
    let result = arr.filter(e => e !== "http" && e !== "https" && e !== "www")
    return result[0]
  }