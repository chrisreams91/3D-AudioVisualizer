import { useCubeTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

interface Props {
  images: string[];
}

const SkyBox = ({ images }: Props) => {
  const { scene } = useThree();
  const texture = useCubeTexture([...images], {
    path: ``,
  });

  scene.background = texture;
  return null;
};

export default SkyBox;
