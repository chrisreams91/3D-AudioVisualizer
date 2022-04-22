import React, { useEffect } from "react";
import { SpotLight } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Stats } from "@react-three/drei";

interface Props {
  rayCount?: number;
  distance: number;
}

const LightRayGroup = ({ rayCount = 4, distance }: Props) => {
  let light1: any;
  let light2: any;
  let light3: any;
  let light4: any;
  let obj: any;

  let timeElapsed = 0;

  useFrame((state) => {
    if (state.clock.elapsedTime - timeElapsed > 0.4) {
      const currentFrame = state.gl.info.render.frame;

      if (currentFrame % 2 === 0) {
        const prev1 = light1.target.position.x !== 5;
        light1.target.position.x = prev1 ? 5 : 3;

        const prev2 = light2.target.position.y !== 1;
        light2.target.position.y = prev2 ? 1 : 2;

        const prev3 = light3.target.position.x !== 15;
        light3.target.position.x = prev3 ? 15 : 13;

        const prev4 = light4.target.position.y !== 1;
        light4.target.position.y = prev4 ? 1 : 2;
      } else {
        const prev1 = light1.target.position.y !== 1;
        light1.target.position.y = prev1 ? 1 : 2;

        const prev2 = light2.target.position.x !== 10;
        light2.target.position.x = prev2 ? 10 : 8;

        const prev3 = light3.target.position.y !== 1;
        light3.target.position.y = prev3 ? 1 : 2;

        const prev4 = light4.target.position.x !== 20;
        light4.target.position.x = prev4 ? 20 : 17;
      }

      timeElapsed = state.clock.elapsedTime;
    }
  });

  useEffect(() => {
    if (light1) {
      light1.target.position.x = 5;
    }
    if (light2) {
      light2.target.position.x = 10;
    }
    if (light3) {
      light3.target.position.x = 15;
    }
    if (light4) {
      light4.target.position.x = 20;
    }
  }, [obj, light1, light2, light3, light4]);

  return (
    <group position={[0, 0, 20]}>
      <Stats />
      {Array.from({ length: rayCount }, (_, index) => (
        <SpotLight
          // @ts-ignore
          target={obj}
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
          }}
          penumbra={0}
          distance={index === 0 || index === 3 ? distance + 2 : distance}
          attenuation={30}
          intensity={0.1}
          angle={0.2}
          color="#1e3656"
        />
      ))}
    </group>
  );
};

export default LightRayGroup;
