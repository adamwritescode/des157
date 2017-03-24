var points = [];
var sandCount = 0;

function setup() {
  createCanvas(800,250);
  // createCanvas(100,100);
  background('white');
  
  // draw box
  stroke(0);
  fill(0)
  rect(0,0,width,height);
  
  // draw sand bg
  stroke('brown');
  fill('#fff5d1');
  rect(25, 25, width-50, height-50);
  
  // draw sand particles
  
  for (var x = 25; x < width-25; x++){
    for (var y = 25; y < height-25; y++){
      // console.log(sandCount);
      //random int from 0-255, for greyscale
      var c = int(random(0,255));
      stroke('rgba(' + c + ',' + c + ',' + c + ',0.3)');
      points[sandCount] = point(x,y);
      sandCount++;
    }
  }
}

function draw() {
  stroke(235);
  fill(235);
  if(mouseX > 30 && mouseX < width-30 && mouseY > 30 && mouseY < height-30){
    ellipse(mouseX, mouseY, 5, 5);
    ellipse(mouseX-10, mouseY, 5,5);
    ellipse(mouseX+10, mouseY, 5,5);
  }
  
  /* 
  1. Create sand on canvas - done
  2. Draw line when mouse clicks + drags through sand
  3. Sand scatters when line is drawn through sand
  */
  

}