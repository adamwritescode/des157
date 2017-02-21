var particles = [];
var area;
var particleCount;

/*
var xCrds = [];
var yCrds = [];
*/


function setup() {
  createCanvas(400,400);
  area = ((width-25) * (height-25));
  background('blanchedalmond');

  // draw box
  stroke(0);
  fill(0)
  rect(0,0,width,height);
  
  // draw sand bg
  stroke('brown');
  fill('#fff5d1');
  rect(25, 25, width-50, height-50);


  // Increase the particle count after each Sand object is created
  particleCount = 0;
  
  // Create Sand objects
  for (var x = 25; x < width-25; x++ ){
    for (var y = 25; y < height-25; y++){
      particles[particleCount] = new Sand(x,y);
      particleCount ++;
    }
  }
  
  for (var i = 0; i < particles.length; i++){
    particles[i].display();
  }
  
}





function draw() {
  /*
  for (var i = 0; i < particles.length; i++){
    particles[i].display();
  } #### ATTEMPTING TO MOVE OUT OF DRAW() #####
  */
  
  stroke(235);
  fill(235);
  
  if(mouseX > 30 && mouseX < width-30 && mouseY > 30 && mouseY < height-30){
    // Move sand
    for (i = 0; i < particleCount; i++){
      particles[i].isNearMouse();
      // particles[i].move();
    }
    
    // Draw "path" (raked area)  
    /*
    ellipse(mouseX, mouseY, 5, 5);
    ellipse(mouseX-10, mouseY, 5,5);
    ellipse(mouseX+10, mouseY, 5,5);
    */
  }
}






// Sand class
function Sand(x,y){
  this.x = x;
  this.y = y;
  
  this.strokeColor = getRandGrayRGBA();
  
  this.display = function(){
    stroke(this.strokeColor);
    point(this.x, this.y);
  };
  
  this.move = function(){
    if ((mouseX - this.x <= 10) && (mouseX - this.x >= 0)){
      this.x -= 25;
      this.strokeColor = 'red';
    } else if (abs(mouseX - this.x) <= 10 && (mouseX - this.x < 0)){
      this.x += 25;
      this.strokeColor = 'blue';
    } else {
      this.y += 100;
    }
  };
  
  this.isNearMouse = function(){
    //if (abs(mouseX - this.x) <= 2 && abs(mouseY - this.y) <= 2){
      //console.log("The mouse is near me at: (" + this.x + ", " + this.y + ")");
    
    //NEW TEST BELOW
    if (mouseX == this.x && mouseY == this.y){
      console.log (this.x + ", " + this.y);
      //this.x += 100;
      //this.y += 100;
    }
  };
}

// getRandGrayRGBA works properly
// Generates a random int between 0 and 255, and returns a string
// that sets the sand color when plugged in.
function getRandGrayRGBA(){
  var a; // alpha value, as string
  var c; // array to hold RGBA color values
  var rand; // to store random number (0-255)
  var rgba; // to store complete rgba string
  
  a = '0.3';
  c = new Array(3);
  rand = str(int(random(0,255)));

  // populate each array index with the random value
  for(var i = 0; i < c.length; i++){
    c[i] = rand;
  }

  // add alpha value to array
  c[c.length] = a;

  // combine array values into string
  rgba = "rgba(" + (join(c,',')) + ")";

  // store rgba value as a color
  rgba = color(rgba);
  // console.log(rgba);
  
  return rgba;
}
