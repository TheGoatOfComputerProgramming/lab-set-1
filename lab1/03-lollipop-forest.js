// -------------------------------------------------------
//  Activity 03: A Lollipop Forest
//
//  You can move around to draw a tree, now you are going to
//  do it two more times. I'd suggest you type it out, not
//  copy and paste, so you build "muscle memory".
//
//  Draw a tree, then move back down and over to the right
//  and do it again, and then again!
//
//  https://p5js.org/reference/p5/cylinder/
//  https://p5js.org/reference/p5/fill/
//  https://p5js.org/reference/p5/translate/
//  https://p5js.org/reference/p5/sphere/
//
// -------------------------------------------------------
export function draw(){
    //TODO Remove Code
    
    //1️⃣ Copy and paste your 6 lines of tree code from Activity 2. Remove the extra comments...
    translate(0, -50, 0);
    fill(150, 90, 20);
    cylinder(10, 100);
    translate(0, -90, 0);
    fill(50, 180, 50);
    sphere();

    //2️⃣ Translate 120 units Right and 140 down
    translate(120,140,0);

    //3️⃣ Copy and paste your tree code again
    translate(0, -50, 0);
    fill(150, 90, 20);
    cylinder(10, 100);
    translate(0, -90, 0);
    fill(50, 180, 50);
    sphere();

    //4️⃣ Translate 120 units Right and 140 down
    translate(120,140,0);

    //5️⃣ Copy and paste your tree code again
    translate(0, -50, 0);
    fill(150, 90, 20);
    cylinder(10, 100);
    translate(0, -90, 0);
    fill(50, 180, 50);
    sphere();

}