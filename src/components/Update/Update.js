import "./Update.css";
import { Settings } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";
// import { useSelector } from "react-redux";
import Switch from "@mui/material/Switch";
const label = { inputProps: { "aria-label": "Color switch demo" } };

const Update = () => {
    // const counter = useSelector((state) => state.counter);

    return (
        <div style={{ margin: "1rem 0" }} >
            <Box
                sx={{
                    boxShadow: 3,

                    bgcolor: (theme) =>
                        theme.palette.mode === "dark" ? "#101010" : "#fff",
                    borderRadius: 2,

                    p: 1.5,
                }}
            >
                <section className="update">
                    <div className="updatecontent">
                        <h5 className="marketplacetitle">Fieldshark updates and changes</h5>

                        <h1>Recent update</h1>

                        <p style={{ color: "grey" }}>
                            See what’s new in Fieldshark and what we’re gradually rolling out.
                            ✨
                        </p>
                    </div>
                </section>
                <Box
                    sx={{
                        boxShadow: 3,
                        marginTop: 3,
                        bgcolor: (theme) =>
                            theme.palette.mode === "dark" ? "#101010" : "#fff",
                        borderRadius: 2,

                        p: "2rem  1.5rem 10rem",
                    }}
                >
                    <div className="updatemain">
                        <div className="updatemaincontent">
                            <div className="updatemainhead">
                                <h3>January 2023</h3>
                            </div>
                            <div className="updatemainbody">
                                <h3>Update Fieldshark team invitation design</h3>
                                <p>
                                    View invite, and update new team members easily with our new
                                    and improved updated design. View changes in your dashboard
                                </p>
                            </div>
                        </div>
                    </div>
                </Box>
            </Box>
        </div>
    );
};

export default Update;
