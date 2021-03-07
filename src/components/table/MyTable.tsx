import React, {useState, useEffect} from 'react';
import './css/MyTable.scss';
import { Table,TableBody,TableCell,TableContainer,TableHead,TableRow } from '@material-ui/core';

export default function MyTable(props: any) {
  const [months, setMonths] = useState([])
  const [names, setNames] = useState([])
  const [data, setData] = useState([])

  //set state for months, names & data from props
  useEffect(() => {
    const tableData = props.tableData.series
    let nameArr = [] as any
    let dataArr = [] as any
    //loop through passed props and push to name/data array
    for (const item in tableData) {
      nameArr.push(tableData[item].name)
      dataArr.push(tableData[item].data)
    }
    //set state once all data is OK
    setMonths(props.tableData.categories)
    setNames(nameArr)
    setData(dataArr)
  }, [props.tableData])

  return (
    <div className="tableDiv">
      <TableContainer id="tblContainer">
        <Table>
          <TableHead id="tblHead">
            <TableRow>
              <TableCell>Month</TableCell>
              {//loop through city names disply them in cells
              names.map((value, index) => {
                return <TableCell key={index}>
                  {value}
                </TableCell>
              })
              }
            </TableRow>
          </TableHead>
          <TableBody id="tblBody">
              {//loop through months displaying data/months in cells
              months.map((value, index) => {
                return(
                  <TableRow key={index}>
                    <TableCell>{value}</TableCell>
                    <TableCell id={props.tokyo ? "selectedCell" : ""}>{data[0][index]}</TableCell>
                    <TableCell id={props.newYork ? "selectedCell" : ""}>{data[1][index]}</TableCell>
                    <TableCell id={props.london ? "selectedCell" : ""}>{data[2][index]}</TableCell>
                    <TableCell id={props.berlin ? "selectedCell" : ""}>{data[3][index]}</TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
