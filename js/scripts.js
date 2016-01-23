var pingQualifiers = function(anyNumber) {
  if (anyNumber < 0) {
    return "Please only enter a positive number.";
  } else if (anyNumber % 1 !== 0) {
    return "Please enter only a whole, positive number.";
  } else if (anyNumber % 15 === 0) {
    return "pingpong";
  } else if (anyNumber % 5 === 0) {
    return "pong";
  } else if (anyNumber % 3 === 0) {
    return "ping";
  } else {
  return anyNumber;
  }
};

var pingLoop = function(anyNumber) {
  var numberBox = [];
  for (var i = 1; i <= anyNumber; i += 1) {
    numberBox.push(pingQualifiers(i));
  }
  return numberBox;
};

$(document).ready(function(){
  $("form").submit(function(event) {
  var userEntry = $("input#userInput").val();
  var result = pingLoop(userEntry);
    $(".output").text(result);

    event.preventDefault();
  });
});
