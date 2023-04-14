import React, { useState } from "react";
import { Box, Typography, Button, Grid } from '@mui/material'
import ReturnBtn from '../../reuse/ReturnBtn'
import Action from '../../reuse/Action'
import { makeStyles } from '@mui/styles';
import { DataGrid } from '@mui/x-data-grid';
import { FileUploader } from "react-drag-drop-files";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import { Link } from 'react-router-dom'

const useStyles = makeStyles(() => ({
    BillBox: {
        backgroundColor: "rgba(112,112,112,0.1)", width: '700px', padding: '10px', borderRadius: '8px',
        display: 'flex', marginTop: '10px'
    },
    BillBoxLeft: {
        width: "49%", display: 'flex', flexDirection: 'column',
    },
    BillBoxMidle: {
        width: "20%", display: 'flex', flexDirection: 'column',
    },
    Simple_input: {
        backgroundColor: "rgba(112,112,112,0.1)", border: 'none', outline: 'none', borderRadius: '10px',
        height: "40px", paddingLeft: "10px", fontSize: '17px'
    },
    textarea: {
        backgroundColor: "rgba(112,112,112,0.1)", border: 'none', outline: 'none', borderRadius: '10px',
        height: "110px", paddingLeft: "10px", fontSize: '17px', width: '100%', paddingTop: "10px", resize: 'none'
    },
    Textarea_input: {
        backgroundColor: "rgba(112,112,112,0.1)", border: 'none', outline: 'none', borderRadius: '10px',
        height: "100px", paddingLeft: "10px", fontSize: '17px'
    },
    textarea: {
        backgroundColor: "rgba(112,112,112,0.1)", border: 'none', outline: 'none', borderRadius: '12px',
        height: "130px", paddingLeft: "10px", fontSize: '17px', width: '100%', paddingTop: "10px", resize: 'none'
    },
    root: {
        "& .MuiDataGrid-columnHeaders": {
            fontSize: 17.8,
        },
        "& .MuiDataGrid-row Mui-selected": {
            backgroundColor: "red"
        }
    },
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0px',
            height: '10px',
        },
        '*::-webkit-scrollbar-thumb': {
            width: '0rem',
            backgroundColor: '#D5073C',
            borderRadius: "2rem",
        },
    },
}))

//Max height menu
const options = [
    { title: 'Preview', route: '' },
    { title: 'Download', route: '' },
    { title: 'Signature', route: '' },
    { title: 'Request signature', route: '' },
    { title: 'Auto invoicing', route: '' },
    { title: 'Delete', route: '' },
    { title: 'Batch invoicing', route: '' },
];
const fileTypes = ["JPG", "PNG", "GIF"];
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const CreateEstimate = () => {
    const classes = useStyles();

    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    //columns
    const columns = [
        { field: 'Item', headerName: 'Item', width: 300 },
        { field: 'Quantity', headerName: 'Quantity', width: 140 },
        { field: 'Price', headerName: 'Price', width: 120 },
        { field: 'Cost', headerName: 'Cost', width: 120 },
        { field: 'Amount', headerName: 'Amount', width: 160 },
        { field: 'Taxable', headerName: 'Taxable', width: 140 },
        {
            field: 'Edit', headerName: 'Edit',
            renderCell: (cellvalues) => {
                return (<Button size="small" style={{ backgroundColor: "#0B181C", textTransform: 'none', color: "white", borderRadius: '30px', padding: "2px 10px" }} >Edit</Button>)
            }, width: 100
        },
        {
            field: 'Delete', headerName: 'Delete',
            renderCell: (cellvalues) => {
                return (<Button size="small" style={{ backgroundColor: "#0B181C", textTransform: 'none', color: "white", borderRadius: '30px', padding: "2px 20px" }} >Delete</Button>)
            }, width: 130
        },
    ];

    //rows
    const rows = [
        { id: 1, Item: "Tree removing", Quantity: '2', Created: "excepturi", Price: 'null', Cost: 'dolor', Amount: 'pa', Taxable: 'gfslfhd' },
        { id: 2, Item: "Tree removing", Quantity: '2', Created: "excepturi", Price: 'null', Cost: 'dolor', Amount: 'pa', Taxable: 'gfslfhd' },
        { id: 3, Item: "Tree removing", Quantity: '2', Created: "excepturi", Price: 'null', Cost: 'dolor', Amount: 'pa', Taxable: 'gfslfhd' },
    ];

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // Child DialogBox
    const [CBopen, setCBOpen] = React.useState(false);
    const handleCBOpen = () => {
        setCBOpen(true);
    };
    const handleCBClose = () => {
        setCBOpen(false);
    };

    //Send DialogBox
    const [SendOpen, setSendOpen] = React.useState(false);
    const handleSend = () => {
        setSendOpen(true);
    };
    const handleSendClose = () => {
        setSendOpen(false);
    };


    return (
        <div style={{ width: '81%', float: 'right', position: "absolute", top: 0, left: 0, margin: '5% 18.5%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '12px 0' }}>
                <Typography variant="h5" color="initial">Estimates</Typography>
                {/* <Link to='/Estimates' style={{ textDecoration: 'none' }}> */}
                <ReturnBtn />
                {/* </Link> */}
            </Box>
            <Box className="MainBox">
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" color="initial" >Client name: James Bill</Typography>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', width: "430px" }}>
                        <Button style={{ color: 'white', backgroundColor: '#05BB3C', padding: '2px 20px', borderRadius: '30px', textTransform: 'none', boxShadow: '0 0 2px 0.3px #CCCCCC' }}>Approve</Button>
                        <Button style={{ color: 'white', backgroundColor: '#0B181C', padding: '2px 20px', borderRadius: '30px', textTransform: 'none', boxShadow: '0 0 2px 0.3px #CCCCCC' }} onClick={handleClickOpen}>
                            <img src="\Assets\Plus.png" alt="" width={12} style={{ marginRight: '6px' }} />
                            Add item
                        </Button>
                        <Action options={options} />
                        <Button style={{ color: 'white', backgroundColor: '#0B181C', padding: '2px 20px', borderRadius: '30px', textTransform: 'none', boxShadow: '0 0 2px 0.3px #CCCCCC' }} onClick={handleSend}>Send</Button>
                    </Box>
                </Box>
                <Box className={classes.BillBox}>
                    <Box className={classes.BillBoxLeft}>
                        <Typography variant="h6" color="initial">Bill to:</Typography>
                        <Typography variant="" color="initial">name</Typography>
                        <Typography variant="" color="initial">Address</Typography>
                        <Typography variant="" color="initial">Email</Typography>
                        <Typography variant="" color="initial">Number</Typography>

                    </Box>
                    <Box className={classes.BillBoxMidle}>
                        <Typography variant="h6" color="initial" fontWeight={600}>Estimate: </Typography>
                        <Typography variant="" color="initial">Created:  </Typography>
                        <Typography variant="" color="initial">Approved: </Typography>
                        <Typography variant="" color="initial">Status:
                        </Typography>
                    </Box>
                    <Box className={classes.BillBoxRight}>
                        <Typography variant="h6" color="initial" fontWeight={600}>1</Typography>
                        <p>02-12-2022</p>
                        <p>No</p>
                        <Button style={{ backgroundColor: '#FF2929', color: 'white', padding: '2px 12px', textTransform: 'none' }}>Un paid
                            <img src="\Assets\down.png" alt="" width={14} style={{ marginLeft: '7px' }} />
                        </Button>
                    </Box>
                </Box>
                <Box style={{ marginTop: '10px' }}>
                    <div style={{ height: 300, width: '100%' }}>
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
            </Box>
            <Grid container style={{ marginTop: '20px' }}>
                <Grid xs={8}>
                    <Box className="MainBox" style={{ display: 'flex', flexDirection: 'row' }}>
                        <Box style={{ width: '40%' }}>
                            <div style={{ marginLeft: "10px", display: 'flex', flexDirection: 'column', width: '220px' }}>
                                <label htmlFor="Total">Total</label>
                                <input type="text" id='Total' className={classes.Simple_input} placeholder="50.00" />
                            </div>
                            <div style={{ marginLeft: "10px", display: 'flex', flexDirection: 'column', width: '220px', marginTop: '10px' }}>
                                <label htmlFor="optional">With optional</label>
                                <input type="text" id='optional' className={classes.Simple_input} placeholder="50.00" />
                            </div>
                        </Box>
                        <Box style={{ width: '30%' }}>
                            <div style={{ marginLeft: "10px", display: 'flex', flexDirection: 'column', width: '220px' }}>
                                <label htmlFor="STotal">Sub total:</label>
                                <input type="text" id='STotal' className={classes.Simple_input} placeholder="50.00" />
                            </div>
                            <div style={{ marginLeft: "10px", display: 'flex', flexDirection: 'column', width: '220px', marginTop: '10px' }}>
                                <label htmlFor="Discount">Discount</label>
                                <input type="text" id='Discount' className={classes.Simple_input} placeholder="50.00" />
                            </div>
                            <div style={{ marginLeft: "10px", display: 'flex', flexDirection: 'column', width: '220px', marginTop: '10px' }}>
                                <label htmlFor="Taxable">Taxable</label>
                                <input type="text" id='Taxable' className={classes.Simple_input} placeholder="50.00" />
                            </div>
                            <div style={{ marginLeft: "10px", display: 'flex', flexDirection: 'column', width: '220px', marginTop: '10px' }}>
                                <label htmlFor="Tax">Tax</label>
                                <input type="text" id='Tax' className={classes.Simple_input} placeholder="50.00" />
                            </div>
                        </Box>
                        <Box style={{ width: '30%' }}>
                            <div style={{ marginLeft: "10px", display: 'flex', flexDirection: 'column', width: '220px', }}>
                                <label htmlFor="Taxs%">Taxs%</label>
                                <input type="text" id='Taxs%' className={classes.Simple_input} placeholder="50.00" />
                            </div>
                            <div style={{ marginLeft: "10px", display: 'flex', flexDirection: 'column', width: '220px', marginTop: '10px' }}>
                                <label htmlFor="Deposit">Deposit</label>
                                <input type="text" id='Deposit' className={classes.Simple_input} placeholder="0.00" />
                            </div>
                            <div style={{ marginLeft: "10px", display: 'flex', flexDirection: 'column', width: '220px', marginTop: '10px' }}>
                                <label htmlFor="cost">Item cost</label>
                                <input type="text" id='cost' className={classes.Simple_input} placeholder="0" />
                            </div>
                        </Box>
                    </Box>
                    <Box className="MainBox" style={{ marginTop: '20px', display: 'flex', flexDirection: 'row' }}>
                        <Box style={{ width: '33%' }}>
                            <div style={{ marginLeft: "10px", display: 'flex', flexDirection: 'column', width: '220px', marginTop: '10px' }}>
                                <label htmlFor="Deposit">Deposit</label>
                                <input type="text" id='Deposit' className={classes.Simple_input} placeholder="0.00" />
                                <Typography variant="" color="initial" fontSize={12} mt={1}><span style={{ textDecoration: 'underline', color: "red", cursor: 'pointer' }}>Click here</span> to allow online payment</Typography>
                            </div>
                        </Box>
                        <Box style={{ width: '33%' }}>
                            <div style={{ marginLeft: "10px", display: 'flex', flexDirection: 'column', width: '220px', marginTop: '10px' }}>
                                <label htmlFor="Deposit">Deposit</label>
                                <input type="text" id='Deposit' className={classes.Simple_input} placeholder="0.00" />
                                <Button style={{ color: 'white', backgroundColor: "#0B181C", width: '40px', borderRadius: '30px', padding: '1px 8px', marginTop: "7px", marginLeft: '71%', textTransform: 'none' }} >Add</Button>
                            </div>
                        </Box>
                        <Box style={{ width: '33%' }}>
                            <div style={{ marginLeft: "10px", display: 'flex', flexDirection: 'column', width: '220px', marginTop: '10px' }}>
                                <label htmlFor="Deposit">Signatures</label>
                                <input type="text" id='Deposit' className={classes.Simple_input} placeholder="0.00" />
                                <Button style={{ color: 'white', backgroundColor: "#0B181C", width: '40px', borderRadius: '30px', padding: '1px 50px', marginTop: "7px", marginLeft: '54%', textTransform: 'none' }} >Sign</Button>
                            </div>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={4}>
                    <Box className="MainBox" style={{ marginLeft: '20px', height: '444px' }}>
                        <Box style={{ width: '100%' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: '10px' }}>
                                <label htmlFor="notes">Estimate notes</label>
                                <textarea id="notes" name="w3review" className={classes.textarea} placeholder="Any notes for this estimate" />
                            </div>
                        </Box>
                        <Box style={{ marginTop: '20px' }}>
                            <FileUploader handleChange={handleChange} name="file" types={fileTypes} style={{ height: '200px' }}></FileUploader>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Box className='MainBox' style={{ display: 'flex', flexDirection: 'row', width: '500px', justifyContent: 'center', margin: '20px auto' }}>
                <Button style={{ backgroundColor: "#0B181C", textTransform: 'none', color: "white", padding: '5px 30px', marginRight: '5px', textTranform: 'none' }}>Cancel</Button>
                <Button style={{ backgroundColor: "#D5073C", textTransform: 'none', color: "white", padding: '5px 30px', marginLeft: '5px', textTranform: 'none' }} >Submit</Button>
            </Box>
            {/* Dialog */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <Typography variant="h6" color="#D5073C">Add job items</Typography>
                </DialogTitle>
                <DialogContent>
                    <Box style={{ width: "400px", display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="Items">Items name</label>
                        <input type="text" id="Items" className={classes.Simple_input} placeholder='Enter name' />
                    </Box>
                </DialogContent>
                <DialogActions style={{ margin: 'auto', paddingBottom: '20px' }}>
                    <Button onClick={handleClose} style={{ backgroundColor: 'black', textTransform: 'none', padding: '3px 40px', color: "white" }}>Cancel</Button>
                    <Button onClick={handleCBOpen} autoFocus style={{ backgroundColor: '#D5073C', textTransform: 'none', padding: '3px 40px', color: "white" }}>Next</Button>
                </DialogActions>
            </Dialog>
            {/* Sub Dialog */}
            <Dialog
                open={CBopen}
                onClose={handleCBClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    <Typography variant="h6" color="#D5073C">Add job items</Typography>
                </DialogTitle>
                <DialogContent>
                    <Box style={{ width: "470px", display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="Items">Items name</label>
                        <input type="text" id="Items" className={classes.Simple_input} placeholder='Enter name' />
                    </Box>
                    <Box style={{ display: 'flex', flexDirection: 'row', marginTop: '8px', justifyContent: 'space-between' }}>
                        <Box style={{ display: 'flex', flexDirection: 'column' }}>
                            <label htmlFor="Quantity">Quantity</label>
                            <input type="text" id="Quantity" className={classes.Simple_input} placeholder='Enter Quantity' style={{ width: '100%' }} />
                        </Box>
                        <Box style={{ display: 'flex', flexDirection: 'column' }}>
                            <label htmlFor="Price">Price</label>
                            <input type="text" id="Price" className={classes.Simple_input} placeholder='Enter Price' />
                        </Box>
                    </Box>
                    <Box style={{ display: 'flex', flexDirection: 'row', marginTop: '8px', justifyContent: 'space-between' }}>
                        <Box style={{ display: 'flex', flexDirection: 'column' }}>
                            <label htmlFor="Mackup">Mackup</label>
                            <input type="text" id="Mackup" className={classes.Simple_input} placeholder='Enter Mackup' style={{ width: '100%' }} />
                        </Box>
                        <Box style={{ display: 'flex', flexDirection: 'column' }}>
                            <label htmlFor="Cost">Cost</label>
                            <input type="text" id="Cost" className={classes.Simple_input} placeholder='Enter Cost' style={{ width: '100%' }} />
                        </Box>
                    </Box>
                    <Box style={{ display: 'flex', flexDirection: 'column', marginTop: '8px' }}>
                        <label htmlFor="service">Example service line item</label>
                        <textarea id="service" className={classes.textarea} placeholder="Write here" name='Description' />
                    </Box>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '7px' }}>
                        Allow billing
                        <Switch {...label} style={{ color: "#ff1744" }} />
                    </div>
                </DialogContent>
                <DialogActions style={{ margin: 'auto', paddingBottom: '20px' }}>
                    <Button onClick={handleCBClose} style={{ backgroundColor: 'black', textTransform: 'none', padding: '3px 40px', color: "white" }}>Cancel</Button>
                    <Button onClick={() => { handleCBClose(); handleClose(); }} autoFocus style={{ backgroundColor: '#D5073C', textTransform: 'none', padding: '3px 40px', color: "white" }}>Next</Button>
                </DialogActions>
            </Dialog>

            {/* Send */}
            <Dialog
                open={SendOpen}
                onClose={handleSendClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description" >
                <DialogTitle id="alert-dialog-title">
                    <Typography variant="h6" color="#D5073C">Send estimate</Typography>
                </DialogTitle>
                <DialogContent>
                    <Box style={{ width: "400px", display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="From">From</label>
                        <input type="email" id="From" className={classes.Simple_input} placeholder='Enter email' />
                    </Box>
                    <Box style={{ width: "400px", display: 'flex', flexDirection: 'column', marginTop: '4px' }}>
                        <label htmlFor="To">To</label>
                        <input type="email" id="To" className={classes.Simple_input} placeholder='Enter email' />
                    </Box>
                    <Box style={{ width: "400px", display: 'flex', flexDirection: 'column', marginTop: '4px' }}>
                        <label htmlFor="CC">CC</label>
                        <input type="text" id="CC" className={classes.Simple_input} placeholder='Enter email' />
                    </Box>
                    <Box style={{ width: "400px", display: 'flex', flexDirection: 'column', marginTop: '4px' }}>
                        <label htmlFor="Phone">Phone number</label>
                        <input type="text" id="Phone" className={classes.Simple_input} placeholder='Enter phone number' />
                    </Box>
                    <Box style={{ display: 'flex', flexDirection: 'column', marginTop: '8px' }}>
                        <label htmlFor="service">Message</label>
                        <textarea id="service" className={classes.textarea} placeholder="Write here..." name='Description' />
                    </Box>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox style={{ color: "#263238" }} />} label="Allow Client online" />
                        <FormControlLabel control={<Checkbox style={{ color: "#263238" }} />} label="Allow client pay with cash or check" />
                        <FormControlLabel control={<Checkbox style={{ color: "#263238" }} />} label="Request a signature" />
                    </FormGroup>
                </DialogContent>
                <DialogActions style={{ margin: 'auto', paddingBottom: '20px' }}>
                    <Button onClick={handleSendClose} style={{ backgroundColor: 'black', textTransform: 'none', padding: '3px 40px', color: "white" }}>Cancel</Button>
                    <Button onClick={handleSendClose} autoFocus style={{ backgroundColor: '#D5073C', textTransform: 'none', padding: '3px 40px', color: "white" }}>Next</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default CreateEstimate