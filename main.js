function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(150, 150);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 90, 85, 400, 300);
  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(40, 430, 80);
  circle(40, 43, 80);
  circle(530, 430, 80);
  circle(530, 43, 80);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(80, 417, 410, 30);
  rect(80, 30, 410, 30);
  rect(515, 80, 30, 310);
  rect(25, 80, 30, 310);
}
