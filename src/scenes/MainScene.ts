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
  AbstractMesh,
} from "@babylonjs/core";
export class MainScene {
  scene: Scene;
  engine: Engine;
  ground!: AbstractMesh;
  sphere!: AbstractMesh;
  camera!: FreeCamera;

  constructor(private canvas: HTMLCanvasElement) {
    this.engine = new Engine(this.canvas, true);
    this.scene = this.CreateScene();
    this.CreateCamera();
    this.CreateMeshes();
    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  CreateScene(): Scene {
    const scene = new Scene(this.engine);

    new HemisphericLight("light", Vector3.Up(), this.scene);

    return scene;
  }
  CreateCamera(): void {
    this.camera = new FreeCamera("camera", new Vector3(0, 5, -10), this.scene);
    this.camera.setTarget(Vector3.Zero());
    this.camera.attachControl(this.canvas, true);
  }
  CreateMeshes(): void {
    this.ground = MeshBuilder.CreateGround(
      "ground",
      { width: 10, height: 10 },
      this.scene
    );
    const groundMaterial = new StandardMaterial("ground", this.scene);
    groundMaterial.diffuseColor = Color3.Gray();
    groundMaterial.specularColor = Color3.Black();
    this.ground.material = groundMaterial;

    this.sphere = MeshBuilder.CreateSphere(
      "sphere",
      { segments: 32, diameter: 2 },
      this.scene
    );
    const sphereMaterial = new StandardMaterial("ground", this.scene);
    sphereMaterial.diffuseColor = new Color3(0.4, 0.4, 0.4);
    sphereMaterial.specularColor = new Color3(0.4, 0.4, 0.4);
    sphereMaterial.emissiveColor = Color3.Black();
    this.sphere.material = sphereMaterial;
    this.sphere.position = new Vector3(0, 1, 0);

    this.Actions();
  }
  Actions(): void {
    this.sphere.actionManager = new ActionManager(this.scene);

    this.sphere.actionManager
      .registerAction(
        new SetValueAction(
          ActionManager.OnLeftPickTrigger,
          this.sphere.material,
          "emissiveColor",
          Color3.Gray()
        )
      )
      ?.then(
        new SetValueAction(
          ActionManager.OnLeftPickTrigger,
          this.sphere.material,
          "emissiveColor",
          Color3.Black()
        )
      );
  }
}
