var sands = [];

function setup() {
  createCanvas(300,300);
  background('#e74c3c');
  
  for(var i = 0; i < width - width + 2; i++){
    sands.push(new Sand(int((random(0,width))),(int(random(0,width)))));
  }
}

function draw() {
  for(var i = 0; i < sands.length; i++){
    sands[i].display();
    sands[i].move();
  }
}

function Sand(x,y){
  this.x = x;
  this.y = y;
  
  this.c = color('white');
  
  this.move = function(){
    /* 
    if(mouseX === this.x && mouseY === this.y){
      console.log("current: " + this.x + " " + this.y);
      this.x += 25;
      this.y += 25;
      console.log("new: " + this.x + " " + this.y);
      */
    }
  };
  
  this.display = function(){
    //stroke(int(random(255)));
    point(this.x, this.y);
  };
}