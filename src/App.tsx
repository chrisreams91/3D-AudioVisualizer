import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
//@ts-ignore
import { FPSControls } from "react-three-fpscontrols";
import SkyBox from "./RandomComponents/Skybox";
import DroneProjector from "./DroneProjector/DroneProjector";

import * as dat from "dat.gui";

const defaultValue = "https://www.youtube.com/watch?v=qKdLT8V2WJA";

const gui = new dat.GUI();
const parameters = { url: "Enter a youtube URL" };
var myText = gui.add(parameters, "url");

const App = () => {
  const [url, setURL] = useState(defaultValue);

  myText.onFinishChange((value) => {
    console.log(value);
    setURL(value);
  });

  return (
    <>
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
          <DroneProjector url={url} />
        </Suspense>
        <SkyBox />
      </Canvas>
    </>
  );
};

export default App;
