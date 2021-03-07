import React from 'react';
import { Canvas } from 'react-three-fiber';
import { softShadows, OrbitControls } from '@react-three/drei';
import SpinningBox from './customModels/SpinningBox';
import CustomText from './customModels/CustomText';

//used to soften shadows displayed from boxes
softShadows()

export default function CustomBox(props: any) {
  return (
    <Canvas 
      shadowMap
      colorManagement 
      camera={{position: [0, 0, 20], fov: 60}}
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
        {/* Display custom text */}
        <CustomText position={[-15, 5, 0]} text='Tokyo' color='purple' setTableBold={props.setNewYork}/>
        <CustomText position={[-20, 2, 0]} text='New York' color='red' setTableBold={props.setNewYork}/>
        <CustomText position={[5, 5, 0]} text='London' color='blue' setTableBold={props.setNewYork}/>
        <CustomText position={[5, 1, 4]} text='Berlin' color='green' setTableBold={props.setNewYork}/>
        {/* Display custom spinning box */}
        <SpinningBox position={[-1.2, 0, 0]} color='purple'/>
        <SpinningBox position={[2.1, 0, 0]} color='red'/>
        <SpinningBox position={[4, 1, 4]} color='blue'/>
        <SpinningBox position={[-4, 1, 4]} color='green'/>
      </group>

      {/* Allows you to move camera */}
      <OrbitControls/>
    </Canvas>
  )
}
