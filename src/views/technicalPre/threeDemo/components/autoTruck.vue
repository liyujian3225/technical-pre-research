<template>
  <div id="demo3"></div>
</template>
<script setup>
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//载入3D模型，推荐使用glTF（gl传输格式）。.GLB和.GLTF是这种格式的这两种不同版本， 都可以被很好地支持。
//当glTF不可用的时候，诸如FBX、OBJ或者COLLADA等等其它广受欢迎的格式在Three.js中也是可以使用、并且定期维护的。

let camera, controls, scene, renderer;

onMounted(() => {
  initScene();
  animate();
})

const initScene = () => {

  let urls = [
    "image/skybox/negx-.jpg", // right
    "image/skybox/negy-.jpg", // left
    "image/skybox/negz-.jpg", // top
    "image/skybox/posx-.jpg", // bottom
    "image/skybox/posy-.jpg", // back
    "image/skybox/posz-.jpg" // front
  ];

  scene = new THREE.Scene();
  // scene.background = new THREE.Color( 0xbfe4dd );
  scene.background = new THREE.CubeTextureLoader().load(urls);
  scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( 800, 450 );
  document.querySelector("#demo3").appendChild( renderer.domElement );

  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.5, 1000 );
  camera.position.set( -1, -1, 0 );
  camera.lookAt( 0, 0, 0 );

  controls = new OrbitControls( camera, renderer.domElement );
  controls.listenToKeyEvents( window );
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = false;
  controls.minDistance = 1;
  controls.maxDistance = 5;
  controls.maxPolarAngle = Math.PI / 2;

  const loader = new GLTFLoader();
  loader.load( 'models/autotruck.glb', function ( gltf ) {
    const model = gltf.scene;
    scene.add(model);
    model.scale.set(4, 4, 4);
    model.position.set(0, 0, 0)
  }, undefined, function ( error ) {
    console.error( error );
  } );
}

const render = () => {
  renderer.render( scene, camera );
}

const animate = () => {
  requestAnimationFrame( animate );
  controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
  render();
}

</script>
