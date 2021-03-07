import React, { useState} from 'react'
import * as THREE from 'three';
import { MeshWobbleMaterial } from '@react-three/drei';
import Roboto from './Roboto/Roboto_Regular.json';

export default function CustomText(props: any) {
  //state for hovered/active
  const [active, setActive] = useState(false)
  const [hovered, setHover] = useState(false)

  //font settings
  const font = new THREE.FontLoader().parse(Roboto);
  const textOptions = {
    font,
    size: 5,
    height: 1,
  }
  return (
    <mesh
      position={props.position}
      scale={active ? [.8, .8, .8] : [.5, .5, .5]}
      onClick={e => setActive(!active)}
      onPointerOver={e => { 
        setHover(true)
        props.setTableBold(true)
      }}
      onPointerOut={e => {
        setHover(false)
        props.setTableBold(false)
      }}
    >
      <textGeometry attach='geometry' args={[props.text, textOptions]}/>
      <MeshWobbleMaterial 
        attach='material'
        color={hovered ? 'hotpink' : props.color} 
        speed={2}
        factor={0.2}
      />
    </mesh>
  )
}
