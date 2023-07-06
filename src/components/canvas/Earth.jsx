import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, SoftShadows, Float, CameraControls } from "@react-three/drei";
import { easing } from "maath";
import CanvasLoader from "../Loader";

function Light() {
  const ref = useRef()
  useFrame((state, delta) => {
    easing.dampE(ref.current.rotation, [(state.pointer.y * Math.PI) / 50, (state.pointer.x * Math.PI) / 20, 0], 0.2, delta)
  })
  return (
    <group ref={ref}>
      <directionalLight position={[5, 5, -3]} castShadow intensity={3} shadow-mapSize={2048} shadow-bias={-0.001}>
        <orthographicCamera attach="shadow-camera" args={[-8.5, 8.5, 8.5, -8.5, 0.1, 20]} />
      </directionalLight>
    </group>
  )
}

const Earth = (props) => {
  const { nodes, materials } = useGLTF("./room-transformed.glb");
  const earth = useGLTF("./room-transformed.glb");

  return (
    <mesh >
   <ambientLight intensity={0.4} />
    {/* <pointLight intensity={0.2} /> */}
    {/* <directionalLight position={[4, 0, 0]} castShadow intensity={3} shadow-mapSize={2048} shadow-bias={-0.001}> */}
    <SoftShadows />
    {/* <Light /> */}
    
    <primitive  object={earth.scene} scale={0.5} position-y={-9} position-x={-5} rotation-y={-0.5} receiveShadow  />
    {/* </directionalLight> */}
    </mesh>
  );
};

// return (
//   <group {...props}  dispose={null}>
//     <group rotation={[-Math.PI / 2, 0, 0]}>
//       <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials.Material} />
//       <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials["Material.002"]} />
//       <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials["Material.003"]} />
//       <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials.krzeslo_1} />
//       <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials.krzeslo_okno} />
//       <mesh castShadow receiveShadow geometry={nodes.Object_8.geometry} material={materials.krzeslo_prawe} />
//       <mesh castShadow receiveShadow geometry={nodes.Object_9.geometry} material={materials.krzeslo_srodek} />
//       <mesh castShadow receiveShadow geometry={nodes.Object_10.geometry} material={materials.podloga} />
//       <mesh castShadow receiveShadow geometry={nodes.Object_11.geometry} material={materials.sciana_okno} />
//       <mesh castShadow receiveShadow geometry={nodes.Object_12.geometry} material={materials["stolik.001"]} />
//       <mesh castShadow receiveShadow geometry={nodes.Object_16.geometry} material={materials["Material.006"]} />
//       <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials["Material.004"]} />
//       <mesh geometry={nodes.Object_13.geometry}>
//         <meshStandardMaterial transparent opacity={0.5} />
//       </mesh>
//       <mesh castShadow receiveShadow geometry={nodes.Object_14.geometry} material={materials["Material.002"]} />
//       <mesh castShadow receiveShadow geometry={nodes.Object_15.geometry} material={materials["Material.005"]} />
//       <mesh castShadow receiveShadow geometry={nodes.Object_17.geometry} material={materials.mata} />
//       <mesh castShadow receiveShadow geometry={nodes.Object_18.geometry} material={materials.stolik} />
//     </group>
//   </group>
// )
// }

useGLTF.preload("/room-transformed.glb")

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
          // autoRotate
          // autoRotateSpeed={0.5}
          minAzimuthAngle={Math.PI / 6}
          maxAzimuthAngle={Math.PI / 0}
          damping={0.4}
          minZoom={0.1}
          minDistance={-20}
          maxDistance={30}
          maxSpeed={1}
          // minPolarAngle={Math.PI / 6}
          // maxPolarAngle={Math.PI / 2}
        />
          {/* <CameraControls makeDefault maxZoom={0.5} /> */}
        {/* <color attach="background" args={["#d0d0d0"]} /> */}
        <fog attach="fog" args={["#d0d0d0", 10, 30]} />
        <Earth scale={0.5} position={[0, 0, 0]} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
