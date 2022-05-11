import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
//@ts-ignore
import { FPSControls } from "react-three-fpscontrols";
import SkyBox from "./RandomComponents/Skybox";
import DroneProjector from "./DroneProjector/DroneProjector";
import Model from "./RandomComponents/Model";
import { useControls } from "leva";

const { SkyBoxImages } = require("../src/assets");
const defaultURL = "https://www.youtube.com/watch?v=qKdLT8V2WJA";
const defaultSkybox = "blueSpace";

const App = () => {
  const { skybox } = useControls({
    skybox: {
      value: defaultSkybox,
      options: ["blueSpace", "interstellar", "redSpace"],
    },
  });

  const { url } = useControls({
    url: {
      value: "test",
      onChange: (v) => {
        console.log(v);
      },
      transient: false,
    },
  });

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
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
        <Model
          name="/k07.glb"
          position={[10, 17.9, -26.8]}
          scale={[0.1, 0.1, 0.1]}
        />
      </Suspense>
      <Suspense fallback={null}>
        <DroneProjector url={url} />
      </Suspense>
      <SkyBox images={SkyBoxImages[skybox]} />
    </Canvas>
  );
};

export default App;
