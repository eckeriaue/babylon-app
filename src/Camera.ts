import * as BABYLON from '@babylonjs/core'

export default class Camera {
  camera: BABYLON.ArcRotateCamera
  radius: number
  scene: BABYLON.Scene
  canvas: HTMLCanvasElement
  constructor({
    canvas, scene, radius
  }) {
    const alpha = Math.PI/4
    const beta = Math.PI/3
    this.radius = radius
    this.scene = scene
    this.canvas = canvas
    const target = new BABYLON.Vector3(0, 0, 0)
    this.camera = new BABYLON.ArcRotateCamera("Camera", alpha, beta, radius, target, this.scene)
    this.camera.attachControl(this.canvas, true)
  }
}