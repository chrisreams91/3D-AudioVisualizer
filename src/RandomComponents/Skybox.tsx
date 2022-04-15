import { useThree } from "@react-three/fiber";

import { CubeTextureLoader } from "three";

const { SkyBoxImages } = require("../assets");

const SkyBox = () => {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  console.log(...SkyBoxImages);
  const texture = loader.load([...SkyBoxImages]);

  scene.background = texture;
  return null;
};

export default SkyBox;
