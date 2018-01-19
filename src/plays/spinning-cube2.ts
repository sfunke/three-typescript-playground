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

// add axis to the scene
let axis = new THREE.AxisHelper(10);
scene.add(axis);

// add lights
var lights = [];
lights[0] = new THREE.PointLight(0xffffff, 1, 0);
lights[1] = new THREE.PointLight(0xffffff, 1, 0);
lights[2] = new THREE.PointLight(0xffffff, 1, 0);

lights[0].position.set(0, 200, 0);
lights[1].position.set(100, 200, 100);
lights[2].position.set(-100, -200, -100);

scene.add(lights[0]);
scene.add(lights[1]);
scene.add(lights[2]);

// add box
const cube = new THREE.Object3D();
cube.add(
	new THREE.LineSegments(
		new THREE.Geometry(),
		new THREE.LineBasicMaterial({
			color: 0xffffff,
			transparent: true,
			opacity: 0.5
		})
	)
);
cube.add(
	new THREE.Mesh(
		new THREE.BoxGeometry(1, 1, 1),
		new THREE.MeshPhongMaterial({
			color: 0x156289,
			emissive: 0x072534,
			side: THREE.DoubleSide,
			flatShading: true
		})
	)
);

scene.add(cube);



//----------------------------------
//  OnRender
//----------------------------------
function onRender():void {
    let timer = 0.002 * Date.now()
	cube.position.y = Math.sin(timer)
    cube.rotation.x += 0.05;
}



//----------------------------------
//  Export
//----------------------------------
export const playable:Playable = {
	scene,
	camera,
	onRender
};
