import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import CrabModel from "../Models/CrabModel";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const WorkingCrab = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => setReady(true), 3000);
  }, []);

  return ready ? (
    <Canvas
      camera={{ position: [150, 50, 50], fov: 15 }}
      className="bg-zinc-700"
      shadows
    >
      <ambientLight intensity={0.9} />
      <CrabModel />
    </Canvas>
  ) : (
    <ClimbingBoxLoader
      size={30}
      color={"#36D6B6"}
      className="flex justify-center m-auto"
    />
  );
};

export default WorkingCrab;
