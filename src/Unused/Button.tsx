import React, { useState } from "react";

interface ButtonProps {
  selected: boolean;
  onClick: () => void;
  position: THREE.Vector3;
}

const Button = (props: ButtonProps) => {
  const { position, selected, onClick } = props;
  const [hovered, hover] = useState(false);

  return (
    <mesh
      onClick={onClick}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      position={position}
    >
      <boxGeometry args={[1, 1, 0.2]} />
      <meshStandardMaterial
        color={selected ? "green" : hovered ? "gray" : "black"}
      />
    </mesh>
  );
};

export default Button;
