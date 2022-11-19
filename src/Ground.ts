
import * as BABYLON from '@babylonjs/core'
export default class Ground {
  public plane: BABYLON.GroundMesh
  constructor() {
    this.plane = BABYLON.MeshBuilder.CreateGround('ground', {
      width: 4,
      height: 4,
    })
  }
}