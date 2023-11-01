import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import Button from '@mui/material/Button';

const columns = [
  { field: 'id', headerName: 'id'},
  { field: 'name', headerName: 'name', width: 300 },
  // { field: 'url', headerName: 'url', width: 600 },
  {field: 'url',
      headerName: 'url',
      width: 400,
      height: 400,
      editable: true,
      renderCell: (params) => <img src={params.value} width='100px' height='50px'/>}
]
const Testing = () => {

  const [tableData, setTableData] = useState([])
  const [checkboxSelection, setCheckboxSelection] = useState(true);
  const [selection,setSelection] = useState({})
  const [selectionModel, setSelectionModel] = useState([]);
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
  useEffect(() => {
    GetProductData();
  }, []);

  return (
    <>
    <div style={{ width: '100%' }}>
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
        // onRowClick={item=>console.log(item.row)}
        // onCellClick={(event)=>event.stopPropagation}
        onSelectionModelChange={(newSelectionModel) => {
          console.log(newSelectionModel)
          setSelectionModel(newSelectionModel);
        }}
        selectionModel={selectionModel}/>
        
      {/* <h1>{selection.map((items=>{console.log(items)}))}</h1> */}
      </div>
    </div>
    </>
  )
}

export default Testing