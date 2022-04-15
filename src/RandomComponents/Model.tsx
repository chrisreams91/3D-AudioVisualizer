import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface Props {
  keyPressed: "FORWARD" | "BACKWARD" | "LEFT" | "RIGHT" | "";
  position: number[];
}

const Model = ({ keyPressed, position }: Props) => {
  const { scene } = useLoader(GLTFLoader, "/planet1.glb");

  // useEffect(() => {
  //   const x = async () => {
  //     while (true) {
  //       scene.rotateX(0.001);
  //       await new Promise((r) => setTimeout(r, 70));
  //     }
  //   };
  //   x();
  // }, []);

  // const handleUserKeyPress = (event: any) => {
  //   switch (event.code) {
  //     case "KeyD":
  //     case "ArrowRight": {
  //       scene.rotateY(0.01);

  //       console.log(event);
  //       break;
  //     }
  //     case "KeyA":
  //     case "ArrowLeft": {
  //       scene.rotateY(-0.01);
  //       break;
  //     }
  //     case "KeyW":
  //     case "ArrowUp": {
  //       scene.rotateX(-0.05);
  //       break;
  //     }
  //     case "KeyS":
  //     case "ArrowDown": {
  //       scene.rotateX(0.01);
  //       break;
  //     }
  //   }
  // };

  useEffect(() => {
    // window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      // window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, []);
  return <primitive object={scene} />;
};

export default Model;
