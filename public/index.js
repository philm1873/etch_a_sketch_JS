window.addEventListener('load', function() {
  var canvas = document.querySelector('#main-canvas');

  var context = canvas.getContext('2d');

  var x = 300;
  var y = 300;

  context.moveTo(x,y);



var draw = function(changeArray){
  // console.log(changeArray);
  context.beginPath();
  context.moveTo(x, y);
  // console.log(x, y);
  x += changeArray[0];
  y += changeArray[1];
  context.lineTo(x, y);
  context.stroke();
}

var getChange = function(key) {
  // console.log(key);
  switch(key) {
    case "ArrowUp": return [0,-4];
    case "ArrowDown": return [0,4];
    case "ArrowLeft": return [-4,0];
    case "ArrowRight": return [4,0];
  }
  return;
}

document.addEventListener('keydown', function(event){
  // console.log(event.key);
  var changeArray = getChange(event.key);
  draw(changeArray);
})

var changeColour = function () {
  context.strokeStyle = this.value;
}

var clearScreen = function(){
context.clearRect(0, 0, canvas.width, canvas.height);
x = 300;
y = 300;

context.moveTo(x,y);
}

var colourPicker = document.querySelector('#input-color');
colourPicker.addEventListener('change', changeColour);

var shakeButton = document.querySelector('#shake')
shakeButton.addEventListener('click', clearScreen);

});
