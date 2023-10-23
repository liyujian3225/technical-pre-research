<template>
  <div id="demo1"></div>
</template>
<script setup>
import * as THREE from 'three';

onMounted(() => { initScene() })
const initScene = () => {
  //建立场景
  const scene = new THREE.Scene();
  //建立相机
  //这里相机类型是透视摄像机PerspectiveCamera
  //参数1.视野角度（FOV）场景的范围，单位是角度
  //参数2.长宽比（aspect ratio）
  //参数3.近截面（near）
  //参数4.远截面（far）当物体某些部分比摄像机的远截面远或者比近截面近的时候，该这些部分将不会被渲染到场景中。
  const camera = new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 0.1, 1000 );
  //建立渲染器
  //这里渲染器类型是WebGLRenderer
  const renderer = new THREE.WebGLRenderer();
  //设置渲染器尺寸
  renderer.setSize( 800, 450 );
  //将renderer（渲染器）的dom元素添加到html文档中
  const sceneBox = document.querySelector("#demo1");
  sceneBox.appendChild( renderer.domElement );

  //创建一个立方体
  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  //创建一个材质，类型为MeshBasicMaterial
  const material = new THREE.MeshBasicMaterial( { color: 0x2b69ec } );
  //需要一个Mesh网格。网格包含一个几何体以及作用在此几何体上的材质，我们可以直接将网格对象放入到我们的场景中，并让它在场景中自由移动。
  const cube = new THREE.Mesh( geometry, material );

  //Mesh网格添加到场景中的（0, 0, 0）坐标处
  scene.add( cube );

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
  }

  animate();
}
</script>
