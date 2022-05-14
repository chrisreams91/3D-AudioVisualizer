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

const minHeight = 0.2;
const width = 0.4;
const depth = 0.2;
const spectrumWidth = 45;
const spectrumValueOffset = 75;

const Visualizer = ({ url, color }: VisualizerProps) => {
  const ref = useRef();
  const { gain, context, update, data } = suspend(
    () => createAudio(url),
    [url]
  );

  useEffect(() => {
    gain.connect(context.destination);
    return () => gain.disconnect();
  }, [gain, context]);

  useFrame((_state) => {
    update();

    const spliced = data.slice(0, spectrumWidth);
    if (ref.current) {
      for (let i = 0; i < spliced.length; i++) {
        //@ts-ignore
        const children = ref.current.children[0].children;
        const child: THREE.Mesh = children[i];

        const spectrumValue = data[i] / spectrumValueOffset;
        const newValue = Math.max(spectrumValue, minHeight);

        const newGeom = new THREE.BoxGeometry(0.4, newValue, 0.2);

        child.geometry.dispose();
        child.geometry = newGeom;
      }
      //@ts-ignore
      ref.current.instanceMatrix.needsUpdate = true;
    }
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
