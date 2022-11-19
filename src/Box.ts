import * as BABYLON from '@babylonjs/core'

type props = {
  x?: number
  y?: number
  scene: BABYLON.Scene
}
export default class Box {
  box: BABYLON.Mesh
  boxMaterial: BABYLON.StandardMaterial
  scene: BABYLON.Scene
  sourceBox: BABYLON.AbstractMesh
  constructor({x, y, scene}: props) {
    this.scene = scene
    this.box = BABYLON.MeshBuilder.CreateBox('box', {}) 
    this.boxMaterial = new BABYLON.StandardMaterial('material', scene)
    this.boxMaterial.diffuseColor = BABYLON.Color3.Random()
    this.box.material = this.boxMaterial
    if (x) this.box.position.x = x
    if (y) this.box.position.y = y
    this.actions()
  }

  private actions() {
    this.box.actionManager = new BABYLON.ActionManager(this.scene)
    this.box.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      evt => {
        this.sourceBox = evt.meshUnderPointer
        this.sourceBox.position.x += .1
        this.sourceBox.position.y += .1
        this.boxMaterial.diffuseColor = BABYLON.Color3.Random()
      }
    ))
  }
}