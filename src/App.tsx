import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
//@ts-ignore
import { FPSControls } from "react-three-fpscontrols";
import SkyBox from "./RandomComponents/Skybox";
import DroneProjector from "./DroneProjector/DroneProjector";
import * as dat from "dat.gui";
const { SkyBoxImages } = require("../src/assets");

const defaultURL = "https://www.youtube.com/watch?v=qKdLT8V2WJA";
const defaultColor = "#441860";
const defaultSkybox = "interstellar";

const gui = new dat.GUI();
const parameters = {
  "Youtube URL": defaultURL,
  color: defaultColor,
  skybox: defaultSkybox,
};
const controlsText = gui.add(parameters, "Youtube URL");
const controlsColor = gui.addColor(parameters, "color");
const controlsBackground = gui.add(parameters, "skybox", [
  "interstellar",
  "blueSpace",
  "redSpace",
]);

const App = () => {
  const [url, setURL] = useState(defaultURL);
  const [color, setColor] = useState(defaultColor);
  const [skybox, setSkybox] = useState(defaultSkybox);

  controlsText.onFinishChange((value) => {
    setURL(value);
  });
  controlsColor.onFinishChange((value) => {
    setColor(value);
  });
  controlsBackground.onFinishChange((value) => {
    setSkybox(value);
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
        <SkyBox images={SkyBoxImages[skybox]} />
      </Canvas>
    </>
  );
};

export default App;
