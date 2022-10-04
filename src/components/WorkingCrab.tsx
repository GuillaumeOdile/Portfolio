import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import CrabModel from "../Models/CrabModel";

const WorkingCrab = () => {
  return (
    <Canvas
      camera={{ position: [150, 50, 50], fov: 15 }}
      style={{
        backgroundColor: "#111a21",
        width: "100vw",
        height: "80vh",
      }}
      shadows
    >
      <ambientLight intensity={0.4} />
      <Suspense fallback={null}>
        <CrabModel />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default WorkingCrab;
