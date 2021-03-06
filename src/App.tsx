import React, { useRef } from 'react';
import './App.scss';

import { Canvas, useFrame } from 'react-three-fiber';

function App() {
  return (
    //React fragment containing canvas which contains three js elements
    <>
      <Canvas>
        <mesh>
          <circleBufferGeometry attach='geometry' args={[1, 40]}/>
          <meshStandardMaterial attach="material"/>
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
