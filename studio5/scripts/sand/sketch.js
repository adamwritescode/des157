var space;
var area;
var pointCoords = [], pointX = [], pointY = [];
pointCoords = [pointX, pointY];
var i = 0;

function setup() {
  createCanvas(10,10);
  space = 2;
  noLoop();  // Run once and stop
}

function draw() {
  background("#eee");
  area = width * height;
  var maxWidthOrHeight = Math.max(width, height);
  console.log("The max width or height is: " + maxWidthOrHeight);
  
  /* for (var i = 0; i < (width * height); i++){
    console.log("Outermost loop (i loop): (" + pointX[i-1] + ", " + pointY[i-1] + ")");
  }*/
  
  for (var x = 0; x < width; x+= space){
    //console.log("2nd-level loop (x loop): (" + pointX[i] + ", " + pointY[i] + ")");

    for (var y = 0; y < height; y+= space, i++){
      stroke("#e67e22");
      point(x, y);
      pointX[i] = x;
      pointY[i] = y;
      
      // console.log("Innermost loop (y loop): (" + pointX[i] + ", " + pointY[i] + ")");
      // console.log("pointX[" + i +"]: " + pointX[i] + " --  pointY[" + i +"]: " + pointY[i] + " -- (" + pointX[i] + ", " + pointY[i] + ")");
      // console.log("pointY[" + i +"]: " + pointY[i]);
      
    }
  }
  
  
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