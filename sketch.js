let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(0,120,180);

  for (let i = bubbles.length - 1; i >= 0; i--) {
    let b = bubbles[i];

    b.y -= b.speed;
    b.x += random(-0.5, 0.5);
    b.alpha -= 2;

    fill(150, 220, 255, b.alpha);
    circle(b.x, b.y, b.size);

    fill(255, 255, 255, b.alpha * 0.7);
    circle(
      b.x - b.size * 0.2,
      b.y - b.size * 0.2,
      b.size * 0.25
    );

    if (b.alpha <= 0) {
      bubbles.splice(i, 1);
    }
  }
}

function mouseMoved() {
  bubbles.push({
    x: mouseX,
    y: mouseY,
    size: random(10, 30),
    speed: random(1, 3),
    alpha: 200
  });
}
