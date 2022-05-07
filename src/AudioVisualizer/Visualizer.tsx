import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { suspend } from "suspend-react";
import { createAudio } from "./Util";
import Bar from "./Bar";

interface VisualizerProps {
  url: string;
  color: string;
}

const Visualizer = ({ url, color }: VisualizerProps) => {
  const { gain, context, update, data } = suspend(
    () => createAudio(url),
    [url]
  );

  const minHeight = 0.2;
  const width = 0.4;
  const depth = 0.2;

  // tinker
  const spectrumWidth = 45;
  const spectrumValueOffset = 75;
  const decay = 0;

  const ref = useRef();
  useEffect(() => {
    // Connect the gain node, which plays the audio
    gain && gain.connect(context.destination);
    return () => gain && gain.disconnect();
  }, [gain, context]);

  useFrame((state) => {
    update();

    const spliced = data.slice(0, spectrumWidth);

    for (let i = 0; i < spliced.length; i++) {
      //@ts-ignore
      const children = ref.current.children[0].children;
      const child: THREE.Mesh = children[i];

      //@ts-ignore
      const previousValue = child.geometry.parameters.height;
      const spectrumValue = data[i] / spectrumValueOffset;
      const newValue = Math.max(spectrumValue, minHeight);

      let newGeom;
      if (previousValue > newValue) {
        newGeom = new THREE.BoxGeometry(
          0.4,
          Math.max(newValue - decay, minHeight),
          0.2
        );
      } else {
        newGeom = new THREE.BoxGeometry(0.4, newValue, 0.2);
      }

      child.geometry.dispose();
      child.geometry = newGeom;
    }
    //@ts-ignore
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={ref}
      args={[undefined, undefined, spectrumWidth]}
      name="instanced mesh"
      position={[-4, 2, -2]}
    >
      <mesh>
        {Array.from({ length: spectrumWidth }, (_, index) => (
          <Bar
            key={index}
            position={index}
            color={color}
            width={width}
            height={minHeight}
            depth={depth}
          />
        ))}
      </mesh>
    </instancedMesh>
  );
};

export default Visualizer;
