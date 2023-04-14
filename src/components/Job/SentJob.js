import React, { useState } from 'react'
import { Grid, Typography, Box, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { DataGrid } from '@mui/x-data-grid';


const useStyles = makeStyles(({ theme }) => ({
    input: {
        backgroundColor: "rgba(112,112,112,0.1)", border: "none", outline: "none", width: '300px', height: '35px',
        borderRadius: '10px', paddingLeft: '34px', fontSize: '15px', backgroundRepeat: 'no-repeat', backgroundPosition: '9px 9px', backgroundSize: "18px"
    },
    view_box: {
        display: 'flex', width: '100%', paddingBottom: "30px"
    },
    properties: {
        display: 'flex', justifyContent: 'space-between'
    },
    '@global': {
        '*::-webkit-scrollbar': {
            width: '4px',
            height: '10px',
        },
        '*::-webkit-scrollbar-thumb': {
            width: '2rem',
            backgroundColor: '#D5073C',
            borderRadius: "2rem",
        },
    },
    root: {
        "& .MuiDataGrid-columnHeaders": {
            fontSize: 17.8,
        },
        "& .MuiDataGrid-row Mui-selected": {
            backgroundColor: "red"
        }
    },
    Simple_input: {
        backgroundColor: "rgba(112,112,112,0.1)", border: 'none', outline: 'none', borderRadius: '10px',
        height: "40px", paddingLeft: "10px", fontSize: '17px', width: '100%'
    },
}))


//columns
const columns = [
    { field: 'Job_Id', headerName: 'Job ID', width: 130 },
    { field: 'Client', headerName: 'Client', width: 200 },
    { field: 'Job_type', headerName: 'Job Type', width: 150 },
    { field: 'Tag', headerName: 'Tag', width: 150 },
    { field: 'Phone', headerName: 'Phone', width: 150 },
    { field: 'Schedule', headerName: 'Schedule', width: 210 },
    {
        field: 'Tech', headerName: 'Tech',
        renderCell: (cellvalues) => {
            return (

                <Button size="small" style={{ backgroundColor: "#131313", textTransform: 'none', color: "white" }} >Lindsey peek</Button>)
        }, width: 150
    },
    { field: 'Address', headerName: 'Address', width: 230 },
    {
        field: 'Edit', headerName: 'Edit',
        renderCell: (cellvalues) => {
            return (<Button size="small" style={{ backgroundColor: "#0B181C", color: "white", textTransform: 'none', borderRadius: 40, padding: '2px 10px' }} >Edit</Button>)
        }, width: 100
    },
    {
        field: 'Delete', headerName: 'Delete',
        renderCell: (cellvalues) => {
            return (<Button size="small" style={{ backgroundColor: "#0B181C", color: "white", textTransform: 'none', borderRadius: 40, padding: '2px 20px' }} >Delete</Button>)
        }, width: 130
    },
];

//rows
const rows = [
    { id: 1, Job_Id: "23127", Client: 'skdfj sfb', Tag: 'execturi', Job_type: 'Example', Schedule: "Fri Jul 29,2022-10:00AM", Phone: "232-242-4242", Address: "78367 Zackery Square" },
    { id: 2, Job_Id: "23127", Client: 'skdfj sfb', Tag: 'execturi', Job_type: 'Example', Schedule: "Fri Jul 29,2022-10:00AM", Phone: "232-242-4242", Address: "78367 Zackery Square" },
    { id: 3, Job_Id: "23127", Client: 'skdfj sfb', Tag: 'execturi', Job_type: 'Example', Schedule: "Fri Jul 29,2022-10:00AM", Phone: "232-242-4242", Address: "78367 Zackery Square" },
];
const SentJob = () => {
    const classes = useStyles();

    return (
        <Box>
            <Box style={{ height: 280, width: '100%' }}>
                <DataGrid
                    className={classes.root}
                    rows={rows}
                    columns={columns}
                    pageSize={3}
                    rowsPerPageOptions={[3]}
                    checkboxSelection
                />
            </Box>
        </Box>
    )
}

export default SentJob