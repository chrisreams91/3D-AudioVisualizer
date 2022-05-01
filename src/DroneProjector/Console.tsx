import React, { useState } from "react";
import Button from "../RandomComponents/Button";
import * as THREE from "three";

const Console = () => {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <Button
        position={new THREE.Vector3(-4.5, 3.3, 0)}
        selected={selected}
        onClick={() => {
          setSelected(!selected);
        }}
      />
    </>
  );
};

export default Console;
