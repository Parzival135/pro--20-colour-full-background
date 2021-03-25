
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
}


function draw(){

  // change the value of Red based on the mouse movement about the X axis
  r=mouseX;
  r=r%255
  // change the value of Green based on the mouse movement about the X axis
  g=mouseX+50;
  g=g%255
  // change the value of Blue based on the mouse movement about the X axis
  b=mouseX+253;
  b=b%255

  // Use the map() function to do so. 
background(r,g,b);
  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  fill(255)
  ellipse(mouseX,mouseY,20,20);
  // Remember to fill the canvas with white paint before creating the ellipse.
}