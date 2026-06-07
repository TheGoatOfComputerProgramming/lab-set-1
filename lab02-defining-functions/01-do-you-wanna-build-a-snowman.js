// -------------------------------------------------------
//  Do you want to build a snowman?
//
//  Practice what we did yesterday!
//
//  Start by adjusting the size and position of the spheres
//  to make a better snowman. Compare it with the demo and
//  add a hat.
//
//  Easy? You can add eyes, a carrot nose, a pipe and even
//  some arms.
//
//
//  How do I draw a cylinder?
//      https://p5js.org/reference/p5/cylinder/
//  How do I change colors?
//      https://p5js.org/reference/p5/fill/
//  How do I move?
//      https://p5js.org/reference/p5/translate/
//  How do I draw a sphere?
//    https://p5js.org/reference/p5/sphere/
// -------------------------------------------------------
export function draw(){
    fill(200);
    translate(0,-50,0);
    sphere(50);
    translate(0,-100,0);
    sphere(50);
    translate(0,-100,0);
    sphere(50);
}