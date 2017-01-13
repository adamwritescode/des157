// Adam 2017
// Draw an ellipse that follows the cursor and changes color

void setup(){
  size(800, 250);
  background(255);
}

void draw(){
  ellipse(mouseX, mouseY, 50, 50);
}