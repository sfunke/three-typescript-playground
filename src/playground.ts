// three.js
import * as THREE from "three";
console.log(`Three.js Version: ${THREE.REVISION}`);

export type Playable = {
    scene:THREE.Scene,
	camera:THREE.PerspectiveCamera,
	renderer?:THREE.Renderer,
    onRender?:()=>void
}

let playable:Playable;

let glRenderer = new THREE.WebGLRenderer();
glRenderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(glRenderer.domElement);

function animate(): void {
    requestAnimationFrame(animate);
    playable.onRender()
	playable.renderer.render(playable.scene, playable.camera);
}

window.addEventListener(
	"resize",
	() => {
		playable.camera.aspect = window.innerWidth / window.innerHeight;
		playable.camera.updateProjectionMatrix();
		glRenderer.setSize(window.innerWidth, window.innerHeight);
	},
	false
);


export const play = (p:Playable) => {
	playable = p;
	playable.renderer = playable.renderer || glRenderer
    animate()
}