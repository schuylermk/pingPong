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
  } return numberBox;
};
$(document).ready(function(){
  $("form").submit(function(event) {
  var userEntry = $("input#userInput").val();

  var result = pingLoop(userEntry);

    $(".output").text(result);

    event.preventDefault();
  });
});


if (ping) {
  append to ul#ping;
} else if (pong) {
  append to ul#pong;
} else if (pingpong) {
  append to ul#pingpong;
} else {
  append to ul#plainNumbers ;
}
