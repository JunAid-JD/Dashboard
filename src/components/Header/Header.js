import { Avatar, Box, Icon, IconButton, Menu, Modal, Typography } from '@mui/material'
import heatcool from '../../Images/heat_cool.png';
import Mini from "../../Images/Mini.png";
import About from "../../Images/about.png";
import Down from "../../Images/down.png";
import Crown from "../../Images/crown.png";
import Message from "../../Images/message.png";
import Notification from "../../Images/notificatio.png";
import Setting from "../../Images/setting.png";
import user from "../../Images/user.webp";
import Close from "../../Images/close.png";
import './Header.css'
import { Cancel } from '@mui/icons-material'
import React from 'react';
import { makeStyles } from "@mui/styles";
import ProfileDropDown from './ProfileDropDown';
import SettingDropDown from './SettingDropDown';
import NotficationDropdown from './NotificationDropDown';



const useStyles = makeStyles(() => ({
    notificationDropdown: {
        width: "27vw",

        padding: "10px",
    },
    SettingDropdown: {
        width: "130px",
        padding: "10px",
    },
}));

const styleNotification = {
    position: "absolute",
    top: "1%",
    right: "1%",
    // transform: "translate(-50%, -50%)",
    width: '30vw',
    bgcolor: "background.paper",
    border: "2px solid white",
    borderRadius: "15px",
    boxShadow: 24,
    p: 0.5,
};

const Header = ({ toggleNav }) => {

    const classes = useStyles();

    // ----------------------- Notification Modal -------  //
    const [openNoti, setOpenNoti] = React.useState(false);
    const handleOpenNoti = () => setOpenNoti(true);
    const handleCloseNoti = () => setOpenNoti(false);

    // ----------------------- |||||||||| -------------  //

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [OpenSetting, setOpenSetting] = React.useState(null);
    const [OpenProfile, setOpenProfile] = React.useState(null);

    const open = Boolean(anchorEl);
    const openSetting = Boolean(OpenSetting);
    const openProfile = Boolean(OpenProfile);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    //setting functions
    const handleOpenSettingDropDown = (event) => {
        setOpenSetting(event.currentTarget);
    };
    const handleCloseSettingDropDown = () => {
        setOpenSetting(null);
    };
    //Profile Functions
    const handleOpenProfileDropDown = (event) => {
        setOpenProfile(event.currentTarget);
    };
    const handleCloseProfileDropDown = () => {
        setOpenProfile(null);
    };


    // |||||||||\ //

    return (
        <>
            <div className="header">
                <div className="toogler">
                    <img src={Mini} alt="toogler" onClick={toggleNav} />
                </div>
                <div className="headermain">
                    <div className="headerleft">
                        <Avatar src={heatcool} />
                        <p>Billy heating and cooling</p>
                    </div>
                    <div className="headermid">
                        <img src={Crown} alt="crown" />
                        <span>Go premium. <strong>Limited time offer save upto 40%.</strong></span>
                        <IconButton style={{ color: "white" }}>
                            <Cancel />
                        </IconButton>
                    </div>
                    <div className="headerright">
                        <img src={Message} alt="message" style={{ width: "21px" }} id='message' />
                        <img src={Setting} alt="setting"
                            id="basic-button"
                            aria-controls={openSetting ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={openSetting ? "true" : undefined}
                            onClick={handleOpenSettingDropDown}
                        />
                        <Menu
                            style={{ marginTop: "14px", borderRadius: "20px" }}
                            id="basic-menu"
                            anchorEl={OpenSetting}
                            open={openSetting}
                            onClose={handleCloseSettingDropDown}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            <div className={classes.SettingDropdown}>
                                <SettingDropDown />
                            </div>
                        </Menu>
                        <img src={Notification} alt="notification" onClick={handleOpenNoti} />
                        <Modal
                            open={openNoti}
                            onClose={handleCloseNoti}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={styleNotification} id="notificationdropdownouter">

                                <div className={classes.notificationDropdown} id='notificationdropdowninner'>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Typography variant="h5" color="initial">
                                            Notification panel
                                        </Typography>
                                        <img
                                            src={Close}
                                            alt=""
                                            style={{
                                                width: "25px",
                                                height: "25px",
                                                cursor: "pointer",
                                            }}
                                            onClick={handleCloseNoti}
                                        />
                                    </div>
                                    <NotficationDropdown />
                                </div>

                            </Box>
                        </Modal>


                        <img src={About} alt="About" id='about' />
                        <div className="userimg">
                            <img src={user} alt="user" />
                        </div>
                        <img src={Down} alt="arrow" id="basic-button"
                            aria-controls={OpenProfile ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={OpenProfile ? "true" : undefined}
                            onClick={handleOpenProfileDropDown} />
                        <Menu
                            style={{ marginTop: "14px", borderRadius: "20px" }}
                            id="basic-menu"
                            anchorEl={OpenProfile}
                            open={openProfile}
                            onClose={handleCloseProfileDropDown}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            <div className={classes.SettingDropdown}>
                                <ProfileDropDown />
                            </div>
                        </Menu>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header
