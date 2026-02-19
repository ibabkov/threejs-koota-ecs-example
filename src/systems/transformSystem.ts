import { world } from '../traits/world';
import * as MeshTraits from '../traits/mesh';

export function transformSystem() {
  world.query(MeshTraits.MeshRef, MeshTraits.Rotation).updateEach(([mesh, rotation]) => {
    mesh.rotation.set(rotation.x, rotation.y, rotation.z);
  });
}
