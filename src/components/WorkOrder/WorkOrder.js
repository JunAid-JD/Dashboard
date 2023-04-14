import React from 'react'
import { Grid, Typography, Box, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';
import search from '../../Images/customer_search.png'
import { DataGrid } from '@mui/x-data-grid';
import Card from '../../reuse/Card.js'
import ScrollContainer from 'react-indiana-drag-scroll'
import Action from "../../reuse/Action.js";
import { Link } from 'react-router-dom';

// import { Link } from 'react-router-dom';
// Table Header Name
const columns = [
    { field: 'Client', headerName: 'Client', width: 300 },
    { field: 'Source', headerName: 'Source', width: 170 },
    { field: 'Request_Tittle', headerName: 'Request Tittle', width: 220 },
    { field: 'Location', headerName: 'Location', width: 340 },
    { field: 'Created', headerName: 'Created', width: 180 },
    {
        field: ' ', headerName: ' ',
        renderCell: (cellvalues) => {
            return (
                <Button size="small" style={{ backgroundColor: "#0B181C", color: "white", textTransform: 'none', borderRadius: 40, padding: '2px 10px' }} >edit</Button>
            )
        }
        , width: 130
    },
    {
        field: '  ', headerName: '  ',
        renderCell: (cellvalues) => {
            return (
                <Button size="small" style={{ backgroundColor: "#0B181C", color: "white", textTransform: 'none', borderRadius: 40, padding: '2px 20px' }} >delete</Button>
            )
        }
        , width: 130
    },
];

//Table Data
const rows = [
    { id: 1, Source: "Source", Client: 'Jenkins Reilly', Location: "Suite 366 Ergonomic", Request_Tittle: 'null', Created: 'excepturi', },
    { id: 2, Source: "Source", Client: 'Enkins and Barton', Location: "Suite 366 Ergonomic", Request_Tittle: 'null', Created: 'excepturi' },
    { id: 3, Source: "Source", Client: 'Absfdgs Barton', Location: "Suite 366 Ergonomic", Request_Tittle: 'null', Created: 'excepturi', },
    { id: 4, Source: "Source", Client: 'zhryjins and Barton', Location: "Suite 366 Ergonomic", Request_Tittle: 'null', Created: 'excepturi' },
    { id: 5, Source: "Source", Client: 'hklndgs Barton', Location: "Suite 366 Ergonomic", Request_Tittle: 'null', Created: 'excepturi', },
    { id: 6, Source: "Source", Client: 'ysngsgs Barton', Location: "Suite 366 Ergonomic", Request_Tittle: 'null', Created: 'excepturi', },
    { id: 7, Source: "Source", Client: 'qsdfs and Barton', Location: "Suite 366 Ergonomic", Request_Tittle: 'null', Created: 'excepturi' },
    { id: 8, Source: "Source", Client: 'Nsdffdgs Barton', Location: "Suite 366 Ergonomic", Request_Tittle: 'null', Created: 'excepturi', },
];

//Max height menu
const options = [
    { title: 'Add Work', route: "Add_Work" },
];
const ITEM_HEIGHT = 48;

//Style
const useStyles = makeStyles(({ theme }) => ({
    focus: {
        color: '#000000'
    },
    input: {
        backgroundColor: "rgba(112,112,112,0.1)", border: "none", outline: "none", width: '300px', height: '35px',
        borderRadius: '10px', paddingLeft: '34px', fontSize: '15px', backgroundImage: `url(${search})`, backgroundRepeat: 'no-repeat', backgroundPosition: '9px 9px', backgroundSize: "18px"
    },
    view_box: {
        display: 'flex', width: '100%', cursor: "grab", paddingBottom: '30px'
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
    }
}))




const WorkOrder = () => {
    const classes = useStyles();


    return (
        <div >
            <Typography variant="h5" color="initial" fontWeight={600} style={{ margin: "1rem 0" }}>Work Order</Typography>
            <ScrollContainer horizontal={true}>
                <Box className={classes.view_box} style={{ width: '80vw' }}>
                    <Card heading="All" total='0' percentage="41.3" percentageColor='#05BB3C' />
                    <Card heading="New" total='0' percentage="14" percentageColor='#05BB3C' />
                    <Card heading="Schedule" total='0' percentage="9" bgcolor="#131313" color="white" percentageColor='#FF2929' />
                    <Card heading="All" total='0' percentage="41.3" percentageColor='#05BB3C' />
                    <Card heading="New" total='0' percentage="14" percentageColor='#05BB3C' />
                    <Card heading="All" total='0' percentage="41.3" percentageColor='#05BB3C' />
                    <Card heading="New" total='0' percentage="14" percentageColor='#05BB3C' />
                    <Card heading="All" total='0' percentage="41.3" percentageColor='#05BB3C' />
                    <Card heading="New" total='0' percentage="14" percentageColor='#05BB3C' />
                    <Card heading="All" total='0' percentage="41.3" percentageColor='#05BB3C' />
                    <Card heading="New" total='0' percentage="14" percentageColor='#05BB3C' />
                </Box></ScrollContainer>
            <Grid>
                <Box className='MainBox'>

                    {/* Header  */}

                    <Box style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between', flexWrap: "wrap" }}>
                        <Box >
                            <Typography variant="h6" color='#D5073C' fontWeight={600}>Work Order</Typography>
                            <Typography color='#D5073C'>Your have 8 customers</Typography>
                        </Box >
                        <Box textAlign='right' style={{ display: 'flex', flexWrap: "wrap", gap: "0 1rem", alignItems: "center" }}>

                            {/* Menu  */}
                            {/* <Link to="/Work_Order/New_Work_Order" style={{ textDecoration: 'none', }}> */}
                            <Link to="/New"> <Button style={{ backgroundColor: 'rgba(213,7,60,0.3)', textTransform: 'none', color: 'black', padding: '5px 30px', borderRadius: '30px', margin: ".5rem 0" }}>New Work Order
                                <img src='\Assets\Work.png' alt="" style={{ marginLeft: '10px', width: '17px' }} />
                            </Button></Link>
                            {/* </Link> */}
                            <Action options={options} />
                        </Box>
                    </Box>

                    {/* Table  */}

                    <Box style={{ marginTop: '20px' }}>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                className={classes.root}
                                rows={rows}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                checkboxSelection
                            />
                        </div>
                    </Box>
                </Box>
            </Grid>
        </div>
    )
}

export default WorkOrder