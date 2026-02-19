import type * as THREE from 'three';

import { world } from '../traits/world';
import * as GlobalTraits from '../traits/global';

export function inputSystem(renderer: THREE.WebGLRenderer) {
  const calculatePointer = (e: PointerEvent) => ({
    x: (e.clientX / window.innerWidth) * 2 - 1,
    y: -(e.clientY / window.innerHeight) * 2 + 1,
  });

  const handlePointer = (e: PointerEvent) => {
    if (!e.isPrimary) return;

    const { x, y } = calculatePointer(e);

    world.set(GlobalTraits.Input, { x, y });
  };

  world.add(GlobalTraits.Input);

  renderer.domElement.addEventListener('pointermove', handlePointer);
}
