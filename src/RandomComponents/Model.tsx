import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

interface Props {
  name: string;
  scale: number[];
  position?: number[];
}

const Model = ({ name, scale, position = [0, 0, 0] }: Props) => {
  const { scene, animations } = useLoader(GLTFLoader, name);
  let mixer = new THREE.AnimationMixer(scene);
  animations.forEach((clip) => {
    const action = mixer.clipAction(clip);
    action.play();
  });

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return <primitive object={scene} scale={scale} position={[10, 10, -30]} />;
};

export default Model;
