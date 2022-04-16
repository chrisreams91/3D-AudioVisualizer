import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const { scene } = useLoader(GLTFLoader, "/shoe.glb");

  return <primitive object={scene} />;
};

export default Model;
