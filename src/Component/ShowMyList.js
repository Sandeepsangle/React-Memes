import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import Button from '@mui/material/Button';
const columns = [
    { field: 'id', headerName: 'id' },
    { field: 'name', headerName: 'name', width: 300},
    {field: 'url',
        headerName: 'url',
        width: 400,
        height: 400,
        editable: true,
        renderCell: (params) => <img src={params.value} width='100px' height='50px'/>}
  ]
const ShowMyList = () => {
    const [locals,setLocals] = useState(
      JSON.parse(localStorage.getItem("name"))
    )
    console.log(locals)
    const [table,setTable] = useState()
    const [tableData, setTableData] = useState(
      JSON.parse(localStorage.getItem( locals))
    )
    // console.log(tableData)
    return (
        <>
        <div>Welcome,to ShowMyList
        </div>
         <div style={{ width: '100%' }}>
         <div style={{ height: 700, width: '100%' }}>
           <DataGrid
             rows={tableData}
             columns={columns}
             pageSize={12}/>
           </div>
         </div>
         </>
  )
}

export default ShowMyList