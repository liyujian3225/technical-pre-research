<template>
  <div id="demo3"></div>
</template>
<script setup>
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//载入3D模型，推荐使用glTF（gl传输格式）。.GLB和.GLTF是这种格式的这两种不同版本， 都可以被很好地支持。
//当glTF不可用的时候，诸如FBX、OBJ或者COLLADA等等其它广受欢迎的格式在Three.js中也是可以使用、并且定期维护的。

onMounted(() => { initScene() })
const initScene = () => {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( 800, 450 );
  renderer.setClearColor(0xcccccc,1.0)
  const sceneBox = document.querySelector("#demo3");
  sceneBox.appendChild( renderer.domElement );

  const camera = new THREE.PerspectiveCamera( 105, window.innerWidth / window.innerHeight, 0.1, 1000 );
  camera.position.set( 0, 0, 0 );
  camera.lookAt( 0, 0, 0 );

  const scene = new THREE.Scene();

  const loader = new GLTFLoader();
  loader.load( 'models/gaz_66.glb', function ( gltf ) {
    const model = gltf.scene;
    scene.add(model);
    //模型放大，避免不显示
    model.scale.set(4, 4, 4);
    model.position.set(0, 0, -0.4)
    renderer.render( scene, camera );
  }, undefined, function ( error ) {
    console.error( error );
  } );
}
</script>
