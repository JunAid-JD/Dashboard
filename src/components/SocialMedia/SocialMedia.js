import React, { useState } from "react";
import { Typography, Box, Button, Modal } from "@mui/material";
import SearchBar from "../../reuse/SearchBar";
import { makeStyles } from "@mui/styles";
import Action from "../../reuse/Action";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import facebook from '../../Images/FacebookIcon.png'
import instagram from '../../Images/InstragramIcon.png'
import tiktok from '../../Images/Tiktok.png'
import yelp from '../../Images/Yelp.png'
import google from '../../Images/Google.png'
import './socialmedia.css'

const useStyles = makeStyles(() => ({
    header: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center"
    },
    leftMain: {
        width: "35%",
    },
    RightMain: {
        width: "60%",

    },
    CCards: {
        // width: "162px",
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "row",
    },
    connected_channels: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "rgba(112,112,112,0.1)",
        width: "100%",
        padding: "10px 5px",
        borderRadius: "5px",
        // justifyContent: "space-between",
    },
}));

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "white",
    boxShadow: 24,
    padding: "10px",
    borderRadius: "10px",
};

const SocialMedia = () => {
    const classes = useStyles();
    const [index, setIndex] = useState(0);
    const options = [
        { title: "Action", route: "" },
        { title: "Action", route: "" },
        { title: "Action", route: "" },
        { title: "Action", route: "" },
    ];
    const Time = [
        { time: "1:00", state: "AM", day: 20, month: "August", year: 2022 },
    ];

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Typography variant="h5" color="#0B181C" mt={2}>
                Social Media
            </Typography>
            <Box className="MainBox" mt={2}>
                <header>
                    <Box className={classes.header}>
                        <Box
                            style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",

                            }}
                        >
                            <Typography variant="h6" color="#D5073C">
                                Your social media
                            </Typography>
                            <Box ml={2.3} id="socialmediasearch">
                                <SearchBar />
                            </Box>
                        </Box>
                        <Box
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",

                                height: "35px",
                            }}
                        >
                            <Button
                                style={{
                                    padding: "0 30px",
                                    color: "black",
                                    backgroundColor: "rgba(213,7,60,0.16)",
                                    textTransform: "none",
                                    borderRadius: "30px",
                                    marginRight: "15px",
                                }}
                                onClick={handleOpen}
                            >
                                Create Post
                            </Button>

                            <Action options={options} />
                        </Box>
                    </Box>
                    <Box></Box>
                </header>
                <main style={{ marginTop: "22px" }}>
                    <Box style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                        <Button
                            style={{
                                padding: "3px 30px",
                                color: "black",
                                backgroundColor: "rgba(213,7,60,0.17)",
                                textTransform: "none",
                                borderRadius: "30px",
                            }}
                            onClick={() => {
                                setIndex(0);
                            }}
                        >
                            All
                        </Button>
                        <Button
                            style={{
                                padding: "3px 30px",
                                color: "black",
                                backgroundColor: "rgba(213,7,60,0.17)",
                                textTransform: "none",
                                borderRadius: "30px",
                            }}
                            onClick={() => {
                                setIndex(1);
                            }}
                        >
                            Queue
                        </Button>
                        <Button
                            style={{
                                padding: "3px 30px",
                                color: "black",
                                backgroundColor: "rgba(213,7,60,0.17)",
                                textTransform: "none",
                                borderRadius: "30px",
                            }}
                            onClick={() => {
                                setIndex(2);
                            }}
                        >
                            Draft
                        </Button>
                        <Button
                            style={{
                                padding: "3px 30px",
                                color: "black",
                                backgroundColor: "rgba(213,7,60,0.17)",
                                textTransform: "none",
                                borderRadius: "30px",
                            }}
                            onClick={() => {
                                setIndex(3);
                            }}
                        >
                            Sent
                        </Button>
                    </Box>
                    <Box mt={3} className="socialmediacontent">
                        <Box width="45%">
                            <div className="tabContant" hidden={index !== 0}>
                                <Box>
                                    <Typography variant="" color="initial">
                                        Today{" "}
                                        <sub style={{ color: "#9D9D9D" }}>
                                            {Time[0].day}-{Time[0].month} {Time[0].year}
                                        </sub>
                                    </Typography>
                                    <Box
                                        style={{
                                            width: "100%",
                                            backgroundColor: "rgba(112,112,112,0.1)",
                                            textAlign: "center",
                                            padding: "5px",
                                            borderRadius: "4px",
                                        }}
                                    >
                                        {Time[0].time} {Time[0].state}
                                    </Box>
                                </Box>
                                <Box mt={1.3}>
                                    <Typography variant="" color="initial">
                                        Tomorrow{" "}
                                        <sub style={{ color: "#9D9D9D" }}>
                                            {Time[0].day}-{Time[0].month} {Time[0].year}
                                        </sub>
                                    </Typography>
                                    <Box
                                        style={{
                                            width: "100%",
                                            backgroundColor: "rgba(112,112,112,0.1)",
                                            textAlign: "center",
                                            padding: "5px",
                                            borderRadius: "4px",
                                            marginTop: "4px",
                                        }}
                                    >
                                        {Time[0].time} {Time[0].state}
                                    </Box>
                                    <Box
                                        style={{
                                            width: "100%",
                                            backgroundColor: "rgba(112,112,112,0.1)",
                                            textAlign: "center",
                                            padding: "5px",
                                            borderRadius: "4px",
                                            marginTop: "4px",
                                        }}
                                    >
                                        {Time[0].time} {Time[0].state}
                                    </Box>
                                </Box>
                                <Box mt={1.3}>
                                    <Typography variant="" color="initial">
                                        Saturday{" "}
                                        <sub style={{ color: "#9D9D9D" }}>
                                            {Time[0].day}-{Time[0].month} {Time[0].year}
                                        </sub>
                                    </Typography>
                                    <Box
                                        style={{
                                            width: "100%",
                                            backgroundColor: "rgba(112,112,112,0.1)",
                                            textAlign: "center",
                                            padding: "5px",
                                            borderRadius: "4px",
                                            marginTop: "4px",
                                        }}
                                    >
                                        {Time[0].time} {Time[0].state}
                                    </Box>
                                    <Box
                                        style={{
                                            width: "100%",
                                            backgroundColor: "rgba(112,112,112,0.1)",
                                            textAlign: "center",
                                            padding: "5px",
                                            borderRadius: "4px",
                                            marginTop: "4px",
                                        }}
                                    >
                                        {Time[0].time} {Time[0].state}
                                    </Box>
                                </Box>
                            </div>
                            {/* Queue  */}
                            <div className="tabContant" hidden={index !== 1}>
                                <Box>
                                    <Typography variant="" color="initial">
                                        Today{" "}
                                        <sub style={{ color: "#9D9D9D" }}>
                                            {Time[0].day}-{Time[0].month} {Time[0].year}
                                        </sub>
                                    </Typography>
                                    <Box
                                        style={{
                                            width: "100%",
                                            backgroundColor: "rgba(112,112,112,0.1)",
                                            textAlign: "center",
                                            padding: "5px",
                                            borderRadius: "4px",
                                        }}
                                    >
                                        {Time[0].time} {Time[0].state}
                                    </Box>
                                </Box>
                            </div>
                            {/* Draft  */}
                            <div className="tabContant" hidden={index !== 2}>
                                <Box mt={1.3}>
                                    <Typography variant="" color="initial">
                                        Friday{" "}
                                        <sub style={{ color: "#9D9D9D" }}>
                                            {Time[0].day}-{Time[0].month} {Time[0].year}
                                        </sub>
                                    </Typography>
                                    <Box
                                        style={{
                                            width: "100%",
                                            backgroundColor: "rgba(112,112,112,0.1)",
                                            textAlign: "center",
                                            padding: "5px",
                                            borderRadius: "4px",
                                            marginTop: "4px",
                                        }}
                                    >
                                        {Time[0].time} {Time[0].state}
                                    </Box>
                                </Box>
                            </div>
                            {/* Sent  */}
                            <div className="tabContant" hidden={index !== 3}>
                                <Box mt={1.3}>
                                    <Typography variant="" color="initial">
                                        Tomorrow{" "}
                                        <sub style={{ color: "#9D9D9D" }}>
                                            {Time[0].day}-{Time[0].month} {Time[0].year}
                                        </sub>
                                    </Typography>
                                    <Box
                                        style={{
                                            width: "100%",
                                            backgroundColor: "rgba(112,112,112,0.1)",
                                            textAlign: "center",
                                            padding: "5px",
                                            borderRadius: "4px",
                                            marginTop: "4px",
                                        }}
                                    >
                                        {Time[0].time} {Time[0].state}
                                    </Box>
                                    <Box
                                        style={{
                                            width: "100%",
                                            backgroundColor: "rgba(112,112,112,0.1)",
                                            textAlign: "center",
                                            padding: "5px",
                                            borderRadius: "4px",
                                            marginTop: "4px",
                                        }}
                                    >
                                        {Time[0].time} {Time[0].state}
                                    </Box>
                                </Box>
                            </div>
                        </Box>
                        <Box >
                            <Typography variant="" color="initial">
                                Connected channels
                            </Typography>
                            <Box className={classes.connected_channels} id="socialmediaiconsection">
                                <Box className={classes.CCards}>
                                    <Box
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            paddingTop: "10px",
                                            // width: "50%",
                                        }}
                                    >
                                        <img
                                            src={facebook}
                                            alt=""
                                            style={{ width: "40px" }}
                                        />
                                        <Typography
                                            variant=""
                                            color="initial"
                                            mt={1}
                                            style={{ fontSize: "14px", fontWeight: "900" }}
                                        >
                                            FaceBook
                                        </Typography>
                                        <Typography variant="" color="initial" fontSize="10px">
                                            Business account
                                        </Typography>
                                    </Box>
                                    <Box style={{ width: "40%" }}>
                                        <Box
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                color: "green",
                                                alignItems: "center",
                                            }}
                                        >
                                            <AiFillCheckCircle />
                                            <span> Insalled</span>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={classes.CCards}>
                                    <Box
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            paddingTop: "10px",
                                            // width: "50%",
                                        }}
                                    >
                                        <img
                                            src={instagram}
                                            alt=""
                                            style={{ width: "40px" }}
                                        />
                                        <Typography
                                            variant=""
                                            color="initial"
                                            mt={1}
                                            style={{ fontSize: "14px", fontWeight: "900" }}
                                        >
                                            Instagram
                                        </Typography>
                                        <Typography variant="" color="initial" fontSize="10px">
                                            Business account
                                        </Typography>
                                    </Box>
                                    <Box style={{ width: "40%" }}>
                                        <Box
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                color: "green",
                                                alignItems: "center",
                                            }}
                                        >
                                            <AiFillCheckCircle />
                                            <span> Insalled</span>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={classes.CCards}>
                                    <Box
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            paddingTop: "10px",
                                            // width: "50%",
                                        }}
                                    >
                                        <AiFillTwitterCircle fontSize="44px" color="blue" />
                                        <Typography
                                            variant=""
                                            color="initial"
                                            mt={1}
                                            style={{ fontSize: "14px", fontWeight: "900" }}
                                        >
                                            Twitter
                                        </Typography>
                                        <Typography variant="" color="initial" fontSize="10px">
                                            Business account
                                        </Typography>
                                    </Box>
                                    <Box style={{ width: "40%" }}>
                                        <Box
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                color: "green",
                                                alignItems: "center",
                                            }}
                                        >
                                            <AiFillCheckCircle />
                                            <span> Insalled</span>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box></Box>

                            <Typography variant="" color="initial">
                                Recommendation
                            </Typography>
                            <Box className={classes.connected_channels} id="socialmediaiconsection">
                                <Box className={classes.CCards}>
                                    <Box
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            paddingTop: "10px",
                                            // width: "50%",
                                        }}
                                    >
                                        <img
                                            src={google}
                                            alt=""
                                            style={{ width: "40px" }}
                                        />
                                        <Typography
                                            variant=""
                                            color="initial"
                                            mt={1}
                                            style={{ fontSize: "14px", fontWeight: "900" }}
                                        >
                                            Google
                                        </Typography>
                                        <Typography variant="" color="initial" fontSize="10px">
                                            Business account
                                        </Typography>
                                    </Box>
                                    <Box style={{ width: "40%" }}>
                                        <Box
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                color: "green",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Button
                                                style={{
                                                    backgroundColor: "black",
                                                    textTransform: "none",
                                                    padding: "0",
                                                    color: "white",
                                                    borderRadius: "30px",
                                                }}
                                            >
                                                Install
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={classes.CCards}>
                                    <Box
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            paddingTop: "10px",
                                            // width: "50%",
                                        }}
                                    >
                                        <img
                                            src={tiktok}
                                            alt=""
                                            style={{ width: "40px" }}
                                        />
                                        <Typography
                                            variant=""
                                            color="initial"
                                            mt={1}
                                            style={{ fontSize: "14px", fontWeight: "900" }}
                                        >
                                            Tiktok
                                        </Typography>
                                        <Typography variant="" color="initial" fontSize="10px">
                                            Business account
                                        </Typography>
                                    </Box>
                                    <Box style={{ width: "40%" }}>
                                        <Box
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                color: "green",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Button
                                                style={{
                                                    backgroundColor: "black",
                                                    padding: "0",
                                                    color: "white",
                                                    textTransform: "none",
                                                    borderRadius: "30px",
                                                }}
                                            >
                                                Install
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={classes.CCards}>
                                    <Box
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            paddingTop: "10px",
                                            // width: "50%",
                                        }}
                                    >
                                        <img
                                            src={yelp}
                                            alt=""
                                            style={{ width: "80px" }}
                                        />
                                        <Typography
                                            variant=""
                                            color="initial"
                                            mt={1}
                                            style={{ fontSize: "14px", fontWeight: "900" }}
                                        >
                                            Yelp
                                        </Typography>
                                        <Typography variant="" color="initial" fontSize="10px">
                                            Business account
                                        </Typography>
                                    </Box>
                                    <Box style={{ width: "40%" }}>
                                        <Box
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                color: "green",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Button
                                                style={{
                                                    backgroundColor: "black",
                                                    padding: "0",
                                                    color: "white",
                                                    textTransform: "none",
                                                    borderRadius: "30px",
                                                }}
                                            >
                                                Install
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box></Box>
                        </Box>
                    </Box>
                </main>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box style={style}>
                        <Typography variant="h6" color="#D5073C">
                            Post Somthing
                        </Typography>
                        <textarea
                            rows="5"
                            cols="46"
                            style={{ padding: "10px", borderRadius: "8px", resize: "none" }}
                            placeholder="Write Post"
                        ></textarea>
                        <Box
                            style={{
                                marginTop: "10px",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
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
                                Cancel
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
                                Post
                            </Button>
                        </Box>
                    </Box>
                </Modal>
            </Box>
        </div>
    );
};

export default SocialMedia;
