function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
}

function draw() {
  background(20, 30, 80);

  fill(255);
  textSize(32);
  text("ROOM 3", width / 2, 100);

  textSize(18);
  text("Click the left box to go to Room 2", width / 2, 160);
  text("Click the right box to go to Room 3", width / 2, 190);

  fill(180);
  rect(width / 2 - 150, height / 2, 180, 120);

  fill(180);
  rect(width / 2 + 150, height / 2, 180, 120);

  fill(0);
  textSize(20);
  text("ROOM 4", width / 2 - 150, height / 2);
  text("ROOM 5", width / 2 + 150, height / 2);
}

function mousePressed() {
  if (insideRect(mouseX, mouseY, width / 2 - 150, height / 2, 180, 120)) {
    window.location.href = "index4.html";
  }

  if (insideRect(mouseX, mouseY, width / 2 + 150, height / 2, 180, 120)) {
    window.location.href = "index5.html";
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