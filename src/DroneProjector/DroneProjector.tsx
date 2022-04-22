import React from "react";
import Visualizer from "../AudioVisualizer/Visualizer";
import Model from "../RandomComponents/Model";
import LightRayGroup from "../RandomComponents/LightRayGroup";

const { songs } = require("../assets/index");

const DroneProjector = () => {
  return (
    <>
      <Model
        // @ts-ignore
        name="/k07.glb"
        position={[10, 10, -18]}
        scale={[0.1, 0.1, 0.1]}
      />
      <group position={[10, 10, -39]}>
        <LightRayGroup distance={27} />
      </group>
      <group position={[2, -1.5, -3]}>
        <Visualizer url={songs[0]} />
      </group>
    </>
  );
};

export default DroneProjector;
