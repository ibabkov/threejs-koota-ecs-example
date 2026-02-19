import * as THREE from 'three';

import { world } from '../traits/world';
import * as MeshTraits from '../traits/mesh';
import * as GlobalTraits from '../traits/global';

export function spawnSystem(scene: THREE.Scene) {
  // Create cube
  const cubeMesh = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 1.5, 1.5),
    new THREE.MeshBasicMaterial({ color: 0x44aaff, wireframe: true })
  );
  cubeMesh.rotation.set(0, THREE.MathUtils.degToRad(45), 0);
  const cubeEntity = world.spawn(MeshTraits.MeshRef(cubeMesh), MeshTraits.Rotation({ x: cubeMesh.rotation.x, y: cubeMesh.rotation.y, z: cubeMesh.rotation.z }));

  // Create torus
  const torusMesh = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.3, 0.08, 128, 16),
    new THREE.MeshStandardMaterial({ color: 0x4e8ab3, metalness: 1, roughness: 0.1 })
  );
  world.spawn(MeshTraits.MeshRef(torusMesh), MeshTraits.Rotation(), GlobalTraits.ChildOf(cubeEntity));

  cubeMesh.add(torusMesh);
  scene.add(cubeMesh);
}