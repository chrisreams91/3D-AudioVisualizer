import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Visualizer from "./AudioVisualizer/Visualizer";
//@ts-ignore
import { FPSControls } from "react-three-fpscontrols";
import SkyBox from "./RandomComponents/Skybox";
import Model from "./RandomComponents/Model";
import DroneProjector from "./DroneProjector/DroneProjector";
const { songs } = require("./assets/index");

const App = () => {
  return (
    <Canvas>
      <pointLight intensity={0.5} />
      <ambientLight intensity={2} />
      <spotLight castShadow intensity={0.2} />
      <FPSControls
        camProps={{
          makeDefault: true,
          fov: 100,
          position: [0, 20, -40],
        }}
        orbitProps={{
          target: [0, 0, 0],
        }}
        enableKeyboard
      />
      <Suspense fallback={null}>
        <DroneProjector />
      </Suspense>
      <SkyBox />
    </Canvas>
  );
};

export default App;
