import React from 'react'
import { Typography, Box, Grid, Button, Select, MenuItem } from '@mui/material'
import { makeStyles } from '@mui/styles';
import source from './Source.js'
import Switch from '@mui/material/Switch';
import { red } from '@mui/material/colors';
import countries from '../../reuse/Counties.js'

const useStyles = makeStyles(() => ({
    style: {
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%', height: 'auto',
        backgroundColor: 'white',
        boxShadow: 24, padding: '15px',
        borderRadius: "10px"
    },
    Simple_input: {
        backgroundColor: "rgba(112,112,112,0.1)", border: 'none', outline: 'none', borderRadius: '10px',
        height: "40px", paddingLeft: "10px", fontSize: '17px'
    },
    TwoInput: {
        display: 'flex', flexDirection: 'column', width: '49%',
    },
    Single_input: {
        width: '100%', backgroundColor: "rgba(112,112,112,0.1)", border: 'none', outline: 'none', borderRadius: '10px',
        height: "40px", paddingLeft: "10px", fontSize: '17px',
    }
}))

const label = { inputProps: { 'aria-label': 'Switch demo' } };
const color = red[500];

const InvoiceModel = () => {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.style}>
                {/* Contant  */}
                <Grid container >
                    <Grid xs={6} p={1}>
                        <Typography variant="h6" color="initial">Client details</Typography>
                        <div style={{ display: 'flex', marginTop: '10px' }}>
                            <div className={classes.TwoInput} style={{ marginRight: '10px' }}>
                                <label htmlFor="fname">First Name</label>
                                <input type="text" id='fname' className={classes.Simple_input} placeholder="Enter first name" />
                            </div>
                            <div className={classes.TwoInput} >
                                <label htmlFor="lname">Last Name</label>
                                <input type="text" id='lname' className={classes.Simple_input} placeholder="Enter last name" />
                            </div>
                        </div>
                        <div display='flex' style={{ marginTop: '7px' }} >
                            <label htmlFor="CName">Company Name</label>
                            <input type="text" id='CName' className={classes.Single_input} placeholder="Enter Company" />
                        </div>
                        <div display='flex' style={{ marginTop: '7px' }}>
                            <label htmlFor="email">Email</label>
                            <input type="text" id='email' className={classes.Single_input} placeholder="Enter email" />
                        </div>
                        <div style={{ display: 'flex', marginTop: '10px' }}>
                            <div className={classes.TwoInput} style={{ marginRight: '10px' }}>
                                <label htmlFor="PPhone">Personal Phone</label>
                                <input type="number" id='PPhone' className={classes.Simple_input} placeholder="Enter Phone" />
                            </div>
                            <div className={classes.TwoInput} >
                                <label htmlFor="WPhone">Work Phone</label>
                                <input type="number" id='WPhone' className={classes.Simple_input} placeholder="Enter Work Phone" step="0.01" />
                            </div>
                        </div>
                        <div display='flex' style={{ marginTop: '7px' }}>
                            <label htmlFor="">Add source</label>
                            <Select
                                style={{
                                    backgroundColor: "rgba(112,112,112,0.1)", border: 'none', outline: 'none', borderRadius: '10px',
                                    height: "40px", fontSize: '17px', width: '100%', overflow: 'hidden', placeholder: "fsdmi"
                                }}
                                // value={Client.country}
                                name="source"
                            // onChange={handleInput}
                            >
                                {source.source.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name} >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '7px' }}>
                            Allow billing
                            <Switch {...label} style={{ color: "#ff1744" }} />
                        </div>
                        <div display='flex' style={{ marginTop: '7px' }}>
                            <label htmlFor="email">Email</label>
                            <input type="text" id='email' className={classes.Single_input} placeholder="Enter email" />
                        </div>

                    </Grid>
                    <Grid xs={6} p={1}>
                        <Typography variant="h6" color="initial">Client details</Typography>
                        <div display='flex' style={{ marginTop: '7px' }}>
                            <label htmlFor="email">Email</label>
                            <input type="text" id='email' className={classes.Single_input} placeholder="Enter email" />
                        </div>
                        <div style={{ display: 'flex', marginTop: '10px' }}>
                            <div className={classes.TwoInput} style={{ marginRight: '10px' }}>
                                <label htmlFor="City">City</label>
                                <input type="text" id='City' className={classes.Simple_input} placeholder="Enter City" />
                            </div>
                            <div className={classes.TwoInput} >
                                <label htmlFor="Region">Region</label>
                                <input type="text" id='Region' className={classes.Simple_input} placeholder="Enter Region" />
                            </div>
                        </div>
                        <div style={{ display: 'flex', marginTop: '10px' }}>
                            <div className={classes.TwoInput} style={{ marginRight: '10px' }}>
                                <label htmlFor="">Country</label>
                                <Select
                                    style={{
                                        backgroundColor: "rgba(112,112,112,0.1)", border: 'none', outline: 'none', borderRadius: '10px',
                                        height: "40px", fontSize: '17px', width: '100%', overflow: 'hidden', placeholder: "fsdmi"
                                    }}
                                    // value={Client.country}
                                    name="countries"
                                // onChange={handleInput}
                                >
                                    {countries.countries.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name} >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>
                            <div className={classes.TwoInput} >
                                <label htmlFor="code">Postal code</label>
                                <input type="text" id='code' className={classes.Simple_input} placeholder="Enter postal code" />
                            </div>
                        </div>
                        <div style={{ display: 'flex', marginTop: '10px' }}>
                            <div className={classes.TwoInput} style={{ marginRight: '10px' }}>
                                <label htmlFor="state">State</label>
                                <input type="text" id='state' className={classes.Simple_input} placeholder="Enter state" />
                            </div>
                            <div className={classes.TwoInput} >
                                <label htmlFor="unit">Unit</label>
                                <input type="text" id='unit' className={classes.Simple_input} placeholder="Enter unit" />
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Box style={{ width: "100%" }}>

                </Box>
            </Box>
        </div>
    )
}

export default InvoiceModel