import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import './Customer.css';

import { DataGrid } from "@mui/x-data-grid";
import Action from "../../reuse/Action.js";
import QuickSync from '../../Images/QuickSync.png'

// Table Header Name
const columns = [
    { field: "Name", headerName: "Name", width: 170 },
    { field: "Company", headerName: "Company", width: 230 },
    { field: "Address", headerName: "Address", width: 280 },
    { field: "number", headerName: "Mobile number", width: 200 },
    { field: "Email", headerName: "Email", width: 280 },
    { field: "resource", headerName: "Lead resource", width: 250 },
    { field: "Notes", headerName: "Notes", width: 280 },
    { field: "Tags", headerName: "Tags", width: 180 },
    {
        field: "Edit",
        headerName: "Edit",
        renderCell: (cellvalues) => {
            return (
                <Button
                    size="small"
                    style={{
                        backgroundColor: "#0B181C",
                        textTransform: "none",
                        color: "white",
                        borderRadius: 40,
                        padding: "2px 10px",
                        textTransform: "none",
                    }}
                >
                    Edit
                </Button>
            );
        },
        width: 120,
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
                        textTransform: "none",
                        color: "white",
                        borderRadius: 40,
                        padding: "2px 20px",
                        textTransform: "none",
                    }}
                >
                    Delete
                </Button>
            );
        },
        width: 130,
    },
];

//Table Data
const rows = [
    {
        id: 1,
        Name: "a",
        Company: "Muller, Mraz LLC",
        Address: "View 0937 Jerod Radial",
        number: "123231334",
        Email: "Meta20@hotmail.com",
        resource: "Ergonomic Granite Tuna",
        Notes: "Non alias consequatur",
        Tags: "excepturi",
    },
    {
        id: 2,
        Name: "b",
        Company: "Muller, Mraz LLC",
        Address: "View 0937 Jerod Radial",
        number: "123231334",
        Email: "Meta20@hotmail.com",
        resource: "Ergonomic Granite Tuna",
        Notes: "Non alias consequatur",
        Tags: "excepturi",
    },
    {
        id: 3,
        Name: "c",
        Company: "Muller, Mraz LLC",
        Address: "View 0937 Jerod Radial",
        number: "123231334",
        Email: "Meta20@hotmail.com",
        resource: "Ergonomic Granite Tuna",
        Notes: "Non alias consequatur",
        Tags: "excepturi",
    },
    {
        id: 4,
        Name: "d",
        Company: "Muller, Mraz LLC",
        Address: "View 0937 Jerod Radial",
        number: "123231334",
        Email: "Meta20@hotmail.com",
        resource: "Ergonomic Granite Tuna",
        Notes: "Non alias consequatur",
        Tags: "excepturi",
    },
    {
        id: 5,
        Name: "e",
        Company: "Muller, Mraz LLC",
        Address: "View 0937 Jerod Radial",
        number: "123231334",
        Email: "Meta20@hotmail.com",
        resource: "Ergonomic Granite Tuna",
        Notes: "Non alias consequatur",
        Tags: "excepturi",
    },
    {
        id: 6,
        Name: "f",
        Company: "Muller, Mraz LLC",
        Address: "View 0937 Jerod Radial",
        number: "123231334",
        Email: "Meta20@hotmail.com",
        resource: "Ergonomic Granite Tuna",
        Notes: "Non alias consequatur",
        Tags: "excepturi",
    },
    {
        id: 7,
        Name: "g",
        Company: "Muller, Mraz LLC",
        Address: "View 0937 Jerod Radial",
        number: "123231334",
        Email: "Meta20@hotmail.com",
        resource: "Ergonomic Granite Tuna",
        Notes: "Non alias consequatur",
        Tags: "excepturi",
    },
    {
        id: 8,
        Name: "h",
        Company: "Muller, Mraz LLC",
        Address: "View 0937 Jerod Radial",
        number: "123231334",
        Email: "Meta20@hotmail.com",
        resource: "Ergonomic Granite Tuna",
        Notes: "Non alias consequatur",
        Tags: "excepturi",
    },
];

//Max height menu
const options = [
    { title: "Add customer", route: "" },
    { title: "Import Customer", route: "" },
    { title: "Export Customer", route: "" },
    { title: "Collect Payment", route: "" },
    { title: "Send Login Details", route: "" },
    { title: "Payments", route: "" },
];

//Style
const useStyles = makeStyles(({ theme }) => ({
    input: {
        backgroundColor: "rgba(112,112,112,0.1)",
        border: "none",
        outline: "none",
        width: "300px",
        // height: "35px",
        borderRadius: "15px",
        // paddingLeft: "34px",
        fontSize: "15px",
        // backgroundImage: `url(${search})`,
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "9px 9px",
        // backgroundSize: "18px",
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
    },
}));

const Customer = () => {
    const classes = useStyles();

    return (
        <div className="customer">
            <Grid>
                <Typography
                    variant="h5"
                    color="initial"
                    fontWeight={600}
                    style={{ margin: "10px 0" }}
                >
                    Customer
                </Typography>
                <Box
                    sx={{
                        boxShadow: 3,
                        height: "auto",
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
                    {/* Header  */}

                    <Box className="customerbox" >
                        <Box flex="1">
                            <Typography variant="h5" color="#D5073C" fontWeight={600}>
                                Your Customer
                            </Typography>
                            <Typography color="#D5073C">Your have 8 customers</Typography>
                        </Box>
                        <Box flex="1" id="customersearch">
                            <input
                                type="text"
                                className={classes.input}
                                placeholder="Let's find"
                            />
                        </Box>

                        <div
                            flex="5"
                            textAlign="right"
                            style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: ".5rem" }}
                        >
                            <Button id="sync"
                                style={{
                                    backgroundColor: "rgba(213,7,60,0.3)",
                                    textTransform: "none",
                                    color: "black",
                                    padding: "5px 30px",
                                    borderRadius: "30px",
                                    textTransform: "none",
                                    margin: "1rem 0",
                                }}
                            >
                                Sync With QuickBook
                                <img
                                    src={QuickSync}
                                    alt=""
                                    style={{ marginLeft: "4px" }}
                                />
                            </Button>
                            <Action options={options} />
                        </div>
                    </Box>

                    {/* Table  */}

                    <Box style={{ marginTop: "20px" }}>
                        <div style={{ height: 400, width: "100%" }}>
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
    );
};

export default Customer;
