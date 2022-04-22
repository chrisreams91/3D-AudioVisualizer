import React from "react";
import Visualizer from "../AudioVisualizer/Visualizer";
import Model from "../RandomComponents/Model";
import LightRayGroup from "../RandomComponents/LightRayGroup";

const { songs } = require("../assets/index");

const DroneProjector = () => {
  return (
    <>
      <Model
        name="/k07.glb"
        position={[10, 10.9, -20.5]}
        scale={[0.1, 0.1, 0.1]}
      />
      <group position={[10, 10, -39]}>
        <LightRayGroup distance={27} />
      </group>
      <group position={[2, -2, -3]}>
        <Visualizer url={songs[0]} />
      </group>
    </>
  );
};

export default DroneProjector;
