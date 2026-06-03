import * as activity from "./02-several-cubes";
import { drawAxes } from "@/utils/axes.js";
import { drawGrid } from "@/utils/grid.js";
import { demoMode } from "@/utils/demoMode.js";
import { drawWithPause } from "@/utils/animatedDraw.js";

export function setup() {
    camera(300, -300, 700);
}

export function draw(t) {
    orbitControl();
    background(30);
    ambientLight(80);
    directionalLight(255, 255, 255, 1, 1, -1);
    drawGrid();
    stroke(0);
    drawWithPause(demoMode?demo:activity.draw);
}

function demo() {
    box();
    translate(0,-100,0);
    box();
    translate(100,0,0);
    box();
    translate(0,100,0);
    box();
    translate(-100,0,100);
    box();
    translate(0,-100,0);
    box();
    translate(100,0,0);
    box();
    translate(0,100,0);
    box();
}
