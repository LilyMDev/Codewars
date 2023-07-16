// There is a bus moving in the city which takes and drops some people at each bus stop.
// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

let number = function(busStops){
    let runningTotal = 0
    busStops.forEach(e => {
      runningTotal += e[0] - e[1]
    })  
    return runningTotal
  }
  