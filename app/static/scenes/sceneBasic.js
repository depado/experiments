function createSceneTuto(engine) {
    //Creation of the scene 
    var scene = new BABYLON.Scene(engine);

    //Adding the light to the scene
    var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 100, 100), scene);

    //Adding an Arc Rotate Camera
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, new BABYLON.Vector3.Zero(), scene);
    var box = BABYLON.Mesh.CreateBox("Box", 6.0, scene);
    var sphere = BABYLON.Mesh.CreateSphere("Sphere", 10.0, 3.0, scene);

    // box.position = new BABYLON.Vector3(-10,0,0);
    sphere.material = new BABYLON.StandardMaterial("texture1", scene);
    sphere.material.wireframe = true;
    box.material =  new BABYLON.StandardMaterial("texture1", scene);
    box.material.alpha = 0.5;
    
    return scene;
}