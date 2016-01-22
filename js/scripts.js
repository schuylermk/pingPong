var pingypongy = function(anyNumber) {
  if (anyNumber % 15 === 0) {
    return "pingpong";
  } else if (anyNumber % 5 === 0) {
    return "pong";
  } else if (anyNumber % 3 === 0) {
    return "ping";
  } else {
  return anyNumber;
  }
}

// var allNumbers = [parseInt(anyNumber)];
// if((anyNumber % 3 !== 0) || (anyNumber % 5 !== 0)) {
//   // allNumbers.push(anyNumber);
// }
// return allNumbers;


// if (var endnumber < 1) {
//   return "Please enter a number that's greater than zero!";
// }


//   else {
//     alert("ok");
//     var resultArray = [];
//     for (var i = 1; i <= endNumber; i += 1) {
//       resultArray.push(i);
//     }
//     return resultArray;
//   }
//
//
// else if (number > 20,000) {
//   return "Whoa, whoa, whoa- take it easy... I can do that, but c\'mon- enter a smaller number!"
// }
