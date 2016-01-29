var pingLoop = function(number) {
  var numberBox = [];
  for (var i = 1; i <= number; i += 1) {
    if (i % 15 === 0) {
      numberBox.push("pingpong");
    } else if (i % 5 === 0) {
      numberBox.push("pong");
    } else if (i % 3 === 0) {
      numberBox.push("ping");
    } else {
      numberBox.push(i);
    }
  }
  console.log(numberBox);
  return numberBox;
};

$(document).ready(function(){
  $("form").submit(function(event) {
  var userEntry = parseInt($("input#userInput").val());
  var result = pingLoop(userEntry);
  for (var i = 0; i < result.length; i++) {
    $("#result").append("<li>" + result[i] + "</li>")
  }
    event.preventDefault();
  });
});
