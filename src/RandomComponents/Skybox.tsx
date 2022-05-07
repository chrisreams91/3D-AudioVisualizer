import { useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";

interface Props {
  images: string[];
}

const SkyBox = ({ images }: Props) => {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  const texture = loader.load([...images]);

  scene.background = texture;
  return null;
};

export default SkyBox;
