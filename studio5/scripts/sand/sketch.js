var space;
var area;
var pointCoords = [], pointX = [], pointY = [];
pointCoords = [pointX, pointY];
var i = 0;
var mx;
var my;
var sandLoaded = false;

function setup() {
  createCanvas(300,300);
  space = 2;
  //noLoop();  // Run once and stop
}

function draw() {
  background("#eee");
  area = width * height;
  var maxWidthOrHeight = Math.max(width, height);
  // console.log("The max width or height is: " + maxWidthOrHeight);
  
  // Mouse detection?
  // Objective: When mouse is near sand, sand is pushed away.
  // If mouse coords are near point coords, move points
  // -- within 10 pixels of mouse coords
  mx = mouseX;
  my = mouseY;
  console.log(mx + ", " + my);  
  
  createSand();

    
  /* ------- DEBUG AREA --------- */
  /*
  var randX = int(random(0, (area / 4)));
  var randY = int(random(0, (area / 4)));
  
  console.log("random point: (" + pointX[randX] + ", " + pointY[randY] + ")");
  console.log (randX);
  console.log (randX);
  console.log (randX);
  console.log(randY);
  console.log(randY);
  console.log(randY);
  */
}

function createSand(){
  if(!sandLoaded){
    for (var x = 0; x < width; x+= space){
      for (var y = 0; y < height; y+= space, i++){
        stroke("#e67e22");
        pointX[i] = x;
        pointY[i] = y;
        
        // mouse stuff goes here
        if ((mx - pointX[i]) < 10 && (my - pointY[i] < 10)){
          stroke("black");
          pointX[i] += 10;
          pointY[i] += 10;
        }
    
        point(x, y);
        /* Debug */
        // console.log("Innermost loop (y loop): (" + pointX[i] + ", " + pointY[i] + ")");
        // console.log("pointX[" + i +"]: " + pointX[i] + " --  pointY[" + i +"]: " + pointY[i] + " -- (" + pointX[i] + ", " + pointY[i] + ")");
        // console.log("pointY[" + i +"]: " + pointY[i]);
      
        sandLoaded = true;

      } // for(... y)
    } // for(... x)
  } // if(!sandLoaded)
  else {};
} // createSand()
