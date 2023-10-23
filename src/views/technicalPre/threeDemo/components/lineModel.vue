<template>
  <div id="demo2"></div>
</template>
<script setup>
import * as THREE from 'three';

onMounted(() => { initScene() })
const initScene = () => {

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( 800, 450 );
  const sceneBox = document.querySelector("#demo2");
  sceneBox.appendChild( renderer.domElement );

  const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
  camera.position.set( 0, 0, 100 );
  camera.lookAt( 0, 0, 0 );

  const scene = new THREE.Scene();

  //对于线条来说，我们能使用的材质只有LineBasicMaterial 或者 LineDashedMaterial。
  const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

  //一个带有一些顶点的geometry（几何体）。
  const points = [];
  points.push( new THREE.Vector3( - 10, 0, 0 ) );
  points.push( new THREE.Vector3( 0, 10, 0 ) );
  points.push( new THREE.Vector3( 10, 0, 0 ) );
  const geometry = new THREE.BufferGeometry().setFromPoints( points );

  const line = new THREE.Line( geometry, material );

  scene.add( line );
  renderer.render( scene, camera );
}
</script>
