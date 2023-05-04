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
  ActionManager,
  SetValueAction,
} from "@babylonjs/core";
const createScene = (canvas: HTMLCanvasElement) => {
  const engine = new Engine(canvas);
  const scene = new Scene(engine);
  const gizmoManager = new GizmoManager(scene);

  const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);

  new HemisphericLight("light", Vector3.Up(), scene);

  const ground = MeshBuilder.CreateGround(
    "ground",
    { width: 10, height: 10 },
    scene
  );
  const groundMaterial = new StandardMaterial("ground", scene);
  groundMaterial.diffuseColor = Color3.Gray();
  groundMaterial.specularColor = Color3.Black();
  ground.material = groundMaterial;
  ground.actionManager = new ActionManager(scene);

  const sphere = MeshBuilder.CreateSphere(
    "sphere",
    { segments: 32, diameter: 2 },
    scene
  );
  const sphereMaterial = new StandardMaterial("ground", scene);
  sphereMaterial.diffuseColor = new Color3(0.4, 0.4, 0.4);
  sphereMaterial.specularColor = new Color3(0.4, 0.4, 0.4);
  sphereMaterial.emissiveColor = Color3.Black();
  sphere.material = sphereMaterial;
  sphere.position.y = 1;
  sphere.actionManager = new ActionManager(scene);
  sphere.actionManager
    .registerAction(
      new SetValueAction(
        ActionManager.OnLeftPickTrigger,
        sphere.material,
        "emissiveColor",
        Color3.Gray()
      )
    )
    ?.then(
      new SetValueAction(
        ActionManager.OnLeftPickTrigger,
        sphere.material,
        "emissiveColor",
        sphereMaterial.emissiveColor
      )
    );

  gizmoManager.attachableMeshes = [sphere];

  engine.runRenderLoop(() => {
    scene.render();
  });
};

export { createScene };
