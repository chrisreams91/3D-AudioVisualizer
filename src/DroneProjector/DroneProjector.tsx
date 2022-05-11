import React from "react";
import Visualizer from "../AudioVisualizer/Visualizer";
import LightRayGroup from "./LightRayGroup";
import { useControls } from "leva";

interface Props {
  url: string;
}

const DroneProjector = ({ url }: Props) => {
  const { color } = useControls({
    color: "#ffffff",
  });

  return (
    <>
      <group position={[10, 17, -45]}>
        <LightRayGroup distance={2350} color={color} />
      </group>
      <group position={[3, -2, -3]}>
        <Visualizer url={url} color={color} />
      </group>
    </>
  );
};

export default DroneProjector;
