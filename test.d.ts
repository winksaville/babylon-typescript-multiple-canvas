declare class Cube {
    private _canvas;
    private _scene;
    private _box;
    private _engine;
    private _rotationX;
    private _rotationY;
    constructor(canvas: string, options?: {
        rotationX?: number;
        rotationY?: number;
    });
    animate(): void;
}
declare let cube1: Cube;
declare let cube2: Cube;
