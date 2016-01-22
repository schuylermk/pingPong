var pingypongy = function(startNumber, endNumber) {
  var resultArray = [];
  for (var i = startNumber; i <= endNumber; i += startNumber) {
    resultArray.push(i);
  }
  return resultArray;
};
