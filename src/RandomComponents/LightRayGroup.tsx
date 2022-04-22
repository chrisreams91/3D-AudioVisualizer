import React, { useEffect } from "react";
import { SpotLight } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Stats, useDepthBuffer } from "@react-three/drei";

interface Props {
  rayCount?: number;
  distance: number;
}

const randomNumInRange = (min: number, range: number) => {
  const max = min + range;
  const result = Math.random() * (max - min) + min;
  return result;
};

const LightRayGroup = ({ rayCount = 5, distance }: Props) => {
  const depthBuffer = useDepthBuffer();

  let light1: any;
  let light2: any;
  let light3: any;
  let light4: any;
  let light5: any;

  let obj: any;

  let timeElapsed = 0;
  const heightVariance = 2;
  const widthVariance = 2;

  const startingPoint = 0;
  const distanceBetween = 5;

  const light1x = startingPoint;
  const light2x = light1x + distanceBetween;
  const light3x = light2x + distanceBetween;
  const light4x = light3x + distanceBetween;
  const light5x = light4x + distanceBetween;

  useFrame((state) => {
    if (state.clock.elapsedTime - timeElapsed > 0.1) {
      light1.target.position.x = randomNumInRange(light1x + 1, widthVariance);
      light1.target.position.y = randomNumInRange(1, heightVariance);

      light2.target.position.x = randomNumInRange(light2x, widthVariance);
      light2.target.position.y = randomNumInRange(1, heightVariance);

      light3.target.position.x = randomNumInRange(light3x, widthVariance);
      light3.target.position.y = randomNumInRange(1, heightVariance);

      light4.target.position.x = randomNumInRange(light4x, widthVariance);
      light4.target.position.y = randomNumInRange(1, heightVariance);

      light5.target.position.x = randomNumInRange(light5x - 1, widthVariance);
      light5.target.position.y = randomNumInRange(1, heightVariance);

      timeElapsed = state.clock.elapsedTime;
    }
  });

  useEffect(() => {
    if (light1) {
      light1.target.position.x = light1x;
    }
    if (light2) {
      light2.target.position.x = light2x;
    }
    if (light3) {
      light3.target.position.x = light3x;
    }
    if (light4) {
      light4.target.position.x = light4x;
    }
    if (light5) {
      light5.target.position.x = light5x;
    }
  }, [
    // yuck
    obj,
    light1,
    light1x,
    light2,
    light2x,
    light3,
    light3x,
    light4,
    light4x,
    light5,
    light5x,
  ]);

  return (
    <group position={[0, 0, 20]}>
      <Stats />
      {Array.from({ length: rayCount }, (_, index) => (
        <SpotLight
          // @ts-ignore
          //   shadow={true}
          //   power={0}
          key={index}
          target={obj}
          depthBuffer={depthBuffer}
          ref={(ref) => {
            if (index === 0) {
              light1 = ref;
            }
            if (index === 1) {
              light2 = ref;
            }
            if (index === 2) {
              light3 = ref;
            }
            if (index === 3) {
              light4 = ref;
            }
            if (index === 4) {
              light5 = ref;
            }
          }}
          // penumbra={0}
          distance={
            index === 0 || index === 4
              ? distance + 2
              : index === 2
              ? distance - 0.5
              : distance
          }
          attenuation={30}
          intensity={0.5}
          angle={0.1}
          color="#521566"
        />
      ))}
    </group>
  );
};

export default LightRayGroup;
