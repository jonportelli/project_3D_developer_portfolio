import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, MeshDistortMaterial, SoftShadows, Float, CameraControls } from "@react-three/drei";
import { easing } from "maath";
import CanvasLoader from "../Loader";


function Light() {
  const ref = useRef()
  useFrame((state, delta) => {
    easing.dampE(ref.current.rotation, [(state.pointer.y * Math.PI) / 50, (state.pointer.x * Math.PI) / 20, 0], 2, delta)
  })
  return (
    <group ref={ref}>
      <directionalLight position={[5, 5, 5]} castShadow intensity={3} shadow-mapSize={2048} shadow-bias={-0.001}>
        <orthographicCamera attach="shadow-camera" args={[-8.5, 8.5, 8.5, -8.5, 0.1, 20]} />
      </directionalLight>
    </group>
  )
}


const Earth = (props) => {
  const group = useRef()
  const shadow = useRef()

  const { nodes } = useGLTF('/geo.min.glb', true)
  // const earth = useGLTF("./room-transformed.glb");

//   return (
//     <mesh >
//    <ambientLight intensity={0.4} />
//     {/* <pointLight intensity={0.2} /> */}
//     {/* <directionalLight position={[4, 0, 0]} castShadow intensity={3} shadow-mapSize={2048} shadow-bias={-0.001}> */}
//     <SoftShadows />
//     {/* <Light /> */}
    
//     <primitive  object={earth.scene} scale={0.5} position-y={-9} position-x={-5} rotation-y={-0.5} receiveShadow  />
//     {/* </directionalLight> */}
//     </mesh>
//   );
// };

return (
  <group {...props} dispose={null}>
      <group ref={group}>
        <mesh geometry={nodes.geo.geometry} castShadow receiveShadow>
          <MeshDistortMaterial color="#ffffff" flatShading roughness={1} metalness={0.5} factor={30} speed={3} />
        </mesh>
        <mesh geometry={nodes.geo.geometry}>
          <meshBasicMaterial wireframe />
        </mesh>
      </group>
      {/* <group position={[1.25, -0.5, 0]}>
        <Text position={[0, 0, 0]} fontSize={0.07} lineHeight={1} letterSpacing={-0.05}>
          03
          <meshBasicMaterial color="#cccccc" toneMapped={false} />
        </Text>
        <Text bold position={[-0.01, -0.1, 0]} fontSize={0.1} lineHeight={1} letterSpacing={-0.05} color="black">
          {`Poimandres,\nThe vision of Hermes`}
        </Text>
      </group> */}
      <SoftShadows ref={shadow} opacity={0.3} rotation-x={-Math.PI / 2.5} position={[0, -1.51, 0]} />
    </group>
)
}

useGLTF.preload("/geo.min.glb")

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
        position: [3, 3, -3],
       
      }}
    >
     <ambientLight intensity={0.2} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          orthographicCamera
          // autoRotateSpeed={0.5}
          // minAzimuthAngle={Math.PI / 6}
          // maxAzimuthAngle={Math.PI / 0}
          damping={0.4}
          minZoom={1}
          // maxZoom={300}
          minDistance={-20}
          maxDistance={40}
          maxSpeed={1}
          // minPolarAngle={Math.PI / 6}
          // maxPolarAngle={Math.PI / 2}
        />
          {/* <CameraControls makeDefault maxZoom={0.5} /> */}
        {/* <color attach="background" args={["#d0d0d0"]} /> */}
        <fog attach="fog" args={["#d0d0d0", 10, 30]} />
        <Earth scale={1.5} position={[0,-1,0.5]} rotation= {[0, 0, 0]} orthographicCamera />
        <Light />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
