// import React, { useState } from "react";
// import { Table } from "react-bootstrap";
// import DailyData from "./DailyData.js";
// // import arr from "../staticdata";

// function HomePageTable() {
//   console.log(DailyData());
//   const [data, setData] = useState([]);

//   const callback = (data) => {
//     console.log(data);
//     setData(data);
//   };

//   return (

//     <div className="datatable">
//       <Table striped bordered hover variant="dark">
//         <thead>
//           <tr>
//             <th>State/UT</th>
//             <th>Confirmed</th>
//             <th>Deceased</th>
//             <th>Recovered</th>
//             <th>Tested</th>
//             <th>Vaccinated</th>
//           </tr>
//         </thead>

//         <tbody>
//           {arr.map(function (temp, index) {
//             return (
//               <tr>
//                 <td>{temp.key.name}</td>
//                 <td>{temp.key.confirmed}</td>
//                 <td>{temp.key.deceased}</td>
//                 <td>{temp.key.recovered}</td>
//                 <td>{temp.key.tested}</td>
//                 <td>{temp.key.vaccinated}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </Table>
//     </div>
//   );
// }

// export default HomePageTable;
