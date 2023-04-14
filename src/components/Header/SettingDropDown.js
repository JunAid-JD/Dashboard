import React from "react";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";

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
const SettingDropDown = () => {
    const classes = useStyles();

    return (
        <div>
            <ul style={{ listStyle: "none" }}>
                <li className={classes.DropDownRow}>
                    <p style={{ marginLeft: "10px" }}>
                        <NavLink to="/MarketPlace" >
                            Setting
                        </NavLink>
                    </p>
                </li>
                <li className={classes.DropDownRow}>
                    <p style={{ marginLeft: "10px" }}>
                        <NavLink to="/Account" >
                            Account & Billing
                        </NavLink>
                    </p>
                </li>
                <li className={classes.DropDownRow}>
                    <p style={{ marginLeft: "10px" }}>
                        {" "}
                        <NavLink to="/Update" >
                            Product Update
                        </NavLink>
                    </p>
                </li>
                <li className={classes.DropDownRow}>
                    <p style={{ marginLeft: "10px" }}>
                        <NavLink to="/MarketPlace" >
                            Marketplace
                        </NavLink>
                    </p>
                </li>
                <li className={classes.DropDownRow}>
                    <p style={{ marginLeft: "10px" }}>Manage Team</p>
                </li>
            </ul>
        </div>
    );
};

export default SettingDropDown;
