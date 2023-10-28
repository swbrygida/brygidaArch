<template>
    <main>
      <!-- <div>{{ props.obiekt3d }}</div> -->
      <!-- <div>{{ props.mp3 }}</div> -->
    </main>
  </template>
  <script setup>
  const props = defineProps(["obiekt3d", "mp3"]);
  
  import * as THREE from "three";
  import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
  import { OrbitControls } from "three/addons/controls/OrbitControls.js";
  
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth * 0.95, window.innerHeight * 0.9);
  document.body.appendChild(renderer.domElement);
  
  const light = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(light);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
  scene.add(directionalLight);
  directionalLight.position.set(5, 1, 5);
  
  const gltfLoader = new GLTFLoader();
  gltfLoader.load(props.obiekt3d, (gltf) => {
    console.log(gltf.scene);
    scene.add(gltf.scene);
    gltf.scene.position.set(0, 0, 0);
    gltf.scene.rotation.set(0, -1, 0);
  });
  
  camera.position.z = 10;
  camera.position.x = 1;
  camera.position.y = 1;
  renderer.render(scene, camera);
  
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.minPolarAngle = -Math.PI;
  controls.maxPolarAngle = Math.PI;
  controls.minAzimuthAngle = -Math.PI / 4.1;
  controls.maxAzimuthAngle = Math.PI / 2.8;
  controls.minDistance = 5;
  controls.maxDistance = 28;
  
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
  
  onUnmounted(() => {
    document.body.removeChild(document.body.lastElementChild);
    console.log("wymontowyje");
  });
  </script>
  <style></style>
  