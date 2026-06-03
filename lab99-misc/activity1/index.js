/// <reference types="p5/global" />

import { verts, faces } from "./teapot.js";
import { drawWithPause } from "@/utils/animatedDraw.js";



let v2 = verts.map(v => [v[0], -v[2], v[1]]);
function l(i, j) {
    line(
        verts[i][0], verts[i][1], verts[i][2], //
        verts[j][0], verts[j][1], verts[j][2]
    )
}

export function draw(t) {
    orbitControl();
    background(30);
    ambientLight(80);
    directionalLight(255, 255, 255, 1, 1, -1);
    drawWithPause(demo, {noAxis: true});
}

function demo(time) {

    scale(50)
    stroke(255);
    for (let face of faces) {
        l(face[0], face[1]);
        l(face[1], face[2]);
        l(face[2], face[0]);

        /*
        fill(128)
        beginShape();
        vertex(...verts[face[0]]);
        vertex(...verts[face[1]]);
        vertex(...verts[face[2]]);
        endShape();
        */
    }
}