import React from 'react'
import { Grid, Typography, Box, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { DataGrid } from '@mui/x-data-grid';
import Card from '../../reuse/Card'
import Action from '../../reuse/Action'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider } from '@mui/material';
import InvoiceModel from '../Invoice/InvoiceModel'
import ScrollContainer from 'react-indiana-drag-scroll';


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



//Max height menu
const options = [
    { title: 'Create estimates', route: '/CreateEstimate' },
    { title: 'Send estimates', route: '' },
    { title: 'Convert to job', route: '' },
    { title: 'Send message', route: '' },
];


const Estimates = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [openModel, setOpenModel] = React.useState(false);
    const handleOpenModel = () => setOpenModel(true);
    const handleCloseModel = () => setOpenModel(false);
    //columns
    const columns = [
        { field: 'Estimates', headerName: 'Estimates', width: 170 },
        { field: 'Client', headerName: 'Client', width: 200 },
        { field: 'Created', headerName: 'Created', width: 200 },
        { field: 'Amount', headerName: 'Amount', width: 150 },
        {
            field: 'Status', headerName: 'Status',
            renderCell: (cellvalues) => {
                return (

                    <Button size="small" style={{ backgroundColor: "green", textTransform: 'none', color: "white" }} >
                        Paid
                    </Button>
                )
            }, width: 200
        },
        { field: 'job', headerName: 'job', width: 150 },
        {
            field: 'Edit', headerName: 'Edit',
            renderCell: (cellvalues) => {
                return (<Button size="small" style={{ backgroundColor: "#0B181C", textTransform: 'none', color: "white" }} >Edit</Button>)
            }, width: 100
        },
        {
            field: 'Delete', headerName: 'Delete',
            renderCell: (cellvalues) => {
                return (<Button size="small" style={{ backgroundColor: "#0B181C", textTransform: 'none', color: "white" }} >Delete</Button>)
            }, width: 100
        },
    ];

    //rows
    const rows = [
        { id: 1, Estimates: "#25423", Client: 'East iceLand', Created: "excepturi", Amount: 'null', job: 'dolor', Status: 'pa' },
        { id: 2, Estimates: "#25423", Client: 'East iceLand', Created: "excepturi", Amount: 'null', job: 'dolor', Status: 'pa' },
        { id: 3, Estimates: "#25423", Client: 'East iceLand', Created: "excepturi", Amount: 'null', job: 'dolor', Status: 'pa' },
    ];

    return (
        <div >
            <Typography variant="h5" color="initial" fontWeight={600} style={{ margin: "1rem 0" }}>Estimates</Typography>
            <ScrollContainer horizontal={true}>
                <Box className={classes.view_box} style={{ width: '80vw' }}>
                    <Card heading="Approved" total='0' percentage="41.3" percentageColor='#05BB3C' />
                    <Card heading="Draft" total='0' percentage="14" percentageColor='#05BB3C' />
                    <Card heading="Pending" total='0' percentage="9" bgcolor="#131313" color="white" percentageColor='#FF2929' />
                    <Card heading="Changes Req." total='0' percentage="11" percentageColor='#05BB3C' />
                    <Card heading="Conv. to Job" total='0' percentage="41.3" percentageColor='#05BB3C' />
                    <Card heading="Achieved" total='0' percentage="14" percentageColor='#05BB3C' />
                    <Card heading="Pending" total='0' percentage="14" percentageColor='#05BB3C' />
                </Box>
            </ScrollContainer>

            <div  >
                <Grid>
                    <Box
                        sx={{
                            boxShadow: 3, height: 'auto',
                            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                            color: (theme) => theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                            borderRadius: 2, fontSize: '0.875rem', fontWeight: '700',
                            p: 2.5,
                        }}>
                        <Box style={{ display: 'flex', alignItems: 'center', width: '100%', flexWrap: "wrap" }}>
                            <Box flex='1'>
                                <Typography variant="h5" color='#D5073C' fontWeight={600}>Your Customer</Typography>
                                <Typography color='#D5073C'>Your have 3 customers</Typography>
                            </Box>

                            <div style={{ display: 'flex', flexWrap: "wrap", gap: "0 .5rem", alignItems: "center" }}>
                                <Button style={{ backgroundColor: 'rgba(213,7,60,0.3)', textTransform: 'none', color: 'black', padding: '5px 30px', borderRadius: '30px', margin: ".5rem 0" }} onClick={handleClickOpen}>Create Estimate
                                    <img src="\Assets\Estimates.png" alt="" style={{ marginLeft: '10px', width: '18px' }} />
                                </Button>
                                <Action options={options} />
                            </div>
                        </Box>
                        <Box style={{ marginTop: '10px' }}>
                            <div style={{ height: 280, width: '100%' }}>
                                <DataGrid
                                    className={classes.root}
                                    rows={rows}
                                    columns={columns}
                                    pageSize={5}
                                    rowsPerPageOptions={[3]}
                                    checkboxSelection
                                />
                            </div>
                        </Box>
                        {/* First Dialog  */}
                        <Dialog
                            style={{ borderRadius: '30px' }}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                <Typography color='#D5073C' variant='h5'>Create New Invoice</Typography>
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    <Button style={{ backgroundColor: 'black', textTransform: 'none', borderRadius: '30px', padding: '3px 75px', color: 'white', margin: '0 100px' }} onClick={handleOpenModel}>Create New Customer</Button>
                                    <Divider style={{ margin: '20px 120px 20px 120px' }} >OR</Divider>
                                    <label htmlFor="name" style={{ marginLeft: '3px', color: 'black' }}>Search Existing Client</label>
                                    <input type="text" id="name" className={classes.Simple_input} placeholder='search here...' />
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions style={{ margin: 'auto', paddingBottom: '20px' }}>
                                <Button onClick={handleClose} style={{ backgroundColor: 'black', textTransform: 'none', padding: '3px 40px', color: "white" }}>Cancel</Button>
                                <Button onClick={handleClose} autoFocus style={{ backgroundColor: '#D5073C', textTransform: 'none', padding: '3px 40px', color: "white" }}>Create</Button>
                            </DialogActions>
                        </Dialog>

                        {/* Model  */}
                        <Dialog
                            sx={{
                                "& .MuiDialog-container": {
                                    "& .MuiPaper-root": {
                                        width: "100%",
                                        maxWidth: "1200px",  // Set your width here
                                        height: "700px"
                                    },
                                },
                            }}
                            style={{ borderRadius: '30px' }}
                            open={openModel}
                            onClose={handleCloseModel}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                <Typography color='#D5073C' variant='h5'>Create new client</Typography>
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    <InvoiceModel />
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions style={{ margin: 'auto', paddingBottom: '20px' }}>
                                <Button onClick={handleCloseModel} style={{ backgroundColor: 'black', textTransform: 'none', padding: '3px 40px', color: "white" }}>Cancel</Button>
                                <Button onClick={handleCloseModel} autoFocus style={{ backgroundColor: '#D5073C', textTransform: 'none', padding: '3px 40px', color: "white" }}>Create</Button>
                            </DialogActions>
                        </Dialog>
                    </Box>
                </Grid>
            </div>
        </div>
    )
}

export default Estimates


