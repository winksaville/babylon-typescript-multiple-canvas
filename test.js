"use strict";
// Test Multiple Canvas
console.log("ww=" + window.innerWidth + " wh=" + window.innerHeight);
var Cube = (function () {
    function Cube(canvas, options) {
        this._rotationX = options && options.rotationX || 0.0;
        this._rotationY = options && options.rotationY || 0.0;
        this._canvas = document.getElementById(canvas);
        this._engine = new BABYLON.Engine(this._canvas, true);
        this._scene = new BABYLON.Scene(this._engine);
        new BABYLON.ArcRotateCamera("camera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), this._scene);
        this._scene.activeCamera.attachControl(this._canvas);
        var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 0, 0), this._scene);
        light.diffuse = new BABYLON.Color3(1, 0, 0);
        light.specular = new BABYLON.Color3(1, 1, 1);
        var colors = new BABYLON.Color4(1, 0, 0, 0.2);
        this._box = BABYLON.MeshBuilder.CreateBox("box", { size: 3, faceColors: [colors] }, this._scene);
    }
    Cube.prototype.animate = function () {
        var _this = this;
        this._engine.runRenderLoop(function () {
            _this._box.rotation.x += _this._rotationX;
            _this._box.rotation.y += _this._rotationY;
            _this._scene.render();
        });
    };
    return Cube;
}());
var cube1 = new Cube("canvas1");
cube1.animate();
var cube2 = new Cube("canvas2", { rotationX: 0.005, rotationY: 0.01 });
cube2.animate();
console.log("done");
