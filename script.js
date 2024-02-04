function setup() {
  createCanvas(320, 240);
}

var x = 80, y = 80

function draw() {
  background(200);
  
  // check to condition of the mouse
  if(mouseIsPressed){ // true or false?
    // if true, change the fill color here
    fill(213,100,124)
    x = width/3;
    y = height/3;
  }
  else { 
    // otherwise do this:
    fill(255)
    x = width/2;
    y = height/2;
  }
  ellipse(width/2, height/2, 100, 100);
}
