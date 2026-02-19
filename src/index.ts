import * as THREE from 'three';
import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader';

import { inputSystem } from './systems/inputSystem';
import { spawnSystem } from './systems/spawnSystem';
import { movementSystem } from './systems/movementSystem';
import { transformSystem } from './systems/transformSystem';
import { createBenchmark } from './benchmark';
import './styles.css';

function createScene() {
  // 1. Setup Renderer, Scene, and Camera
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 10);
  camera.position.z = 5;

  // 2. Setup Lights
  const ambient = new THREE.AmbientLight(0xffffff, 2);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
  directionalLight.position.set(2, 2, 2);
  scene.add(ambient);
  scene.add(directionalLight);

  // 3. Setup the Environment
  const envUrl = new URL('./assets/env_1k.hdr', import.meta.url);
  new HDRLoader().load(envUrl.toString(), (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;
  });
  scene.background = new THREE.Color(0x0d1117);

  document.querySelector('#app')!.appendChild(renderer.domElement);

  return { scene, camera, renderer };
}

function createApp() {
  const { scene, camera, renderer } = createScene();
  const benchmark = createBenchmark();

  inputSystem(renderer);
  spawnSystem(scene);
  movementSystem();

  function update() {
    transformSystem();
    renderer.render(scene, camera);
    benchmark.update();

    requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

createApp();