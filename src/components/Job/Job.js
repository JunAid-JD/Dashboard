import React, { useState } from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { DataGrid } from "@mui/x-data-grid";
import Card from "../../reuse/Card";
import Action from "../../reuse/Action.js";

import { Link } from "react-router-dom";

import QueueJob from "./QueueJob";
import SentJob from "./SentJob";
import DraftJob from "./DraftJob";
import ScrollContainer from "react-indiana-drag-scroll";

const useStyles = makeStyles(({ theme }) => ({
    input: {
        backgroundColor: "rgba(112,112,112,0.1)",
        border: "none",
        outline: "none",
        width: "300px",
        height: "35px",
        borderRadius: "10px",
        paddingLeft: "34px",
        fontSize: "15px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "9px 9px",
        backgroundSize: "18px",
    },
    view_box: {
        display: "flex",
        width: "100%",
        paddingBottom: "30px",
    },
    properties: {
        display: "flex",
        justifyContent: "space-between",
    },
    "@global": {
        "*::-webkit-scrollbar": {
            width: "4px",
            height: "10px",
        },
        "*::-webkit-scrollbar-thumb": {
            width: "2rem",
            backgroundColor: "#D5073C",
            borderRadius: "2rem",
        },
    },
    root: {
        "& .MuiDataGrid-columnHeaders": {
            fontSize: 17.8,
        },
        "& .MuiDataGrid-row Mui-selected": {
            backgroundColor: "red",
        },
    },
    Simple_input: {
        backgroundColor: "rgba(112,112,112,0.1)",
        border: "none",
        outline: "none",
        borderRadius: "10px",
        height: "40px",
        paddingLeft: "10px",
        fontSize: "17px",
        width: "100%",
    },
}));

//columns
const columns = [
    { field: "Job_Id", headerName: "Job ID", width: 130 },
    { field: "Client", headerName: "Client", width: 200 },
    { field: "Tag", headerName: "Tag", width: 150 },
    { field: "Job_type", headerName: "Job Type", width: 150 },
    { field: "Schedule", headerName: "Schedule", width: 210 },
    { field: "Phone", headerName: "Phone", width: 150 },
    {
        field: "Tech",
        headerName: "Tech",
        renderCell: (cellvalues) => {
            return (
                <Button
                    size="small"
                    style={{
                        backgroundColor: "#131313",
                        textTransform: "none",
                        color: "white",
                    }}
                >
                    Lindsey peek
                </Button>
            );
        },
        width: 150,
    },
    { field: "Address", headerName: "Address", width: 230 },
    {
        field: "Edit",
        headerName: "Edit",
        renderCell: (cellvalues) => {
            return (
                <Button
                    size="small"
                    style={{
                        backgroundColor: "#0B181C",
                        color: "white",
                        textTransform: "none",
                        borderRadius: 40,
                        padding: "2px 10px",
                    }}
                >
                    Edit
                </Button>
            );
        },
        width: 100,
    },
    {
        field: "Delete",
        headerName: "Delete",
        renderCell: (cellvalues) => {
            return (
                <Button
                    size="small"
                    style={{
                        backgroundColor: "#0B181C",
                        color: "white",
                        textTransform: "none",
                        borderRadius: 40,
                        padding: "2px 20px",
                    }}
                >
                    Delete
                </Button>
            );
        },
        width: 130,
    },
];

//rows
const rows = [
    {
        id: 1,
        Job_Id: "23127",
        Client: "skdfj sfb",
        Tag: "execturi",
        Job_type: "Example",
        Schedule: "Fri Jul 29,2022-10:00AM",
        Phone: "232-242-4242",
        Address: "78367 Zackery Square",
    },
    {
        id: 2,
        Job_Id: "23127",
        Client: "skdfj sfb",
        Tag: "execturi",
        Job_type: "Example",
        Schedule: "Fri Jul 29,2022-10:00AM",
        Phone: "232-242-4242",
        Address: "78367 Zackery Square",
    },
    {
        id: 3,
        Job_Id: "23127",
        Client: "skdfj sfb",
        Tag: "execturi",
        Job_type: "Example",
        Schedule: "Fri Jul 29,2022-10:00AM",
        Phone: "232-242-4242",
        Address: "78367 Zackery Square",
    },
];

//Max height menu
const options = [
    { title: "Create job", route: "/New" },
    { title: "Edit job", route: "/Edit_Job" },
    { title: "Send reminder", route: "" },
    { title: "Message customer", route: "" },
    { title: "Setup reminders", route: "" },
    { title: "Close job", route: "" },
];

const Job = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [index, setIndex] = useState(0);

    return (
        <div

        >
            <Typography
                variant="h5"
                color="initial"
                fontWeight={600}
                style={{ margin: "1rem 0" }}
            >
                Job
            </Typography>
            <ScrollContainer horizontal={true}>
                <Box className={classes.view_box} style={{ width: "80vw" }}>
                    <Card
                        heading="Today Job"
                        total="0"
                        percentage="41.3"
                        percentageColor="#05BB3C"
                    />
                    <Card
                        heading="Upcoming Job"
                        total="0"
                        percentage="9"
                        bgcolor="#131313"
                        color="white"
                        percentageColor="#FF2929"
                    />
                    <Card
                        heading="Req. Invoicing"
                        total="0"
                        percentage="11"
                        percentageColor="#05BB3C"
                    />
                    <Card
                        heading="Unscheduled"
                        total="0"
                        percentage="11"
                        percentageColor="#05BB3C"
                    />
                    <Card
                        heading="Action Req."
                        total="0"
                        percentage="11"
                        percentageColor="#05BB3C"
                    />
                    <Card
                        heading="Achived"
                        total="0"
                        percentage="11"
                        percentageColor="#05BB3C"
                    />
                </Box>
            </ScrollContainer>

            <div

            >
                <Grid>
                    <Box
                        sx={{
                            boxShadow: 3,
                            height: "550px",
                            bgcolor: (theme) =>
                                theme.palette.mode === "dark" ? "#101010" : "#fff",
                            color: (theme) =>
                                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                            borderRadius: 2,
                            fontSize: "0.875rem",
                            fontWeight: "700",
                            p: 2.5,
                        }}
                    >
                        <Box
                            style={{ display: "flex", alignItems: "center", width: "100%", flexWrap: "wrap" }}
                        >
                            <Box flex="1">
                                <Typography variant="h5" color="#D5073C" fontWeight={600}>
                                    Your Jobs
                                </Typography>
                                <Typography color="#D5073C">Your have 3 customers</Typography>
                            </Box>

                            <div textAlign="right" style={{ display: "flex", alignItems: "center", gap: "0 .5rem", flexWrap: "wrap" }}>
                                {/* <Link to="/New" style={{ textDecoration: "none" }}> */}
                                <Button
                                    style={{
                                        backgroundColor: "rgba(213,7,60,0.3)",
                                        textTransform: "none",
                                        color: "black",
                                        padding: "5px 30px",
                                        borderRadius: "30px",
                                        margin: ".5rem 0",
                                    }}
                                >
                                    Create Job
                                    <img
                                        src="\Assets\Jobs.png"
                                        alt=""
                                        style={{ marginLeft: "10px", width: "18px" }}
                                    />
                                </Button>
                                {/* </Link> */}
                                <Action options={options} />
                            </div>
                        </Box>
                        <Box style={{ marginTop: "10px" }}>
                            <Box mb={2}>
                                <Button
                                    style={{
                                        padding: "3px 30px",
                                        color: "black",
                                        backgroundColor: "rgba(213,7,60,0.17)",
                                        textTransform: "none",
                                        borderRadius: "30px",
                                        margin: ".5rem",
                                    }}
                                    onClick={() => {
                                        setIndex(0);
                                    }}
                                >
                                    Submitted
                                </Button>
                                <Button
                                    style={{
                                        padding: "3px 30px",
                                        color: "black",
                                        backgroundColor: "rgba(213,7,60,0.17)",
                                        textTransform: "none",
                                        borderRadius: "30px",
                                        margin: ".5rem",
                                    }}
                                    onClick={() => {
                                        setIndex(1);
                                    }}
                                >
                                    In progress
                                </Button>
                                <Button
                                    style={{
                                        padding: "3px 30px",
                                        color: "black",
                                        backgroundColor: "rgba(213,7,60,0.17)",
                                        textTransform: "none",
                                        borderRadius: "30px",
                                        margin: ".5rem",
                                    }}
                                    onClick={() => {
                                        setIndex(2);
                                    }}
                                >
                                    Pending
                                </Button>
                                <Button
                                    style={{
                                        padding: "3px 30px",
                                        color: "black",
                                        backgroundColor: "rgba(213,7,60,0.17)",
                                        textTransform: "none",
                                        borderRadius: "30px",
                                        margin: ".5rem",
                                    }}
                                    onClick={() => {
                                        setIndex(3);
                                    }}
                                >
                                    Approved
                                </Button>
                            </Box>
                            <Box>
                                <div className="tabContant" hidden={index != 0}>
                                    <div style={{ height: 280, width: "100%" }}>
                                        <DataGrid
                                            className={classes.root}
                                            rows={rows}
                                            columns={columns}
                                            pageSize={3}
                                            rowsPerPageOptions={[3]}
                                            checkboxSelection
                                        />
                                    </div>
                                </div>
                                <div className="tabContant" hidden={index != 1}>
                                    <QueueJob />
                                </div>
                                <div className="tabContant" hidden={index != 2}>
                                    {" "}
                                    <DraftJob />
                                </div>
                                <div className="tabContant" hidden={index != 3}>
                                    <SentJob />
                                </div>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </div>
        </div>
    );
};

export default Job;
