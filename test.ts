// Test Multiple Canvas
console.log("ww=" + window.innerWidth + " wh=" + window.innerHeight);

class Cube {
    private _canvas: HTMLCanvasElement;
    private _scene: BABYLON.Scene;
    private _box: BABYLON.Mesh;
    private _engine: BABYLON.Engine;
    private _rotationX: number;
    private _rotationY: number;

  constructor(canvas: string, options?: {rotationX?: number; rotationY?: number} ) {
    this._rotationX = options && options.rotationX || 0.0;
    this._rotationY = options && options.rotationY || 0.0;
    this._canvas = <HTMLCanvasElement>document.getElementById(canvas);
    this._engine = new BABYLON.Engine(this._canvas, true) ;
    this._scene = new BABYLON.Scene(this._engine);
    new BABYLON.ArcRotateCamera("camera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), this._scene);

    this._scene.activeCamera.attachControl(this._canvas);

    let light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 0, 0), this._scene);
    light.diffuse = new BABYLON.Color3(1, 0, 0);
    light.specular = new BABYLON.Color3(1, 1, 1);

    let colors = new BABYLON.Color4(1, 0, 0, 0.2);
    this._box = BABYLON.MeshBuilder.CreateBox("box", {size: 3, faceColors: [colors]}, this._scene);
  }

  animate() : void {
    this._engine.runRenderLoop(() => {
        this._box.rotation.x += this._rotationX;
        this._box.rotation.y += this._rotationY;
        this._scene.render();
    });
  }
}

let cube1: Cube = new Cube("canvas1");
cube1.animate();

let cube2: Cube = new Cube("canvas2", { rotationX: 0.005, rotationY: 0.01 });
cube2.animate();

console.log("done");

