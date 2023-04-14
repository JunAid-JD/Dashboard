import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowDropDown, ArrowRight } from "@mui/icons-material";
// import ViewBtn from "../../Shear_Component/ViewBtn";

const useStyles = makeStyles(() => ({
    jobView: {
        marginTop: "10px",
        backgroundColor: "rgb(191 187 187 / 10%)",
        height: "45px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 5px",
    },
}));
const JobBox = () => {
    const classes = useStyles();
    return (
        <Box
            sx={{
                boxShadow: 1,
                height: "180px",
                bgcolor: (theme) =>
                    theme.palette.mode === "dark" ? "#101010" : "#fff",
                borderRadius: 2,
                fontSize: "0.875rem",
                fontWeight: "700",
                p: 1.5,
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    height: "30px",
                    alignItems: "center",
                }}
            >
                <div>
                    <p>
                        Today Jobs.</p>
                    <p
                        style={{
                            color: "rgba(112,112,112,0.6)",

                            fontSize: "11px",
                        }}
                    >
                        {" "}
                        You have total jobs: 2{" "}
                    </p>
                </div>

            </div>
            <div className={classes.jobView}>
                <div style={{ color: "rgba(112,112,112,0.6)", fontSize: "9px" }}>
                    25 July 2022, 08:00 PM
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                        style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                            padding: "1px 3px",
                            fontSize: "8px",
                            display: "flex",
                            alignItems: "center",
                            height: "20px",
                            Overflow: "ellipsis",
                        }}
                    >
                        Tree Removal: James
                    </div>
                    <Typography variant="" color="#D5073C" ml={1} mr={0.5} fontSize={10}>
                        <p style={{ display: "flex", alignItems: "center" }}> $2500 <ArrowDropDown /></p>
                    </Typography>
                    <img
                        src="\Assets\ViewMore.png"
                        alt=""
                        style={{ cursor: "pointer", width: "4px" }}
                    />
                </div>
            </div>
            <div className={classes.jobView}>
                <div style={{ color: "rgba(112,112,112,0.6)", fontSize: "9px" }}>
                    25 July 2022, 08:00 PM
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                        style={{
                            backgroundColor: "white",
                            borderRadius: "20px",
                            padding: "1px 3px",
                            fontSize: "8px",
                            display: "flex",
                            alignItems: "center",
                            height: "20px",
                            Overflow: "ellipsis",
                        }}
                    >
                        Tree Removal: James
                    </div>
                    <Typography variant="" color="#D5073C" ml={1} mr={0.5} fontSize={10}>
                        <p style={{ display: "flex", alignItems: "center" }}> $2500 <ArrowDropDown /></p>
                    </Typography>
                    <img
                        src="\Assets\ViewMore.png"
                        alt=""
                        style={{ cursor: "pointer", width: "4px" }}
                    />
                </div>
            </div>
            <p
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                    marginTop: "1rem"
                }}
            >
                View All <ArrowRight />
            </p>
        </Box>
    );
};

export default JobBox;
