
var origArray = [2, 3, 4];


function writeOrigArray() {
  document.getElementById("textbox1").value = origArray[0];
  document.getElementById("textbox2").value = origArray[1];
  document.getElementById("textbox3").value = origArray[2];
}


function squareValues() {
  var squareArray = [];
  for (var i = 0; i < origArray.length; i++) {
    squareArray[i] = origArray[i] * origArray[i];
  }
  document.getElementById("textbox1").value = squareArray[0];
  document.getElementById("textbox2").value = squareArray[1];
  document.getElementById("textbox3").value = squareArray[2];
}


document.getElementById("cubeButton").addEventListener("click", function() {
  var cubeArray = [];
  for (var i = 0; i < origArray.length; i++) {
    cubeArray[i] = origArray[i] * origArray[i] * origArray[i];
  }
  document.getElementById("textbox1").value = cubeArray[0];
  document.getElementById("textbox2").value = cubeArray[1];
  document.getElementById("textbox3").value = cubeArray[2];
});


function fourthPower() {
  var powerArray = [];
  for (var i = 0; i < origArray.length; i++) {
    powerArray[i] = origArray[i] * origArray[i] * origArray[i] * origArray[i];
  }
  document.getElementById("textbox1").value = powerArray[0];
  document.getElementById("textbox2").value = powerArray[1];
  document.getElementById("textbox3").value = powerArray[2];
}


document.getElementById("powerButton").addEventListener("click", fourthPower);


window.addEventListener("load", writeOrigArray);
