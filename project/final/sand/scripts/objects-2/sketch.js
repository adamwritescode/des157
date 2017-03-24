var sands = [];

function setup() {
  createCanvas(500,500);
  
  for(var i = 0; i < width - width + 20; i++){
    sands[i] = new Sand(int((random(0,width))),(int(random(0,width))));
  }
}

function draw() {
  background('white'); // #e74c3c = red
  for(var i = 0; i < sands.length; i++){
    sands[i].display();
    sands[i].move(mouseX, mouseY);
  }
}

function Sand(x,y){
  this.px = x;
  this.py = y;
  
  this.pc = color('white');
  
  this.move = function(mx, my){
    // if sand point is to the left of the cursor
    /*if (this.px - mx <= 0 && this.px - mx >= -10){
      this.px -= 30;
      console.log("moved to x: " + this.px);
    }*/
    
    var d = dist(mouseX, mouseY, this.px, this.py);
    if(d <= 10){
      if(this.px <= mouseX){
        this.px -= 10;
      }
      if(this.px > mouseX){
        this.px =+ 10;
      }
    }
  }
  
  
  /*
  this.move = function(){
    if(mouseX === this.x && mouseY === this.y){
      console.log("current: " + this.x + " " + this.y);
      this.x += 25;
      this.y += 25;
      console.log("new: " + this.x + " " + this.y);
    }
  }
  */
  
  this.display = function(){
    //stroke(int(random(255)));
    point(this.px, this.py);
  }
}