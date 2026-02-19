import * as THREE from 'three';
import { trait } from 'koota';

export const MeshRef  = trait(() => new THREE.Mesh());
export const Rotation = trait({ x: 0, y: 0, z: 0 });
