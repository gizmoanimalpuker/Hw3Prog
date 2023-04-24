
var origArray = [2, 3, 4]; 

function updateTextboxes(array) {
  document.getElementById("textbox1").value = array[0];
  document.getElementById("textbox2").value = array[1];
  document.getElementById("textbox3").value = array[2];
}

function squareValues() {
  var squareArray = origArray.map(function(x) {
    return x * x;
  });
  updateTextboxes(squareArray);
}

document.getElementById("cubeButton").addEventListener("click", function() {
  var cubeArray = origArray.map(function(x) {
    return x * x * x;
  });
  updateTextboxes(cubeArray);
});

function fourthPower() {
  var powerArray = origArray.map(function(x) {
    return x * x * x * x;
  });
  updateTextboxes(powerArray);
}

document.getElementById("powerButton").addEventListener("click", fourthPower);

document.addEventListener("DOMContentLoaded", function() {
  updateTextboxes(origArray);
});
