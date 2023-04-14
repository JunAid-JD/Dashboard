import React from "react";
import { Grid, Box, Typography, Button, IconButton } from "@mui/material";
import {
    ArrowDropDown,
    ArrowRight,
    Facebook,
    Instagram,
    LinkedIn,
    TrendingDown,
    TrendingUp,
    Twitter,
} from "@mui/icons-material";
import fb from '../../Images/fb_logo.png';
import google from '../../Images/google_logo.png'
import insta from '../../Images/InstragramIcon.png'
import tik from '../../Images/Tiktok.png'

const SocialMediaTrandingCart = () => {
    return (
        <>
            <Box id="socialmediabox"
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
                <div className="socialheader" >
                    <p>Social Overview</p>
                    <div className="socialicons">
                        <IconButton>
                            <img src={fb} alt="" width="30px" />
                            {/* <Facebook /> */}
                        </IconButton>
                        <IconButton>
                            <img src={insta} alt="" width="25px" />
                            {/* <Instagram /> */}
                        </IconButton>
                        <IconButton>
                            {/* <Twitter /> */}
                            <img src={google} alt="" width="30px" />
                        </IconButton>
                        <IconButton>
                            <img src={tik} alt="" width="25px" />
                            {/* <LinkedIn /> */}
                        </IconButton>
                    </div>
                    <div className="employeviewtime" style={{ fontSize: "10px", marginLeft: "3rem" }}>
                        Last 30 days <ArrowDropDown />
                    </div>
                </div>
                <section>
                    <div
                        className="content"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                            alignItems: "center",
                            background: " rgba(246, 246, 246, 0.748)",
                            margin: "5px 0",
                        }}
                    >
                        <p>Reviews</p>
                        <p style={{ display: "flex", alignItems: "center" }}>
                            43.1%
                            <TrendingUp style={{ color: "green" }} />
                        </p>
                        <p style={{ display: "flex", alignItems: "center" }}>
                            64%
                            <TrendingUp style={{ color: "green" }} />
                        </p>
                        <p style={{ display: "flex", alignItems: "center" }}>
                            43.1%
                            <TrendingUp style={{ color: "green" }} />
                        </p>
                        <p style={{ display: "flex", alignItems: "center" }}>
                            43.1
                            <TrendingUp style={{ color: "green" }} />
                        </p>
                    </div>

                    <div
                        className="content"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                            alignItems: "center",
                            background: " rgba(246, 246, 246, 0.748)",
                            margin: "5px 0",
                        }}
                    >
                        <p>Followers</p>
                        <p style={{ display: "flex", alignItems: "center" }}>
                            32.1%
                            <TrendingUp style={{ color: "green" }} />
                        </p>
                        <p style={{ display: "flex", alignItems: "center" }}>
                            -33.1%
                            <TrendingDown style={{ color: "red" }} />
                        </p>
                        <p style={{ display: "flex", alignItems: "center" }}>
                            81.1%
                            <TrendingUp style={{ color: "green" }} />
                        </p>
                        <p style={{ display: "flex", alignItems: "center" }}>
                            -22.1
                            <TrendingDown style={{ color: "red" }} />
                        </p>
                    </div>

                    <div
                        className="content"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                            alignItems: "center",
                            background: " rgba(246, 246, 246, 0.748)",
                            margin: "5px 0",
                        }}
                    >
                        <p>Comments</p>
                        <p style={{ display: "flex", alignItems: "center" }}>
                            -20.1%
                            <TrendingDown style={{ color: "red" }} />
                        </p>
                        <p style={{ display: "flex", alignItems: "center" }}>
                            32.1%
                            <TrendingUp style={{ color: "green" }} />
                        </p>
                        <p style={{ display: "flex", alignItems: "center" }}>
                            80%
                            <TrendingUp style={{ color: "green" }} />
                        </p>
                        <p style={{ display: "flex", alignItems: "center" }}>
                            -7.1
                            <TrendingDown style={{ color: "red" }} />
                        </p>
                    </div>

                    <div
                        className="content"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                            alignItems: "center",
                            background: " rgba(246, 246, 246, 0.748)",
                            margin: "5px 0",
                        }}
                    >
                        <p>Likes</p>
                        <p style={{ display: "flex", alignItems: "center" }}>
                            2.1%
                            <TrendingUp style={{ color: "green" }} />
                        </p>
                        <p style={{ display: "flex", alignItems: "center" }}>
                            -3.1%
                            <TrendingDown style={{ color: "red" }} />
                        </p>
                        <p style={{ display: "flex", alignItems: "center" }}>
                            43.1%
                            <TrendingUp style={{ color: "green" }} />
                        </p>
                        <p style={{ display: "flex", alignItems: "center" }}>
                            -73.1
                            <TrendingDown style={{ color: "red" }} />
                        </p>
                    </div>
                    <p
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "end",
                        }}
                    >
                        View All <ArrowRight />
                    </p>
                </section>
            </Box>
        </>
    );
};

export default SocialMediaTrandingCart;
