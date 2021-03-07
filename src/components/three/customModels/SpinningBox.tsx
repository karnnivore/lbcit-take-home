import React, { useRef, useState } from 'react'
import * as THREE from 'three';
import { useFrame } from 'react-three-fiber';
import { MeshWobbleMaterial } from '@react-three/drei';

export default function SpinningBox(props: any) {
  //reference to mesh
  const mesh = useRef<THREE.Mesh>();
  //state for hovered/active
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  //rotate object
  useFrame(() => {
    if (mesh.current !== undefined) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.007
    }
  })
  return (
    <mesh
      position={props.position}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e => {
        setActive(!active)
        window.open(props.link)
      }}
      onPointerOver={e => { 
        setHover(true)
        props.setTableBold(true)
        setActive(true)
      }}
      onPointerOut={e => {
        setHover(false)
        props.setTableBold(false)
        setActive(false)
      }}
      castShadow
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      {/* <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} /> */}
      <MeshWobbleMaterial 
        attach="material" 
        color={hovered ? 'hotpink' : props.color} 
        speed={3} 
        factor={1.5}
      />
    </mesh>
  )
}