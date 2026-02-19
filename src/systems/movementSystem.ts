import type { Entity } from 'koota';

import { world } from '../traits/world';
import * as MeshTraits from '../traits/mesh';
import * as GlobalTraits from '../traits/global';

export function movementSystem() {
  world.onChange(GlobalTraits.Input, () => {
    const handleMovement = ([rotation]: [typeof MeshTraits.Rotation['schema']], e: Entity) => {
      const { x, y } = world.get(GlobalTraits.Input)!;

      if (Boolean(e.targetFor(GlobalTraits.ChildOf))) {
        // Rotate the torus horizontally
        rotation.x = y * Math.PI;
      } else {
        // Rotate the cube vertically
        rotation.y = x * Math.PI;
      }
    };

    world
      .query(MeshTraits.MeshRef, MeshTraits.Rotation)
      .select(MeshTraits.Rotation)
      .updateEach(handleMovement);
  });
}