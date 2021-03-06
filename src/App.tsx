import React, { useRef, useState } from 'react';
import './App.scss';
import CustomBox from './components/CustomBox';
import Table from './components/Table';
function App() {
  return (
    //React fragment containing canvas which contains three js elements
    <>
      <Table/>
      <CustomBox/>
    </>
  );
}

export default App;
