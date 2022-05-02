
let kewpie;

function preload() {
  kewpie = loadModel('kewpie.obj');
}

function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(255);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  model(kewpie);
}
