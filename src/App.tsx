import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
//@ts-ignore
import { FPSControls } from "react-three-fpscontrols";
import SkyBox from "./RandomComponents/Skybox";
import DroneProjector from "./DroneProjector/DroneProjector";
import * as dat from "dat.gui";
import Model from "./RandomComponents/Model";
const { SkyBoxImages } = require("../src/assets");

const defaultURL = "https://www.youtube.com/watch?v=qKdLT8V2WJA";
const defaultColor = "#35c36e";
const defaultSkybox = "blueSpace";

const gui = new dat.GUI();
const parameters = {
  "Youtube URL": defaultURL,
  color: defaultColor,
  skybox: defaultSkybox,
};
const controlsText = gui.add(parameters, "Youtube URL");
const controlsColor = gui.addColor(parameters, "color");
const controlsBackground = gui.add(parameters, "skybox", [
  "blueSpace",
  "interstellar",
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
        <DroneProjector url={url} color={color} />
      </Suspense>
      <SkyBox images={SkyBoxImages[skybox]} />
    </Canvas>
  );
};

export default App;
