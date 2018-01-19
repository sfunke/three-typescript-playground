//----------------------------------
//  Imports
//----------------------------------
import * as THREE from "three";
import { Playable } from "./../playground";

//----------------------------------
//  Prepare Scene & Camera
//----------------------------------
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 50);
camera.position.x = 5;
camera.position.y = 5;
camera.position.z = 5;
camera.lookAt(scene.position);

//----------------------------------
//  Customization here
//----------------------------------

// TODO fill in the blanks


//----------------------------------
//  OnRender
//----------------------------------
function onRender():void {
	// TODO fill in the blanks
}



//----------------------------------
//  Export
//----------------------------------
export const playable:Playable = {
	scene,
	camera,
	onRender
};