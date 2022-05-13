import React from "react";

const Floor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-2, -2, 0]}>
      <planeBufferGeometry args={[25, 25, 1]} />
      <meshStandardMaterial color="#757171" />
    </mesh>
  );
};

export default Floor;
