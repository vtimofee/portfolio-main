function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
}

function draw() {
  background(10);

  fill(255);
  textSize(32);
  text("ROOM 5", width / 2, 100);

  textSize(18);
  text("Dead end. Or is it?", width / 2, 160);

  fill(220);
  rect(width / 2, height / 2, 180, 120);

  fill(0);
  textSize(20);
  text("RETURN", width / 2, height / 2);
}

function mousePressed() {
  if (insideRect(mouseX, mouseY, width / 2, height / 2, 180, 120)) {
    window.location.href = "index3.html";
  }
}

function insideRect(px, py, rx, ry, rw, rh) {
  return (
    px > rx - rw / 2 &&
    px < rx + rw / 2 &&
    py > ry - rh / 2 &&
    py < ry + rh / 2
  );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
