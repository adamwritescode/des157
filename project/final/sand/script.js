// Sandbox script - studio 5

var sandBox = [];
// var bg;

function setup() {
  var theCanvas = createCanvas(680, 390);
  theCanvas.parent('canvas');
  // bg = loadImage("img/zengarden-bg.png"); // load bg image
  for(var i = 0; i < ((width * height))/32; i++){
    sandBox.push(new Sand(int(random(0, width)), int(random(0, height)), 2));
  }
}

function draw() {
  background('blanchedalmond');
  // image(bg,0,0);
  for(var i = 0; i < sandBox.length; i++){
    sandBox[i].display();
    sandBox[i].move();
  }
}

// Sand class/constructor
function Sand(x,y,d) {
  this.px = x;
  this.py = y;
  this.diam = d;

  // generates an RGBA string to be stored as the Sand fill color
  this.getRandRGBA = function(){
    var a; // alpha value, as string
    var c; // array to hold RGBA color values
    var rand; // to store random number (0-255)
    var rgba; // to store complete rgba string

    a = '0.3';
    c = new Array(3);
    rand = str(int(random(0,255)));

    // populate each array index with the random value
    for(var i = 0; i < c.length; i++){
      c[i] = rand; // one random number (0-255) which is the same for R,G,B
    }

    // add alpha value to array
    c[c.length] = a;

    // combine array values into string
    rgba = "rgba(" + (join(c,',')) + ")";

    // store rgba value as a color
    rgba = color(rgba);

    return rgba;
  };

  this.fillColor = this.getRandRGBA();

  // displays sand object on canvas
  this.display = function(){
    noStroke();
    fill(this.fillColor);
    ellipse(this.px, this.py, this.diam);
  };

  // handles mouse/sand collison & movement
  this.move = function(mx, my){
    var d = dist(mouseX, mouseY, this.px, this.py);
    if(d <= 10){
      if(this.px <= mouseX && this.py <= mouseY){
        this.px -= 10;
        this.py -= 10;
      }
      if(this.px <= mouseX && this.py > mouseY){
        this.px -= 10;
        this.py += 10;
      }
      if(this.px >= mouseX && this.py >= mouseY){
        this.px += 10;
        this.py += 10;
      }
      if(this.px >= mouseX && this.py < mouseY){
        this.px += 10;
        this.py -= 10;
      }
    }
  };
}

// end of p5js code

// preload DOM content
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // show/hide credit popup
    var credits = document.getElementById("credits");
    var showCredits = document.getElementById("show-credits");
    var hideCredits = document.getElementById("hide-credits");
    showCredits.addEventListener("click", function(){credits.style.display = "block";});
    hideCredits.addEventListener("click", function(){credits.style.display = "none";});
});
