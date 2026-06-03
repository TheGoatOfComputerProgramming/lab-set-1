// -------------------------------------------------------
//  Activity 01: A single cube
//
//  The runner handles setup, lighting, and the draw loop.
//  Just export a draw() function and put your code in it.
//
//  Try:
//    box(100)
//    sphere(80)
//    cylinder(50, 100)
//    rotateY(frameCount * 0.01)
// -------------------------------------------------------
/// <reference types="p5/global" />

function tree(depth, t) {
  if (depth == 0) {
    sphere();
    return;
  }

  if (depth > 3)
    fill(130, 80, 0)
  else
    fill(10, 120, 10)
  rotateZ(2 + 4 * Math.sin(t))
  cylinder(10, 80, 6, 1);
  scale(.8)

  push();
  translate(0, -40, 0)
  rotateZ(30);
  rotateY(30)
  translate(0, 40, 0)
  translate(0, -80, 0);
  tree(depth - 1, t);
  pop()

  push()
  translate(0, -40, 0)
  rotateZ(-30);
  rotateY(30)
  translate(0, 40, 0)
  translate(0, -80, 0);
  tree(depth - 1, t);
  pop()
}


export function draw(t) {
  orbitControl();
  background(30);
  ambientLight(80);
  directionalLight(255, 255, 255, 1, 1, -1);
  noStroke();

  tree(10, t);
}
