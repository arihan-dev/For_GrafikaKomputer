function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      fill(x*25, y*25, 100);
      rect(x*40, y*40, 30, 30);
    }
  }
}
