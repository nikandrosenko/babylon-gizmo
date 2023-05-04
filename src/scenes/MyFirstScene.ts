import {
  Engine,
  Scene,
  FreeCamera,
  Vector3,
  MeshBuilder,
  StandardMaterial,
  Color3,
  HemisphericLight,
  GizmoManager,
} from "@babylonjs/core";
const createScene = (canvas: HTMLCanvasElement) => {
  const engine = new Engine(canvas);
  const scene = new Scene(engine);
  const gizmoManager = new GizmoManager(scene);

  const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);

  new HemisphericLight("light", Vector3.Up(), scene);

  const material = new StandardMaterial("material", scene);
  material.diffuseColor = Color3.Gray();

  const sphere = MeshBuilder.CreateSphere(
    "sphere",
    { segments: 32, diameter: 2 },
    scene
  );
  sphere.material = material;
  sphere.position.y = 1;

  const ground = MeshBuilder.CreateGround(
    "ground",
    { width: 10, height: 10 },
    scene
  );
  ground.material = material;

  gizmoManager.attachableMeshes = [sphere];

  engine.runRenderLoop(() => {
    scene.render();
  });
};

export { createScene };
