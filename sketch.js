function setup() {
  createCanvas(400, 400);
  background(64, 224, 208);
}

function draw() {
}

function mouseMoved() {
  noFill();
  stroke(255);
  ellipse(mouseX, mouseY, random(100));
}

function mousePressed() {
  background(64, 224, 208);
}