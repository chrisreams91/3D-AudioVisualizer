import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
//@ts-ignore
import { FPSControls } from "react-three-fpscontrols";
import SkyBox from "./RandomComponents/Skybox";
import DroneProjector from "./DroneProjector/DroneProjector";

import * as dat from "dat.gui";

const defaultText = "https://www.youtube.com/watch?v=qKdLT8V2WJA";
const defaultColor = "#441860";
const gui = new dat.GUI();
const parameters = { url: "Enter a youtube URL", color: defaultColor };
const controlsText = gui.add(parameters, "url");
const controlsColor = gui.addColor(parameters, "color");

const App = () => {
  const [url, setURL] = useState(defaultText);
  const [color, setColor] = useState(defaultColor);

  controlsText.onFinishChange((value) => {
    console.log(value);
    setURL(value);
  });

  controlsColor.onFinishChange((value) => {
    console.log(value);
    setColor(value);
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
          <DroneProjector url={url} color={color} />
        </Suspense>
        <SkyBox />
      </Canvas>
    </>
  );
};

export default App;
