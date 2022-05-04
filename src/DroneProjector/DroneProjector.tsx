import React from "react";
import Visualizer from "../AudioVisualizer/Visualizer";
import Model from "../RandomComponents/Model";
import LightRayGroup from "./LightRayGroup";

interface Props {
  url: string;
  color: string;
}
const DroneProjector = ({ url, color }: Props) => {
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
        <Visualizer url={url} />
      </group>
    </>
  );
};

export default DroneProjector;
