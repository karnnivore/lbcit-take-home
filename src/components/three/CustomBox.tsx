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
        <CustomText position={[-15, 5, 0]} text='Tokyo' color='purple' setTableBold={props.setTokyo} link="https://weather.com/weather/tenday/l/4ba28384e2da53b2861f5b5c70b7332e4ba1dc83e75b948e6fbd2aaceeeceae3"/>
        <CustomText position={[-20, 2, 0]} text='New York' color='red' setTableBold={props.setNewYork} link="https://weather.com/weather/tenday/l/f892433d7660da170347398eb8e3d722d8d362fe7dd15af16ce88324e1b96e70"/>
        <CustomText position={[5, 5, 0]} text='London' color='blue' setTableBold={props.setLondon} link="https://weather.com/weather/tenday/l/7517a52d4d1815e639ae1001edb8c5fda2264ea579095b0f28f55c059599e074"/>
        <CustomText position={[5, 1, 4]} text='Berlin' color='green' setTableBold={props.setBerlin} link="https://weather.com/weather/tenday/l/Berlin+Germany?canonicalCityId=49875d033efa3f8a515cc07b7ab1897df30ce65616175ffb4591cb95c5f646ff"/>
        <CustomText position={[-15, -2, 0]} text="Nick" color='black' setTableBold={props.setTokyo} link="https://nickchinsen.com"/>
        <CustomText position={[6, -2, 0]} text="Chinsen" color='black' setTableBold={props.setTokyo} link="https://nickchinsen.com"/>
        {/* Display custom spinning box */}
        <SpinningBox position={[-1.2, 0, 0]} color='purple' setTableBold={props.setTokyo} link="https://weather.com/weather/tenday/l/4ba28384e2da53b2861f5b5c70b7332e4ba1dc83e75b948e6fbd2aaceeeceae3"/>
        <SpinningBox position={[2.1, 0, 0]} color='red' setTableBold={props.setNewYork} link="https://weather.com/weather/tenday/l/f892433d7660da170347398eb8e3d722d8d362fe7dd15af16ce88324e1b96e70"/>
        <SpinningBox position={[4, 1, 4]} color='blue' setTableBold={props.setLondon} link="https://weather.com/weather/tenday/l/7517a52d4d1815e639ae1001edb8c5fda2264ea579095b0f28f55c059599e074"/>
        <SpinningBox position={[-4, 1, 4]} color='green' setTableBold={props.setBerlin} link="https://weather.com/weather/tenday/l/Berlin+Germany?canonicalCityId=49875d033efa3f8a515cc07b7ab1897df30ce65616175ffb4591cb95c5f646ff"/>
      </group>

      {/* Allows you to move camera */}
      <OrbitControls/>
    </Canvas>
  )
}
