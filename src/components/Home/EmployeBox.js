import {
    ArrowDropDown,
    ArrowRight,
    FiberManualRecord,
} from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";
import "./EmployeBox.css";
import user from '../../Images/user.webp'

const EmployeView = () => {
    return (
        <>
            <Box
                sx={{
                    boxShadow: 1,
                    height: "180px",
                    // width: "330px",
                    bgcolor: (theme) =>
                        theme.palette.mode === "dark" ? "#101010" : "#fff",
                    borderRadius: 2,
                    fontSize: "0.875rem",
                    fontWeight: "700",
                    p: 1.5,
                    // marginLeft: "10px",
                }}
            >
                <div className="employeviewheader">
                    <p>Employee overview</p>
                    <div className="employeviewtime" style={{ fontSize: "10px" }}>
                        Last 7 days <ArrowDropDown />
                    </div>
                </div>
                <div className="employeview">
                    <div className="avatar">
                        <Avatar src={user} />
                        <p style={{ fontSize: "8px" }}>Morgan Shaun</p>
                    </div>
                    <div className="detailbox">
                        <div>
                            <p>Job Completed</p>
                            <p>70</p>
                        </div>
                        <FiberManualRecord style={{ color: "blue" }} />
                    </div>
                    <div className="detailbox">
                        <div>
                            <p>Job open</p>
                            <p>20</p>
                        </div>
                        <FiberManualRecord style={{ color: "red" }} />
                    </div>
                    <div className="detailbox">
                        <div>
                            <p>Job assign</p>
                            <p>10</p>
                        </div>
                        <FiberManualRecord style={{ color: "green" }} />
                    </div>
                </div>

                <div className="employeview">
                    <div className="avatar">
                        <Avatar src={user} />
                        <p style={{ fontSize: "8px" }}>Morgan Shaun</p>
                    </div>
                    <div className="detailbox">
                        <div>
                            <p >Job Completed</p>
                            <p >70</p>
                        </div>
                        <FiberManualRecord style={{ color: "blue" }} />
                    </div>
                    <div className="detailbox">
                        <div>
                            <p >Job open</p>
                            <p >20</p>
                        </div>
                        <FiberManualRecord style={{ color: "red" }} />
                    </div>
                    <div className="detailbox">
                        <div>
                            <p >Job assign</p>
                            <p>10</p>
                        </div>
                        <FiberManualRecord style={{ color: "green" }} />
                    </div>
                </div>

                <p className="employeviewall" style={{ marginTop: ".5rem" }}>
                    View All <ArrowRight />
                </p>
            </Box>
        </>
    );
};

export default EmployeView;
