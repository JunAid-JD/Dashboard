import {
    ArrowDropDown,
    ArrowRight,
    FiberManualRecord,
} from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";
// import "./EmployeView.css";

const RecentActivities = () => {
    return (
        <>
            <Box
                sx={{
                    boxShadow: 1,
                    height: "180px",
                    // width: "230px",
                    bgcolor: (theme) =>
                        theme.palette.mode === "dark" ? "#101010" : "#fff",
                    borderRadius: 2,
                    fontSize: "10px",
                    fontWeight: "700",
                    p: 1.5,
                    // marginLeft: "10px",
                }}
            >
                <div className="employeviewheader">
                    <p >Recent Activities</p>
                    <div className="employeviewtime">
                        Last 7 days <ArrowDropDown />
                    </div>
                </div>

                <div className="detailbox" style={{ fontSize: "8px", padding: ".3rem .1rem" }}>
                    <div >
                        <p style={{ color: "green", fontSize: "10px" }}>Job Completed</p>
                        <p style={{ fontSize: "10px" }}>Consequatur reprehenderit corrupti...</p>
                    </div>
                    <small>1 minutes ago</small>
                </div>
                <div className="detailbox" style={{ fontSize: "8px", padding: ".3rem .1rem" }}>
                    <div >
                        <p style={{ color: "red", fontSize: "10px" }}>Job Rejected</p>
                        <p style={{ fontSize: "10px" }}>Consequatur reprehenderit corrupti..</p>
                    </div>
                    <small>2 days ago</small>
                </div>
                <div className="detailbox" style={{ fontSize: "8px", padding: ".3rem .1rem" }}>
                    <div >
                        <p style={{ color: "blue", fontSize: "10px" }}>Phone number added</p>
                        <p style={{ fontSize: "10px" }}>Consequatur reprehenderit corrupti..</p>
                    </div>
                    <small>1 day ago</small>
                </div>

                <p className="employeviewall">
                    View All <ArrowRight />
                </p>
            </Box>
        </>
    );
};

export default RecentActivities;
