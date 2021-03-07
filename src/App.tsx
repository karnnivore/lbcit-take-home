import React, { useState, useEffect } from 'react';
import './App.scss';
import CustomBox from './components/three/CustomBox';
import MyTable from './components/table/MyTable';
function App() {
  const [loading, isLoading] = useState(true);
  const [tableData, setTableData] = useState([]);
  //state for each option and a handler
  const [newYork, setNewYork] = useState(false);
  const [tokyo, setTokyo] = useState(false);
  const [london, setLondon] = useState(false);
  const [berlin, setBerlin] = useState(false);

  //load data from api
  useEffect(() => {
    const dataFetch = async () => {
      const url = 'https://www.lbcit.ca/demo/api/?key=d9658b9d-4f86-491f-bd67-86af0c547a5c';
      const response = await fetch(url);
      const data = await response.json();
      setTableData(data)
      isLoading(false)
    }

    dataFetch();
  }, [])

  return (
    <>
      {//if loading or no table data display loading 
       loading || !tableData ? 
        <div>Loading</div>
        :
        <>
          <MyTable tableData={tableData} newYork={newYork} tokyo={tokyo} london={london} berlin={berlin}/>
          <CustomBox setNewYork={setNewYork} setTokyo={setTokyo} setLondon={setLondon} setBerlin={setBerlin}/>
        </>
      }
    </>
  );
}

export default App;
