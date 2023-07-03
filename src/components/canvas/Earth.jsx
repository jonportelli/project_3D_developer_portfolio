import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, SoftShadows, Float, CameraControls, } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
 
 
  const earth = useGLTF("./room-transformed.glb");

  return (
    <mesh >
    <ambientLight intensity={0.1} />
    {/* <pointLight intensity={0.2} /> */}
    <directionalLight position={[4, 0, 0]} castShadow intensity={3} shadow-mapSize={2048} shadow-bias={-0.001}>
    <SoftShadows />
   
    <primitive  object={earth.scene} scale={0.5} position-y={-5} position-x={0} rotation-y={-0.2} receiveShadow />
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
        fov: 90,
        near: 0.1,
        far: 200,
        position: [0, 0, 21],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          damping={0.5}
          distance={1.5}
          maxSpeed={0.5}
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
          <CameraControls makeDefault />
        {/* <color attach="background" args={["#d0d0d0"]} /> */}
        <fog attach="fog" args={["#d0d0d0", 8, 30]} />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
