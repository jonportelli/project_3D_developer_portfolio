import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
 
 
  const earth = useGLTF("./room-transformed.glb");

  return (
    <mesh>
    <ambientLight intensity={0.1} />
    <pointLight intensity={0.2} />
    <directionalLight position={[4, 0, 0]} castShadow intensity={5} shadow-mapSize={2048} shadow-bias={-0.001}>
    <primitive  object={earth.scene} scale={0.5} position-y={0} position-x={0} rotation-y={0} receiveShadow />
    </directionalLight>
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: false }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [0, 0, 45],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
