import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

//Style
const useStyles = makeStyles(() => ({
    DropDownRow: {
        padding: "5px 0",
        borderRadius: "6px",
        "&:hover": {
            backgroundColor: "rgba(213,7,60,0.2)",
            cursor: "pointer",
        },
    },
}));

const ProfileDropDown = () => {
    const classes = useStyles();

    return (
        <div>
            <ul style={{ listStyle: "none" }}>
                <Link to="/Profile" >
                    {" "}
                    <li className={classes.DropDownRow}>
                        <p style={{ marginLeft: "10px" }}>Profile</p>
                    </li>
                </Link>
                <Link
                    to="/Admin">
                    {" "}
                    <li className={classes.DropDownRow}>
                        <p style={{ marginLeft: "10px" }}>Logout</p>
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default ProfileDropDown;
