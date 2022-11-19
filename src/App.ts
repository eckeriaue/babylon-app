import "@babylonjs/core/Debug/debugLayer"
import "@babylonjs/inspector"
import "@babylonjs/loaders/glTF"
import * as BABYLON from '@babylonjs/core'
import { Color3 } from '@babylonjs/core'
export default class App {
  private canvas: HTMLCanvasElement
  private engine: BABYLON.Engine
  private sceneToRender: BABYLON.Scene
  private scene: BABYLON.Scene
  private camera: BABYLON.ArcRotateCamera
  private light: BABYLON.HemisphericLight
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
    this.engine = new BABYLON.Engine(this.canvas, true)
    this.sceneToRender = this.create()
    this.box()
    this.createAamera()
    this.createLight()
    this.engine.runRenderLoop(() => {
      this.sceneToRender.render()
    })

  }

  private create() {
    this.scene = new BABYLON.Scene(this.engine)
    this.scene.clearColor = BABYLON.Color3.Black
    return this.scene
  }

  private box() {
    const box = BABYLON.MeshBuilder.CreateBox('box', {})
    box.position.x = .5
    box.position.y = 1
  }

  private createAamera() {
    const alpha = Math.PI/4
    const beta = Math.PI/3
    const radius = 8
    const target = new BABYLON.Vector3(0, 0, 0)
    this.camera = new BABYLON.ArcRotateCamera("Camera", alpha, beta, radius, target, this.scene)
    this.camera.attachControl(this.canvas, true)
  }

  private createLight() {
    this.light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(1,1,0), '')
  }
}