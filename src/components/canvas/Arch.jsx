import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Arch = () => {
  const arch = useGLTF("./arch/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.25} groundColor='black' />
    <spotLight
    position={[-20, 50, 10]}
    angle={0.12}
    penumbra={1}
    intensity={1}
    castShadow
    shadow-mapSize={1024}
  />
    <primitive object={arch.scene} scale={0.35} position-y={0} rotation-y={0} wireframe />
  </mesh>
  );
};

const ArchCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [20, -5, -20],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 5}
          minPolarAngle={Math.PI / 3}
        />
        
        <Preload all />
        <Arch />
      </Suspense>
    </Canvas>
  );
};

export default ArchCanvas;
