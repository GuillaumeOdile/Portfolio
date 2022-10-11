import { Canvas, useFrame } from "@react-three/fiber";
import React, { useState } from "react";
import CrabModel from "../Models/CrabModel";

const CrabMesh = () => {
  const refMesh = React.useRef() as any;
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [lastRotation, setLastRotation] = useState(1);

  useFrame(() => {
    if (refMesh.current) {
      if (scrollY > window.scrollY) {
        refMesh.current.rotation.y += (scrollY - window.scrollY) / 500;
        setScrollY(scrollY - (scrollY - window.scrollY) / 4);
        setLastRotation(-1);
      } else if (scrollY < window.scrollY - 1) {
        refMesh.current.rotation.y -= (window.scrollY - scrollY) / 500;
        setScrollY(window.scrollY - (window.scrollY - scrollY) / 4);
        setLastRotation(1);
      }
      refMesh.current.rotation.y -= 0.003 * lastRotation;
    }
  });

  return (
    <mesh ref={refMesh}>
      <CrabModel />
    </mesh>
  );
};

const WorkingCrab = () => {
  return (
    <Canvas
      camera={{ position: [150, 50, 50], fov: 15 }}
      className="bg-zinc-700"
      shadows
    >
      <ambientLight intensity={0.9} />
      <CrabMesh />
    </Canvas>
  );
};

export default WorkingCrab;
