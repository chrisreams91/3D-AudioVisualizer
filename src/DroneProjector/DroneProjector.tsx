import React from "react";
import Visualizer from "../AudioVisualizer/Visualizer";
import LightRayGroup from "./LightRayGroup";
import { useControls } from "leva";
import { suspend } from "suspend-react";
import { fetchDefaultSong } from "../AudioVisualizer/Util";

interface Props {
  setFpsControlsEnabled: any;
}

const DroneProjector = ({ setFpsControlsEnabled }: Props) => {
  const defaultSong = suspend(() => fetchDefaultSong(), []);

  const { url } = useControls({
    url: {
      value: defaultSong,
      onEditStart: () => setFpsControlsEnabled(false),
      onEditEnd: () => setFpsControlsEnabled(true),
    },
  });

  const { color } = useControls({
    color: "#3fba87",
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
