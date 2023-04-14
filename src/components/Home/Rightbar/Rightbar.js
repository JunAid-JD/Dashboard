import React, { useEffect, useState } from "react";
import { Grid, Stack, Box, Typography, Button } from "@mui/material";
import MessageSection from "./MessageSection";
import AnnoucmentSection from "./AnnoucmentSection";

import { ThumbUpAlt } from "@mui/icons-material";

const RightBar = () => {
    const today = new Date();
    const [time, setTime] = useState(new Date());
    const dayName = today.toLocaleString("default", { weekday: "long" });
    const day = today.getDate();
    const year = today.getFullYear();

    const monthName = today.toLocaleString("en-US", { month: "long" });

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        // <Grid container spacing={0} direction="column">
        <div className="rightbar" >
            <Stack
                direction="row"
                spacing={2}
                sx={{
                    width: "95%",
                    diaplay: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Box style={{ width: "60%" }}>
                    <Typography variant="h4" fontWeight={600} fontSize={20}>
                        Today is <span style={{ color: "#D5073C" }}>{dayName}</span>{" "}
                    </Typography>
                </Box>
                <div >
                    <Typography variant="body1" color="red" fontSize={13}>
                        {day} {monthName}, {year}
                    </Typography>
                </div>
            </Stack>
            <Stack
                direction="column"
                spacing={0.5}
                sx={{
                    width: "99%",
                    backgroundColor: "rgba(213,7,60,0.05)",
                    marginTop: "5px",
                    borderRadius: "5px",
                    padding: "3px",
                }}
            >
                <Typography variant="body2" color="initial" fontWeight={600} fontSize={12}>
                    St, Louis, Mo
                </Typography>
                <Typography variant="body2" color="initial" fontWeight={600} fontSize={12}>
                    Todays Weather :{" "}
                    <span style={{ color: "#D5073C" }}> 32 </span>
                </Typography>
                <Typography variant="body2" color="initial" fontWeight={600} fontSize={12}>
                    Local Time:{" "}
                    <span style={{ color: "#D5073C" }}>{time.toLocaleTimeString()}</span>
                </Typography>
            </Stack>
            <MessageSection />
            <AnnoucmentSection />
            <section
                className="questionsention"
                style={{ marginTop: "20px", color: "black" }}
            >
                <h5>Wanna Ask something ?</h5>
                <textarea placeholder="write here ..."></textarea>
                <div>
                    <Button
                        style={{
                            color: "white",
                            background: "black",
                            borderRadius: "15px",
                            fontSize: "9px"
                        }}
                    >
                        Send
                    </Button>
                </div>
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <Button
                        endIcon={<ThumbUpAlt />}
                        style={{
                            background: "red",
                            color: "white",
                            fontSize: "10px",
                            padding: "1px 8px"
                        }}
                    >
                        Give us Advice
                    </Button>
                </div>
            </section>
            {/* </Grid> */}
        </div>
    );
};

export default RightBar;
