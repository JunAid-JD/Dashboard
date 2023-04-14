import {
    ArrowDropDown,
    CheckCircle,
    FiberManualRecord,
    PlayCircle,
} from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import RightBar from "../Home/Rightbar/Rightbar";
import "./Profile.css";
import user from "../../Images/user.webp";

const Profile = () => {
    return (
        <div >
            <div className="profile">
                <div className="profileleft">
                    <h1 style={{ fontSize: "30px", margin: "1rem 0" }}>
                        <span style={{ fontWeight: "400" }}>Welcome</span>, Billy
                    </h1>
                    <Box
                        sx={{
                            boxShadow: 3,
                            // width: "65vw",

                            bgcolor: (theme) =>
                                theme.palette.mode === "dark" ? "#101010" : "#fff",
                            borderRadius: 2,
                        }}
                    >
                        <div className="profileinfo">
                            <div className="profileinfoheader">
                                <div className="profileinfoimg">
                                    <img src={user} alt="img" />
                                </div>
                            </div>
                            <div className="profileinfodetail">
                                <div className="profileinfodetailheader">
                                    <div>
                                        <div className="profileinfodetailtitle">
                                            <h3>Billy James</h3>
                                            <Button
                                                style={{
                                                    borderRadius: "15px",
                                                    background: "rgb(214, 3, 3)",
                                                    color: "white",
                                                    margin: " .5rem ",
                                                    fontSize: '10px',
                                                    padding: '3px 7px'
                                                }}
                                            >
                                                Field Technitian
                                            </Button>
                                            <p style={{ color: "green" }}>Active</p>
                                        </div>
                                        <p>Update your photo and personal details</p>
                                    </div>
                                    <div className="assignedcolor">
                                        <p>Assigned Color</p>
                                        <FiberManualRecord style={{ color: "red" }} />
                                    </div>
                                    <div className="profileinfodetailbtns">
                                        <Button
                                            style={{
                                                borderRadius: "15px",
                                                border: "1px solid black",
                                                fontSize: '10px',
                                                padding: '3px 7px',
                                                margin: " .5rem",
                                                color: "black"
                                            }}
                                        >
                                            Edit{" "}
                                        </Button>
                                        <Button
                                            style={{
                                                borderRadius: "15px",
                                                border: "1px solid black",
                                                fontSize: '10px',
                                                padding: '3px 7px',
                                                margin: " .5rem",
                                                color: "black"
                                            }}
                                        >
                                            Cancel{" "}
                                        </Button>
                                        <Button
                                            style={{
                                                borderRadius: "15px",
                                                background: "black",
                                                color: "white",
                                                fontSize: '10px',
                                                padding: '3px 7px',
                                                margin: " .5rem"
                                            }}
                                        >
                                            Save{" "}
                                        </Button>
                                    </div>
                                </div>
                                <form action="">
                                    <div className="profileinfodetailform">
                                        <div>
                                            <label htmlFor="">First Name</label>
                                            <input type="text" placeholder="First Name .." />
                                        </div>
                                        <div>
                                            <label htmlFor="">Last Name</label>
                                            <input type="text" placeholder="Last Name .." />
                                        </div>
                                        <div>
                                            <label htmlFor="">Email</label>
                                            <input type="email" placeholder="abc@gmail.com .." />
                                        </div>
                                        <div>
                                            <label htmlFor="">Phone Number</label>
                                            <input type="text" placeholder="2324-4-434 .." />
                                        </div>
                                    </div>
                                    <div className="profileinfodetailform">
                                        <div>
                                            <label htmlFor="">Job Tilte</label>
                                            <input type="text" placeholder="HVEC Lead Tech" />
                                        </div>
                                        <div>
                                            <label htmlFor="">Date Of Birth</label>
                                            <input type="text" placeholder="03/5/2008" />
                                        </div>
                                        <div>
                                            <label htmlFor="">Bio</label>
                                            <textarea placeholder="Write here .."></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Box>
                    <div className="jobtimeoff" >
                        <Box
                            sx={{
                                boxShadow: 3,
                                // width: "32vw",
                                marginTop: "1rem",
                                bgcolor: (theme) =>
                                    theme.palette.mode === "dark" ? "#101010" : "#fff",
                                borderRadius: 2,
                                padding: 1.4,
                            }}
                        >
                            <div className="jobs">
                                <div className="jobsheader">
                                    <div>
                                        <h3>Jobs on Your Schedule Today</h3>
                                        <p>You have 2 jobs Today!</p>
                                    </div>
                                    <Button
                                        style={{
                                            borderRadius: "15px",
                                            background: "black",
                                            color: "white",
                                            fontSize: '10px',
                                            padding: '3px 7px',
                                            margin: " .5rem"
                                        }}
                                    >
                                        View Schedule
                                    </Button>
                                </div>
                                <div className="jobsdetail">
                                    <div>
                                        <p>25 July 2022, 08:00 PM </p>
                                        <Button style={{ color: 'black', fontSize: '10px' }}>
                                            <strong>Tree Removal : James</strong>
                                        </Button>
                                    </div>
                                    <div>
                                        <p>25 July 2022, 08:00 PM </p>
                                        <Button style={{ color: 'black', fontSize: '10px' }}>
                                            <strong>Tree Removal : James</strong>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Box>
                        <Box
                            sx={{
                                boxShadow: 3,
                                // width: "32vw",
                                marginTop: "1rem",
                                bgcolor: (theme) =>
                                    theme.palette.mode === "dark" ? "#101010" : "#fff",
                                borderRadius: 2,
                                padding: 1.4,
                            }}
                        >
                            <div className="timeoff">
                                <div className="timeoffheader">
                                    <div>
                                        <h3>Time off</h3>
                                        <p>You have no upcoming Time off</p>
                                    </div>
                                    <div>
                                        <Button
                                            style={{
                                                borderRadius: "15px",
                                                border: "1px solid black",
                                                fontSize: '10px',
                                                padding: '3px 7px',
                                                margin: " .5rem",
                                                color: "black"

                                            }}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            style={{
                                                borderRadius: "15px",
                                                background: "black",
                                                color: "white",
                                                fontSize: '10px',
                                                padding: '3px 7px',
                                                margin: " .5rem"
                                            }}
                                        >
                                            Request Time Off
                                        </Button>
                                    </div>
                                </div>
                                <form action="">
                                    <div className="timeoffdetail">
                                        <div>
                                            <label htmlFor="">Type</label>
                                            <select placeholder="select">
                                                <option value="">select type</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="">Days Requested</label>
                                            <select placeholder="select">
                                                <option value="">select </option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="">Hours per Day</label>
                                            <select placeholder="select">
                                                <option value="">8</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="timedetail2">
                                        <div>
                                            <label htmlFor="">Start Date</label>
                                            <select placeholder="select">
                                                <option value="">03/4/2018</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="">End Date</label>
                                            <select placeholder="select">
                                                <option value="">03/4/2018</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="">Start Time</label>
                                            <select placeholder="select">
                                                <option value="">08:00 AM</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="">End Time</label>
                                            <select placeholder="select">
                                                <option value="">08:00 AM</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Box>
                    </div>
                    <Box
                        sx={{
                            boxShadow: 3,
                            // width: "65vw",
                            marginTop: "1rem",
                            bgcolor: (theme) =>
                                theme.palette.mode === "dark" ? "#101010" : "#fff",
                            borderRadius: 2,
                            padding: 1.4,
                        }}
                    >
                        <div className="timesheet">
                            <div className="timesheetheader">
                                <div>
                                    <h3>Timesheet</h3>
                                    <p>Wednesday 26, 2023</p>
                                    <ArrowDropDown />
                                </div>
                                <div>
                                    <h3>Time tracked for Today</h3>
                                    <p>2 Hours | 45 Min</p>
                                </div>
                                <div>
                                    <Button
                                        style={{
                                            borderRadius: "15px",
                                            background: "black",
                                            color: "white",
                                            fontSize: '10px',
                                            padding: '3px 7px',
                                            margin: " .5rem"
                                        }}
                                    >
                                        Clock In
                                    </Button>
                                </div>
                            </div>
                            <div className="timesheetdetail">
                                <div className="timesheettime">
                                    <div>
                                        <p>9:00 AM</p>
                                        <span>Start</span>
                                    </div>
                                    <div>
                                        {" "}
                                        <p>12:00 PM</p>
                                        <span>End</span>
                                    </div>
                                </div>
                                <div className="timesheetbox">
                                    <PlayCircle style={{ color: "green" }} />
                                    <span>
                                        Tree Removal James <br />
                                        (2 hours)
                                    </span>
                                    <CheckCircle style={{ color: "green" }} />
                                </div>
                            </div>
                        </div>
                    </Box>
                </div>
                <div className="profileright">
                    <Box
                        sx={{
                            boxShadow: 3,
                            // width: "15vw",
                            bgcolor: (theme) =>
                                theme.palette.mode === "dark" ? "#101010" : "#fff",
                            color: (theme) =>
                                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                            borderRadius: 2,
                            fontSize: "0.875rem",
                            fontWeight: "700",
                            display: "flex",
                            p: 1,
                        }}
                    >
                        <RightBar />
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default Profile;
