import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import Button from '@mui/material/Button';
import { Navigate } from 'react-router-dom';

let dataToSave = []
const columns = [
  { field: 'id', headerName: 'id' , disableClickEventBubbling:true },
  { field: 'name', headerName: 'name', width: 300 ,disableClickEventBubbling:true},
  // { field: 'url', headerName: 'url', width: 600 },
  {field: 'url',
      headerName: 'url',
      width: 400,
      height: 400,
      editable: true,
      renderCell: (params) => <img src={params.value} width='100px' height='50px'/>,disableClickEventBubbling:true}
]
const Dashboard= (isLoggedIn) => {
  // If (Object.keys(isLoggedIn) != true){
  //   return <Navigate to ='/registration'/>
  // }
  const [table,setTable] = useState([])
  const [tableData, setTableData] = useState([])
  const [checkboxSelection, setCheckboxSelection] = React.useState(true);
  const [selection,setSelection] = useState({})
  const [selectionModel, setSelectionModel] = React.useState([]);
  const [local,setLocal] = useState(
    JSON.parse(localStorage.getItem("name"))
  )
  console.log(local)
  const GetProductData = async () => {
    try {
      await axios
        .get("https://api.imgflip.com/get_memes")
        .then((res) => {
          //console.log('Array response',res.data.data.memes)
          setTableData(res.data.data.memes);
          
        })
        .catch((err) => {
          console.log("Error", err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  function setData(row){
    if(dataToSave.indexOf(row)==-1){
      dataToSave.push(row)
    }
    else
    {
      dataToSave.pop(row)
    localStorage.setItem(local,JSON.stringify(dataToSave))
    }
  }
  useEffect(() => {
    GetProductData();
    const parsedArrayFromLocalStorage =JSON.parse(localStorage?.getItem(local)|| "[]")
    const mappedArray = parsedArrayFromLocalStorage.map(item =>{
      return item
    },[selectionModel])
    console.log("log",mappedArray)
  }, []);
  return (
    <>
    <div style={{ width: '100%' }}>
    {/* <Button onClick={ShowData}>ShowMyList</Button> */}
    <Button
      sx={{ mb: 2 }}
      onClick={() => setCheckboxSelection(!checkboxSelection)}
    ></Button>
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={12}
        checkboxSelection={checkboxSelection}
        onRowClick={item=>setData(item.row)}
        // onSelectionModelChange={(ids)=>{
        //   console.log("ids is :",ids)
        //   setSelectionModel(ids)
        //   if(ids.length >0){
        //     localStorage.setItem(local,JSON.stringify(ids))
        //   }
        // }}
        // selectionModel = {selectionModel ? selectionModel: []}
        />
      </div>
    </div>
    </>
  )
}

export default Dashboard











// import React from 'react'
// import { useState,useEffect } from 'react'
// import axios from "axios" 
// import {Navigate, useNavigate} from "react-router-dom"
// const Dashboard = (isLoggedIn) => {
//   const getData = (url) =>{
//     let tempData = url
//     setTempdata(url)
//     return setShow(true)
//   }
//   const getcheck =(item) =>{
//     console.log(item)
//   }
//   const [tempdata, setTempdata] = useState([])
//   const [show,setShow] = useState(false)
//   const [search,setSearch] = useState("")
//   const [product, setProduct] = useState([]);
//   const GetProductData = async () => {
//     try {
//       await axios
//         .get("https://api.imgflip.com/get_memes")
//         .then((res) => {
//           setProduct(res.data.data.memes);
//         })
//         .catch((err) => {
//           console.log("Error", err);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     GetProductData();
//   }, []);
//     return (
//       <>
//       <div>
//       </div>
//       <div >
//       <table>
//           <tr >
//           <th ><pre>    Sr No</pre></th>
//           <th ><pre>    Name</pre></th>
//           <th ><pre>    Image</pre></th>
//           <th ><pre>        Select Value</pre></th>
//           </tr>
//       {product
//       .map(item=>{
//         return <tr>
//           <td ><pre>    {item.id}</pre>  </td>
//           <td ><pre>    {item.name}</pre></td>
//           <td ><pre><img src={item.url} width="100px" height="100px" onClick={()=>getData(item.url)}/></pre></td>
//           <td ><pre>        <input onClick={getcheck(item)}
//           type="checkbox"></input>
//           </pre>
//           </td>
//           </tr>
          
//       })}
//       </table>
//     </div> 
   

//       </>
//     )
//   }
// export default Dashboard