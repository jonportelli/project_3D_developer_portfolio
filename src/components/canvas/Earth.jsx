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
   
    <primitive  object={earth.scene} scale={0.5} position-y={-9} position-x={-5} rotation-y={-0.5} receiveShadow />
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
        position: [0, 0, 23],
       
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minAzimuthAngle={Math.PI / 6}
          maxAzimuthAngle={Math.PI / 0}
          damping={0.4}
          minZoom={0.1}
          minDistance={-20}
          maxDistance={30}
          maxSpeed={1}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2}
        />
          {/* <CameraControls makeDefault maxZoom={0.5} /> */}
        {/* <color attach="background" args={["#d0d0d0"]} /> */}
        <fog attach="fog" args={["#d0d0d0", 10, 30]} />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
