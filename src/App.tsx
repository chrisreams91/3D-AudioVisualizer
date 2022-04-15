import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Floor from "./RandomComponents/Floor";
import Visualizer from "./AudioVisualizer/Visualizer";
//@ts-ignore
import { FPSControls } from "react-three-fpscontrols";

import SkyBox from "./RandomComponents/Skybox";
const { songs } = require("./assets/index");

const App = () => {
  return (
    <Canvas>
      <pointLight intensity={0.5} />
      <ambientLight intensity={2} />
      <spotLight
        castShadow
        intensity={0.2}
        angle={Math.PI / 7}
        position={[150, 150, 250]}
        penumbra={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <FPSControls
        camProps={{
          makeDefault: true,
          fov: 100,
          position: [0, 0, 8],
        }}
        orbitProps={{
          target: [0, 0, 0],
        }}
        enableKeyboard
      />
      <Suspense fallback={null}>
        <Visualizer url={songs[0]} />
      </Suspense>
      <SkyBox />
      <Floor />
    </Canvas>
  );
};

export default App;
