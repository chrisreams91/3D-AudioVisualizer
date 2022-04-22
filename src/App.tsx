import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
//@ts-ignore
import { FPSControls } from "react-three-fpscontrols";
import SkyBox from "./RandomComponents/Skybox";
import DroneProjector from "./DroneProjector/DroneProjector";

const App = () => {
  return (
    <Canvas>
      <ambientLight intensity={2.5} />
      <FPSControls
        camProps={{
          makeDefault: true,
          fov: 100,
          position: [0, 10, 20],
        }}
        orbitProps={{
          target: [5, 5, 0],
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
