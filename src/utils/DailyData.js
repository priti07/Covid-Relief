import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios"

const DailyData = () => {
  const [state, setState] = useState({});
  const [rows, setRows] = useState([]);

  const fetchData = fetch(
    "https://api.covid19india.org/v4/min/data.min.json"
  ).then((res) => {
    return res.json();
  })
  .catch(function(err){
    console.log(err);
  })

  // const fetchData = axios.get(
  //   "https://api.covid19india.org/v4/min/data.min.json"
  // ).then((res) => {
  //   return res.json();
  // })
  // .catch(function(err){
  //   console.log(err);
  // })

  useEffect(() => {
    // console.log(state);
    const printData = async () => {
      const data = await fetchData;
      // setState(data);
      // callback(data);
      console.log(data);
      var arr = [];
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          var obj = (
            <tr>
              <td>{key}</td>
              <td>{data[key].total.confirmed}</td>
              <td>{data[key].total.deceased}</td>
              <td>{data[key].total.recovered}</td>
              <td>{data[key].total.tested}</td>
              <td>{data[key].total.vaccinated}</td>
            </tr>
          );
          arr.push(obj);
        }
      }
      // console.log(arr);
      setRows(arr);
      // console.log(state);
    };
    printData();
  }, []);

  // printData();

  return (
    <div className="datatable">
      <Table className="table" striped bordered hover variant="dark">
        <thead className="table-head">
          <tr>
            <th>State/UT</th>
            <th>Confirmed</th>
            <th>Deceased</th>
            <th>Recovered</th>
            <th>Tested</th>
            <th>Vaccinated</th>
          </tr>
        </thead>

        <tbody>
          {rows}
        </tbody>
      </Table>
    </div>
  );
};

export default DailyData;
