import { Settings } from "@mui/icons-material";
import { Box, Button, FormControlLabel } from "@mui/material";
import React from "react";
// import { useSelector } from "react-redux";
import "./MarketPlace.css";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from '@mui/material/styles';
const label = { inputProps: { "aria-label": "Color switch demo" } };

const MarketPlace = () => {
    // const counter = useSelector((state) => state.counter);

    // switch   
    const IOSSwitch = styled((props: SwitchProps) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }));


    return (
        <div>
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
                    <div className="marketplace">
                        <div className="leftsidebar">
                            <h1>Settings</h1>
                            <div className="marketplacesidebartitle">
                                <p>Business Management</p>
                                <p>Team Oraganization</p>
                                <p>Clint Communication</p>
                                <p>Market Place</p>
                            </div>
                        </div>
                        <div className="marketplacemain">
                            <h5 className="marketplacetitle">Market Place</h5>

                            <h1>Integrations and connected apps</h1>

                            <p>
                                Integrate with your favorite apps and supercharge your work flow
                            </p>

                            <Box
                                sx={{
                                    boxShadow: 3,
                                    marginTop: 3,
                                    bgcolor: "rgba(246, 246, 246, 0.748)",
                                    borderRadius: 2,

                                    p: 1.5,
                                }}
                            >
                                <div className="marketplaceboxes">
                                    <Box
                                        sx={{
                                            boxShadow: 3,
                                            width: "32%",
                                            padding: "17px",
                                            margin: "20px 0",
                                            bgcolor: (theme) =>
                                                theme.palette.mode === "dark" ? "#101010" : "#fff",
                                            color: (theme) =>
                                                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                                            borderRadius: 2,
                                        }}
                                    >
                                        <div className="marketplacebox">
                                            <div className="marketplaceboxheader">
                                                <h3>LOGO</h3>
                                                <Button
                                                    style={{
                                                        color: "green",
                                                        background: "rgba(246, 246, 246, 0.748)",
                                                    }}
                                                >
                                                    Conneted
                                                </Button>
                                            </div>
                                            <h3>Quickbooks</h3>
                                            <p>
                                                Sync customers, items and services, invoices and
                                                payments automatically or manually to quickbooks
                                            </p>
                                            <div className="marketplaceboxheader">
                                                <h5 style={{ display: "flex", alignItems: "center" }}>
                                                    <Settings /> Setting
                                                </h5>
                                                {/* <Switch {...label} color="success" /> */}
                                                <FormControlLabel
                                                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                                />
                                            </div>
                                        </div>
                                    </Box>

                                    <Box
                                        sx={{
                                            boxShadow: 3,
                                            width: "32%",
                                            padding: "17px",
                                            margin: "20px 0",
                                            bgcolor: (theme) =>
                                                theme.palette.mode === "dark" ? "#101010" : "#fff",
                                            color: (theme) =>
                                                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                                            borderRadius: 2,
                                        }}
                                    >
                                        <div className="marketplacebox">
                                            <div className="marketplaceboxheader">
                                                <h3>LOGO</h3>
                                                <Button
                                                    style={{
                                                        color: "white",
                                                        background: "grey",
                                                    }}
                                                >
                                                    Conneted
                                                </Button>
                                            </div>
                                            <h3>Google Calendar</h3>
                                            <p>
                                                Sync customers, items and services, invoices and
                                                payments automatically or manually to quickbooks
                                            </p>
                                            <div className="marketplaceboxheader">
                                                <h5 style={{ display: "flex", alignItems: "center" }}>
                                                    <Settings /> Setting
                                                </h5>
                                                {/* <Switch {...label} color="success" /> */}
                                                <FormControlLabel
                                                    control={<IOSSwitch sx={{ m: 1 }} />}
                                                />
                                            </div>
                                        </div>
                                    </Box>

                                    <Box
                                        sx={{
                                            boxShadow: 3,
                                            width: "32%",
                                            padding: "17px",
                                            margin: "20px 0",
                                            bgcolor: (theme) =>
                                                theme.palette.mode === "dark" ? "#101010" : "#fff",
                                            color: (theme) =>
                                                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                                            borderRadius: 2,
                                        }}
                                    >
                                        <div className="marketplacebox">
                                            <div className="marketplaceboxheader">
                                                <h3>LOGO</h3>
                                                <Button
                                                    style={{
                                                        color: "green",
                                                        background: "rgba(246, 246, 246, 0.748)",
                                                    }}
                                                >
                                                    Conneted
                                                </Button>
                                            </div>
                                            <h3>Zapier</h3>
                                            <p>
                                                Sync customers, items and services, invoices and
                                                payments automatically or manually to quickbooks
                                            </p>
                                            <div className="marketplaceboxheader">
                                                <h5 style={{ display: "flex", alignItems: "center" }}>
                                                    <Settings /> Setting
                                                </h5>
                                                {/* <Switch {...label} color="success" /> */}
                                                <FormControlLabel
                                                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                                />
                                            </div>
                                        </div>
                                    </Box>

                                    <Box
                                        sx={{
                                            boxShadow: 3,
                                            width: "32%",
                                            padding: "17px",
                                            margin: "20px 0",
                                            bgcolor: (theme) =>
                                                theme.palette.mode === "dark" ? "#101010" : "#fff",
                                            color: (theme) =>
                                                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                                            borderRadius: 2,
                                        }}
                                    >
                                        <div className="marketplacebox">
                                            <div className="marketplaceboxheader">
                                                <h3>LOGO</h3>
                                                <Button
                                                    style={{
                                                        color: "green",
                                                        background: "rgba(246, 246, 246, 0.748)",
                                                    }}
                                                >
                                                    Conneted
                                                </Button>
                                            </div>
                                            <h3>Paycom</h3>
                                            <p>
                                                Sync customers, items and services, invoices and
                                                payments automatically or manually to quickbooks
                                            </p>
                                            <div className="marketplaceboxheader">
                                                <h5 style={{ display: "flex", alignItems: "center" }}>
                                                    <Settings /> Setting
                                                </h5>
                                                {/* <Switch {...label} color="success" /> */}
                                                <FormControlLabel
                                                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                                />
                                            </div>
                                        </div>
                                    </Box>
                                </div>
                            </Box>
                        </div>
                    </div>
                </Box>
            </div>
        </div>
    );
};

export default MarketPlace;
