import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from 'react-three-fiber';
import { softShadows, MeshWobbleMaterial, OrbitControls } from '@react-three/drei';

//used to soften shadows displayed from boxes
softShadows()

//function to create custom spinning boxes
function SpinningBox(props: any) {
  //reference to mesh
  const mesh = useRef<THREE.Mesh>();
  //state for hovered/active
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const [expand, setExpand] = useState(false);


  //rotate object
  useFrame(() => {
    if (mesh.current !== undefined) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.007
    }
  })
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
      castShadow
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      {/* <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} /> */}
      <MeshWobbleMaterial 
        attach="material" 
        color={hovered ? 'hotpink' : 'orange'} 
        speed={3} 
        factor={1.5}
      />
    </mesh>
  )
}

export default function CustomBox() {
  return (
    <Canvas 
      shadowMap
      colorManagement 
      camera={{position: [-5, -2, 10], fov: 60}}
    >
      {/* lights all objects allowing for colours */}
      <ambientLight intensity={0.8}/>
      {/* light coming from top to produce shadows */}
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={.8}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/* camera light coming from left/right */}
      <pointLight position={[-10, 0, -20]} intensity={0.5}/>
      <pointLight position={[0, -10, 0]} intensity={1.5}/>

      {/* plane for floor to allow for shadows to be shown */}
      <group>
        <mesh 
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]} 
          position={[0, -3, 0]}
        >
          <planeBufferGeometry attach='geometry' args={[100, 100]}/>
          <shadowMaterial attach='material' opacity={0.5}/>
        </mesh>
        {/* Display custom spinning box */}
        <SpinningBox position={[-1.2, 0, 0]}/>
        <SpinningBox position={[2.1, 0, 0]}/>
        <SpinningBox position={[4, 1, 4]}/>
        <SpinningBox position={[-4, 1, 4]}/>
      </group>

      {/* Allows you to move camera */}
      <OrbitControls/>
    </Canvas>
  )
}
