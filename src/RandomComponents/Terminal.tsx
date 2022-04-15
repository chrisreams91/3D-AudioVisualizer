import React, { useEffect, useState } from "react";
import * as THREE from "three";
const { videos } = require("../assets/index");

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

const Terminal = () => {
  const [selectedButton, setSelectedButton] = useState(10);
  const [video, setVideo] = useState(() => {
    const vid = document.createElement("video");
    vid.src = videos[selectedButton];
    vid.loop = true;
    vid.muted = false;
    vid.play();
    return vid;
  });

  useEffect(() => {
    const newVid = video;
    newVid.src = videos[selectedButton];
    setVideo(newVid);
    video.play();
    console.log(video);
  }, [selectedButton, video]);

  const buttons = [
    <Button
      key={0}
      position={new THREE.Vector3(-4.5, 3.3, 0)}
      selected={selectedButton === 0}
      onClick={() => setSelectedButton(0)}
    />,
    <Button
      key={1}
      position={new THREE.Vector3(-3, 3.3, 0)}
      selected={selectedButton === 1}
      onClick={() => setSelectedButton(1)}
    />,
    <Button
      key={2}
      position={new THREE.Vector3(-1.5, 3.3, 0)}
      selected={selectedButton === 2}
      onClick={() => setSelectedButton(2)}
    />,
    <Button
      key={3}
      position={new THREE.Vector3(0, 3.3, 0)}
      selected={selectedButton === 3}
      onClick={() => setSelectedButton(3)}
    />,
    <Button
      key={4}
      position={new THREE.Vector3(1.5, 3.3, 0)}
      selected={selectedButton === 4}
      onClick={() => setSelectedButton(4)}
    />,
    <Button
      key={5}
      position={new THREE.Vector3(3, 3.3, 0)}
      selected={selectedButton === 5}
      onClick={() => setSelectedButton(5)}
    />,
    <Button
      key={6}
      position={new THREE.Vector3(4.5, 3.3, 0)}
      selected={selectedButton === 6}
      onClick={() => setSelectedButton(6)}
    />,
  ];

  return (
    <group rotation={[0, -1.6, 0]} position={[0, 0, 1]}>
      <mesh>{buttons}</mesh>
      <mesh>
        <boxGeometry args={[10, 5, 0.2]} />
        <meshStandardMaterial color={"black"} />
      </mesh>
      <mesh rotation={[0, 0, 0]} position={[0, 0, 0.11]}>
        <planeGeometry args={[10, 5]} />
        <meshStandardMaterial emissive={"black"} side={THREE.FrontSide}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
      </mesh>
    </group>
  );
};

export default Terminal;
