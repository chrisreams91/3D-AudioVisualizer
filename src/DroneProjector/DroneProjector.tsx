import React, { useEffect } from "react";
import Visualizer from "../AudioVisualizer/Visualizer";
import Model from "../RandomComponents/Model";

const { songs } = require("../assets/index");

interface Props {}

const DroneProjector = () => {
  return (
    <>
      <Visualizer url={songs[0]} />
      <Model name="/k07.glb" scale={[0.1, 0.1, 0.1]} />
    </>
  );
};

export default DroneProjector;
