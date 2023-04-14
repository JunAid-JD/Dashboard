import React, { useState } from "react";
import './New.css'
import { Typography, Box, Grid, Button, Select, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import countries from "./Counties";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import WorkOrderModel from "./WorkOrderMode";
// import { toast } from "react-toastify";

import text from "../../Images/text.png";
import call from "../../Images/call.png";
import chat from "../../Images/chatnew.png";

const useStyles = makeStyles(({ theme }) => ({
    Simple_input: {
        backgroundColor: "rgba(112,112,112,0.1)",
        border: "none",
        outline: "none",
        borderRadius: "10px",
        height: "40px",
        // paddingLeft: "10px",
        fontSize: "17px",
    },
    TwoInput: {
        display: "flex",
        flexDirection: "column",
        width: "48%",
    },
    // TwoInput: {
    //   display: "flex",
    //   flexDirection: "column",
    //   width: "100%",
    // },
    textarea: {
        backgroundColor: "rgba(112,112,112,0.1)",
        border: "none",
        outline: "none",
        borderRadius: "12px",
        height: "130px",
        // paddingLeft: "10px",
        fontSize: "17px",
        width: "100%",
        paddingTop: "10px",
        resize: "none",
    },
    date: {
        backgroundColor: "rgba(112,112,112,0.1)",
        border: "none",
        outline: "none",
        borderRadius: "10px",
        height: "40px",
        // paddingLeft: "10px",
        fontSize: "17px",
        "&:hover": {
            cursor: "pointer",
        },
    },
    upperClass: {
        display: "flex",
        justifyContent: "space-between",
        margin: "1rem 0"
    },
    AssignJob: {
        display: "flex",
        justifyContent: "space-between",
    },
    AssignJobIcons: {
        width: "115px",
        display: "flex",
        justifyContent: "space-between",
    },
    NotesTextarea: {
        backgroundColor: "rgba(112,112,112,0.1)",
        border: "none",
        outline: "none",
        borderRadius: "12px",
        height: "100px",
        // paddingLeft: "10px",
        fontSize: "17px",
        paddingTop: "10px",
        resize: "none",
    },
    file: {
        borderStyle: "dashed",
        padding: "34px 0",
        marginTop: "3px",
        borderRadius: "10px",
    },
    "file::file-selector-button ": {
        backgroundColor: "black",
    },
    root: {
        "& .MuiDataGrid-columnHeaders": {
            fontSize: 17.8,
        },
        "& .MuiDataGrid-row Mui-selected": {
            backgroundColor: "red",
        },
    },
    "@global": {
        "*::-webkit-scrollbar": {
            width: "0px",
            height: "0",
        },
        "*::-webkit-scrollbar-thumb": {
            width: "0rem",
            backgroundColor: "#D5073C",
            borderRadius: "0rem",
        },
    },
}));

const members = ["Yemen", "Zambia", "Zimbabwe", "Åland Islands"];

const New = () => {
    const classes = useStyles();
    const [member, setMember] = React.useState("");
    // Model State
    const [open, setOpen] = React.useState(false);
    const [Reminder, setReminder] = React.useState(false);
    const [Invoice, setInvoice] = React.useState(false);

    // Input Data State
    const [Client, setClient] = useState({
        Cname: "",
        Company: "",
        email: "",
        Phone: "",
        address: "",
        City: "",
        Regin: "",
        Postal_code: "",
        country: "",
        member: "",
        Description: "",
        sDate: "",
        eDate: "",
        sTime: "",
        eTime: "",
        notes: "",
    });
    // Handle Input Data Funtion
    let data, value;
    const handleInput = (e) => {
        data = e.target.name;
        value = e.target.value;
        setClient({ ...Client, [data]: value });
    };

    const handleMember = (event) => {
        setMember(event.target.value);
    };
    //Model Open Close Functions
    const handleClickOpen = () => {
        if (
            Client.Cname === "" ||
            Client.Company === "" ||
            Client.email === "" ||
            Client.Phone === "" ||
            Client.address === "" ||
            Client.City === "" ||
            Client.Regin === "" ||
            Client.Postal_code === "" ||
            Client.country === "" ||
            Client.member === "" ||
            Client.sDate === "" ||
            Client.eDate === "" ||
            Client.sTime === "" ||
            Client.eDate === ""
        ) {
            setOpen(false);
            // toast.error("Kindly Filled Complete Form.", {
            //     position: "top-center",
            //     autoClose: 3000,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     theme: "light",
            // });
        } else {
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div >
            <Box className={classes.upperClass}>
                <Box>
                    <Typography variant="h5" color="initial" fontWeight={600}>
                        Let's add a new Work Order.
                    </Typography>
                    <Typography>Fill up all details and get your job done.</Typography>
                </Box>
                <Box></Box>
            </Box>
            <div className="new">
                <Box className="MainBox">
                    <Typography variant="h5" color="#D5073C" fontWeight={600}>
                        Client detail
                    </Typography>
                    <label htmlFor="name">Client Name</label>
                    <input
                        type="text"
                        id="name"
                        className={classes.Simple_input}
                        placeholder="Enter Name"
                        value={Client.Cname}
                        name="Cname"
                        onChange={handleInput}
                    />
                    <label htmlFor="Company_name">Company Name</label>
                    <input
                        type="text"
                        id="Company_name"
                        className={classes.Simple_input}
                        placeholder="Enter Company"
                        value={Client.Company}
                        name="Company"
                        onChange={handleInput}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className={classes.Simple_input}
                        placeholder="Enter Email"
                        value={Client.email}
                        name="email"
                        onChange={handleInput}
                    />
                    <label htmlFor="phone">Personal Phone</label>
                    <input
                        type="number"
                        id="phone"
                        className={classes.Simple_input}
                        placeholder="Enter Phone"
                        value={Client.Phone}
                        name="Phone"
                        onChange={handleInput}
                    />
                </Box>

                <Box
                    className="MainBox"

                >
                    <Typography variant="h5" color="#D5073C" fontWeight={600}>
                        Service location
                    </Typography>
                    <label htmlFor="Address">Address</label>
                    <input
                        type="text"
                        id="Address"
                        className={classes.Simple_input}
                        placeholder="Enter address"
                        value={Client.address}
                        name="address"
                        onChange={handleInput}
                    />
                    <div className="input-date" >
                        <div className={classes.TwoInput}>
                            <label htmlFor="City">City</label>
                            <input
                                type="text"
                                id="City"
                                className={classes.Simple_input}
                                placeholder="Enter City"
                                value={Client.City}
                                name="City"
                                onChange={handleInput}
                            />
                        </div>
                        <div className={classes.TwoInput} >
                            <label htmlFor="Regin">Region</label>
                            <input
                                type="text"
                                id="Regin"
                                className={classes.Simple_input}
                                placeholder="Enter Regin"
                                value={Client.Regin}
                                name="Regin"
                                onChange={handleInput}
                            />
                        </div>
                    </div>
                    <div className="input-date" >
                        <div className={classes.TwoInput}>
                            <label htmlFor="">Postal code</label>
                            <input
                                type="number"
                                className={classes.Simple_input}
                                placeholder="Enter Postal code"
                                value={Client.Postal_code}
                                name="Postal_code"
                                onChange={handleInput}
                            />
                        </div>
                        <div className={classes.TwoInput} >
                            <label htmlFor="">Country</label>
                            <Select
                                style={{
                                    backgroundColor: "rgba(112,112,112,0.1)",
                                    border: "none",
                                    outline: "none",
                                    borderRadius: "10px",
                                    height: "40px",
                                    fontSize: "17px",
                                    maxWidth: "100%",
                                    overflow: "hidden",
                                }}
                                value={Client.country}
                                name="country"
                                onChange={handleInput}
                            >
                                {countries.countries.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <Box style={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button
                            style={{
                                color: "white",
                                textTransform: "none",
                                backgroundColor: "black",
                                borderRadius: "30px",
                                width: "120px",
                                padding: "2px",
                                marginTop: "12px",
                            }}
                        >
                            Add more
                        </Button>
                    </Box>
                </Box>

                <Box
                    className="MainBox"
                >
                    <Box>
                        <Box className={classes.AssignJob}>
                            <Typography variant="h5" color="initial" fontWeight={600}>
                                Assign job
                            </Typography>
                            <Box className={classes.AssignJobIcons}>
                                <img
                                    src={text}
                                    alt=""
                                    style={{ width: "30px", height: "30px", cursor: "pointer" }}
                                />
                                <img
                                    src={call}
                                    alt=""
                                    style={{ width: "30px", height: "30px", cursor: "pointer" }}
                                />
                                <img
                                    src={chat}
                                    alt=""
                                    style={{ width: "30px", height: "30px", cursor: "pointer" }}
                                />
                            </Box>
                        </Box>
                        <div className={classes.TwoInput}>
                            <label htmlFor="">Select member</label>
                            <Select
                                style={{
                                    backgroundColor: "rgba(112,112,112,0.1)",
                                    border: "none",
                                    outline: "none",
                                    borderRadius: "10px",
                                    height: "40px",
                                    fontSize: "17px",
                                    maxWidth: "100%",
                                    overflow: "hidden",
                                }}
                                value={Client.member}
                                name="member"
                                onChange={handleInput}
                            >
                                {members.map((member) => (
                                    <MenuItem key={member} value={member}>
                                        {member}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                    </Box>
                </Box>

                <Box className="MainBox">
                    <Typography variant="h5" color="#D5073C" fontWeight={600}>
                        Job detail
                    </Typography>
                    <label for="w3review">Description</label>
                    <textarea
                        id="w3review"
                        className={classes.textarea}
                        placeholder="Write here"
                        value={Client.Description}
                        name="Description"
                        onChange={handleInput}
                    />
                </Box>

                <Box
                    className="MainBox"  >
                    <Typography variant="h5" color="#D5073C" fontWeight={600}>
                        Schedule
                    </Typography>
                    <div className="input-date" >
                        <div className={classes.TwoInput}>
                            <label htmlFor="">Enter start date</label>
                            <input
                                type="date"
                                className={classes.date}
                                name="sDate"
                                value={Client.sDate}
                                onChange={handleInput}
                            />
                        </div>
                        <div className={classes.TwoInput} >
                            <label htmlFor="">Enter start time</label>
                            <input
                                type="time"
                                className={classes.Simple_input}
                                name="sTime"
                                value={Client.sTime}
                                onChange={handleInput}
                            />
                        </div>
                    </div>
                    <div className="input-date" >
                        <div className={classes.TwoInput}>
                            <label htmlFor="">Enter end date</label>
                            <input
                                type="date"
                                className={classes.date}
                                name="eDate"
                                value={Client.eDate}
                                onChange={handleInput}
                            />
                        </div>
                        <div className={classes.TwoInput} >
                            <label htmlFor="">Enter end time</label>
                            <input
                                type="time"
                                className={classes.Simple_input}
                                name="eTime"
                                value={Client.eTime}
                                onChange={handleInput}
                            />
                        </div>
                    </div>
                </Box>

                <Box
                    className="MainBox"
                >
                    <Typography variant="h5" color="initial" fontWeight={600}>
                        Billing
                    </Typography>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    style={{ color: "#263238" }}
                                    onChange={(e) => setInvoice(e.target.checked)}
                                />
                            }
                            label="Allow Auto Invoicing"
                        />
                        <FormControlLabel
                            control={<Checkbox style={{ color: "#263238" }} />}
                            onChange={(e) => setReminder(e.target.checked)}
                            label="Allow Invoice Reminders"
                        />
                    </FormGroup>
                </Box>

                <Box
                    className="MainBox "
                    id="workordernotes"
                >
                    <Box
                        style={{ display: "flex", flexDirection: "column", width: "100%" }}
                    >
                        <label for="notes">Work Order notes:</label>
                        <textarea
                            id="notes"
                            className={classes.NotesTextarea}
                            placeholder="Any notes for Work Order"
                            name="notes"
                            value={Client.notes}
                            onChange={handleInput}
                        />
                    </Box>
                    <Box
                        style={{

                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                        }}
                    >
                        <label htmlFor="name">Work Order Attachments:</label>
                        <input
                            type="file"
                            id="name"
                            className={classes.file}
                            placeholder="Enter Name"
                            multiple
                        />
                    </Box>
                </Box>

            </div >
            <Grid container>
                <Grid xs={10} style={{ display: "flex", justifyContent: "center" }}>
                    <Box
                        className="MainBox" id="newbtns"

                    >
                        {/* <Link to="/Work_Order" style={{ textDecoration: "none" }}> */}
                        <Button
                            style={{
                                backgroundColor: "#0B181C",
                                textTransform: "none",
                                color: "white",
                                padding: "5px 30px",
                                marginRight: "5px",
                            }}
                        >
                            Cancel
                        </Button>
                        {/* </Link> */}
                        <Button
                            style={{
                                backgroundColor: "#D5073C",
                                textTransform: "none",
                                color: "white",
                                padding: "5px 30px",
                                marginLeft: "5px",
                            }}
                            onClick={handleClickOpen}
                        >
                            Create
                        </Button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            sx={{
                                "& .MuiDialog-container": {
                                    "& .MuiPaper-root": {
                                        width: "100%",
                                        minWidth: "65%",
                                        minHeight: "600px",
                                    },
                                },
                            }}
                        >
                            <DialogTitle>
                                <Typography variant="h5" fontWeight={600} color="#D5073C">
                                    Confirm Your Details
                                </Typography>
                            </DialogTitle>
                            <DialogContent>
                                <WorkOrderModel
                                    ClientData={Client}
                                    Reminder={Reminder}
                                    Incoice={Invoice}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button
                                    onClick={handleClose}
                                    style={{
                                        backgroundColor: "#0B181C",
                                        textTransform: "none",
                                        color: "white",
                                        padding: "5px 30px",
                                        marginRight: "5px",
                                    }}
                                >
                                    Return back
                                </Button>
                                <Button
                                    onClick={handleClose}
                                    style={{
                                        backgroundColor: "#D5073C",
                                        textTransform: "none",
                                        color: "white",
                                        padding: "5px 30px",
                                        marginLeft: "5px",
                                    }}
                                >
                                    Confirm
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default New;
