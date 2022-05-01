import React from "react";
import Visualizer from "../AudioVisualizer/Visualizer";
import Model from "../RandomComponents/Model";
import Console from "./Console";
import LightRayGroup from "./LightRayGroup";

const { songs } = require("../assets/index");

const min = Math.ceil(0);
const max = Math.floor(1);
const random = Math.floor(Math.random() * (max - min + 1)) + min;

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
      <group position={[3, -2, -3]}>
        <Visualizer url={songs[random]} />
      </group>
      <Console />
    </>
  );
};

export default DroneProjector;
