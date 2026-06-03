let tex, tex2;

export function preload() {
    let p = new URL(import.meta.url).pathname;
    p = p.substring(0, p.lastIndexOf('/') + 1);
    tex = loadImage(p + 'tex1.png');
    tex2 = loadImage(p + 'tex2.png');
}

export function draw() {
    orbitControl();
    background(80,60,80);
    ambientLight(80);
    directionalLight(255, 255, 255, 1, 1, -1);
    noStroke();

    angleMode(DEGREES);


    // draw a cube with 6 rectangles
    rectMode(CENTER);
    let cubeSize = 100;
    let cubeSizeHalf = cubeSize / 2;

    // front
    push();
    translate(0, 0, cubeSizeHalf);
    texture(tex2);
    rect(0, 0, cubeSize, cubeSize);
    pop();

    // right
    push();
    translate(cubeSizeHalf, 0, 0);
    rotateY(90);
    texture(tex);
    rect(0, 0, cubeSize, cubeSize);
    pop();

    // back
    push();
    translate(0, 0, -cubeSizeHalf);
    rotateY(180);
    texture(tex);
    rect(0, 0, cubeSize, cubeSize);
    pop();

    // left
    push();
    translate(-cubeSizeHalf, 0, 0);
    rotateY(-90);
    texture(tex);
    rect(0, 0, cubeSize, cubeSize);
    pop();

    // top
    push();
    fill(0, 0, 255);
    translate(0, -cubeSizeHalf, 0);
    rotateX(90);
    texture(tex);
    rect(0, 0, cubeSize, cubeSize);
    pop();

    // bottom
    push();
    fill(255, 255, 0);
    translate(0, cubeSizeHalf, 0);
    rotateX(-90);
    texture(tex);
    rect(0, 0, cubeSize, cubeSize);
    pop();

}