<template>
  <div id="demo4" :style="{width: `${width}px`, height: `${height}px`}"></div>
</template>
<script setup>
import { ElLoading } from 'element-plus'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Sky } from 'three/examples/jsm/objects/Sky';

const props = defineProps({
  width: Number,
  height: Number,
})

let scene, renderer, camera, controls;
let loadingInstance;

onMounted(() => {
  initScene();
  animate();
})

onUnmounted(() => {
  THREE.Cache.clear();
  renderer.dispose();
  renderer.forceContextLoss();
  renderer.domElement = null;
  renderer = null;
})

const initScene = () => {

  //场景元素采用右手笛卡尔坐标系：x轴正方向向右，y轴正方向向上，z轴由屏幕从里向外
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xbfe4dd );
  scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

  //渲染器，将 camera 在 scene 中看到的内容渲染/绘制到画布上
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( props.width, props.height );
  document.querySelector("#demo4").appendChild( renderer.domElement );

  //fov：视场角、aspect：视场宽高比、near：能看多近、far：能看多远
  camera = new THREE.PerspectiveCamera( 45, props.width / props.height, 0.5, 100 );
  camera.position.set( -1, -1, 0 );
  camera.lookAt( 0, 0, 0 );

  //3d引擎在没有手动创建光的情况下会默认有个环境光，不然你什么都看不到。
  //常见的灯光有以下几种类型
  //AmbientLight（环境光，没有方向全局打亮，不会产生明暗）
  //DirectionLight（平行光，参考日光来理解）
  //PointLight（点光源，参考灯泡来理解）
  //SpotLight（聚光灯，参考舞台聚光灯）

  // 平行光
  // const light = new THREE.DirectionalLight(0xffffff, 1);
  // light.intensity = 1;
  // light.position.set(16, 16, 8);
  // light.castShadow = true;
  // light.shadow.mapSize.width = 512 * 12;
  // light.shadow.mapSize.height = 512 * 12;
  // light.shadow.camera.top = 40;
  // light.shadow.camera.bottom = -40;
  // light.shadow.camera.left = -40;
  // light.shadow.camera.right = 40;
  // scene.add(light);
  // 环境光
  // const ambientLight = new THREE.AmbientLight(0xcfffff);
  // ambientLight.intensity = 1;
  // scene.add(ambientLight);

  //天空太阳
  // const sky = new Sky();
  // sky.scale.setScalar(10000);
  // scene.add(sky);
  // const skyUniforms = sky.material.uniforms;
  // skyUniforms['turbidity'].value = 20;
  // skyUniforms['rayleigh'].value = 2;
  // skyUniforms['mieCoefficient'].value = 0.005;
  // skyUniforms['mieDirectionalG'].value = 0.8;
  // const sun = new THREE.Vector3();
  // const pmremGenerator = new THREE.PMREMGenerator(renderer);
  // const phi = THREE.MathUtils.degToRad(88);
  // const theta = THREE.MathUtils.degToRad(180);
  // sun.setFromSphericalCoords(1, phi, theta);
  // sky.material.uniforms['sunPosition'].value.copy(sun);
  // scene.environment = pmremGenerator.fromScene(sky).texture;

  //镜头轨道控制
  controls = new OrbitControls( camera, renderer.domElement );
  controls.listenToKeyEvents( window );
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = false;
  controls.minDistance = 1;
  controls.maxDistance = 5;
  controls.maxPolarAngle = Math.PI / 2;

  //载入3D模型，推荐使用glTF（gl传输格式）。.GLB和.GLTF是这种格式的这两种不同版本， 都可以被很好地支持。
  //当glTF不可用的时候，诸如FBX、OBJ或者COLLADA等等其它广受欢迎的格式在Three.js中也是可以使用、并且定期维护的。
  const loader = new GLTFLoader();
  loader.load(
    'models/autotruck.glb',
    function ( gltf ) {
      //缩放模型
      gltf.scene.scale.set(4, 4, 4);
      gltf.scene.position.set(0, 0, 0)
      //设置材质
      gltf.scene.traverse(function (child) {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            emissive: child.material.color,
            emissiveMap: child.material.map,
          });
        }
      });
      scene.add(gltf.scene);
      loadingInstance.close();
    },
    function (v) {
      const percent = v.loaded / v.total * 100;
      loadingInstance.setText(`模型已加载 ${percent.toFixed(0)}%`)
    },
    function ( error ) {
      console.error( error );
  });

  loadingInstance = ElLoading.service({
    target: document.querySelector("#demo4"),
    text: "模型加载中...",
    background: 'rgba(0, 0, 0, 0.7)'
  })

}

const render = () => {
  renderer.render( scene, camera );
}

const animate = () => {
  // Update controls
  controls.update();

  // Render
  render();

  // Call tick again on the next frame
  requestAnimationFrame( animate );
}

</script>
<style lang="scss" scoped>
div#demo4 {}
</style>
