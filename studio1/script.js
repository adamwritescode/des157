// This is a processing (p5.js) script
// to be used for a web banner animation
// which does something...tba

var diam = 80;

function setup() {
    var banner = createCanvas(800, 250);
    banner.parent('banner');
}

function draw() {
    if (mouseIsPressed) {
        fill('#333');
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, diam,  diam);
}

function mouseWheel(event) {
    print(event.delta);
    diam += event.delta;
    print('diam: ' + diam);
    //return false;
}