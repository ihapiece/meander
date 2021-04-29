let s = 16;
let n = 4;
let d = 0;
let r = 5;
let x = 0;
let y = 0;
let sl, sl2;
let o = 0;

function setup() {
  createCanvas(800, 400);
  frameRate(30);
  strokeWeight(s/2);
  strokeCap(PROJECT);
  sl = createSlider(1, 16, 3, 1);
  sl.position(10, height-28);
  sl.style("width", "120px");
}

function c(l) {
  while (d < 0) {
    d+=4;
  }
  d = d%4;
  switch (d) {
    case 0:
      line(x, y, x+(l*s), y);
      x += l*s;
      break;
    case 1:
      line(x, y, x, y-(l*s));
      y -= l*s;
      break;
    case 2:
      line(x, y, x-(l*s), y);
      x -= l*s;
      break;
    case 3:
      line(x, y, x, y+(l*s));
      y += l*s;
      break;
  }
}

function draw() {
  background(20, 20, 35);
  stroke(200);
  let g = 1;
  n = sl.value();
  d = -sl.value();
  r = min(int((width-200)/(0.4*s*n)),40);
  o++;
  if (o >= (n+1)*2*s) {o = 0;}
  x = -s*(n)-26-o;
  y = height/2;
  for (let i = 0; i <= r; i++) {
    while (g <= n) {
      d++;
      c(g++);
    }
    d++;
    c(n);
    while (g > 1) {
      d--;
      c(--g);
    }
    d--;
    c(1);
  }
}
