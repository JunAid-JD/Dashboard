import { CalendarMonth } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import "./Account.css";
import card from "../../Images/atmcard.png";
const Account = () => {
    return (
        <div >
            <h2 style={{ margin: "1rem 0" }}>Account and Billing</h2>
            <Box
                sx={{
                    boxShadow: 3,

                    bgcolor: (theme) =>
                        theme.palette.mode === "dark" ? "#101010" : "#fff",
                    borderRadius: 2,

                    p: 1.5,
                }}
            >
                <div className="accountbilling">
                    <div className="paymenthistory">
                        <div className="paymentheader">
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <h2>Payment History</h2>
                                <span>
                                    <strong>Start:</strong> Fri Jul 29,2022
                                    <CalendarMonth />
                                </span>
                                <span>
                                    <strong>End:</strong> Fri Jul 29,2022
                                    <CalendarMonth />
                                </span>
                            </div>
                            <button
                                style={{
                                    padding: "5px 20px",
                                    textTransform: "none",

                                    backgroundColor: "#0B181C",
                                    color: "white",
                                    border: "none",
                                    outline: "none",
                                    borderRadius: "15px",
                                    fontSize: "14px",
                                }}
                            >
                                Export All
                            </button>
                        </div>
                        <div className="history">
                            <div className="historyheader">
                                <div className="historyheaderleft">
                                    <h4>Date</h4>
                                    <h4>Transaction</h4>
                                </div>
                                <div className="historyheaderright">
                                    <h4>Amount</h4>
                                    <h4>Document</h4>
                                </div>
                            </div>
                            <div className="historydetail">
                                <div className="historydetailleft">
                                    <p>20th May 2020</p>
                                    <p>
                                        Renewal: 1 Year GrowBig Hosting -
                                        <strong>Premiume Plan</strong>
                                    </p>
                                </div>
                                <div className="historydetailright">
                                    <strong>22.61$ </strong>
                                    <Button
                                        style={{
                                            padding: "0 20px",
                                            textTransform: "none",
                                            marginLeft: "10px",
                                            backgroundColor: "#cf3e3e",
                                            color: "white",
                                            border: "none",
                                            outline: "none",
                                            borderRadius: "15px",
                                            fontSize: "14px",
                                        }}
                                    >
                                        Invoice
                                    </Button>
                                </div>
                            </div>
                            <div className="historydetail">
                                <div className="historydetailleft">
                                    <p>20th May 2020</p>
                                    <p>
                                        Renewal: 1 Year GrowBig Hosting -
                                        <strong>Premiume Plan</strong>
                                    </p>
                                </div>
                                <div className="historydetailright">
                                    <strong>22.61$ </strong>
                                    <Button
                                        style={{
                                            padding: "0 20px",
                                            textTransform: "none",
                                            marginLeft: "10px",
                                            backgroundColor: "#cf3e3e",
                                            color: "white",
                                            border: "none",
                                            outline: "none",
                                            borderRadius: "30px",
                                            fontSize: "14px",
                                        }}
                                    >
                                        Invoice
                                    </Button>
                                </div>
                            </div>
                            <div className="historydetail">
                                <div className="historydetailleft">
                                    <p>20th May 2020</p>
                                    <p>
                                        Renewal: 1 Year GrowBig Hosting -
                                        <strong>Premiume Plan</strong>
                                    </p>
                                </div>
                                <div className="historydetailright">
                                    <strong>22.61$ </strong>
                                    <Button
                                        style={{
                                            padding: "0 20px",
                                            textTransform: "none",
                                            marginLeft: "10px",
                                            backgroundColor: "#cf3e3e",
                                            color: "white",
                                            border: "none",
                                            outline: "none",
                                            borderRadius: "30px",
                                            fontSize: "14px",
                                        }}
                                    >
                                        Invoice
                                    </Button>
                                </div>
                            </div>
                            <div className="historydetail">
                                <div className="historydetailleft">
                                    <p>20th May 2020</p>
                                    <p>
                                        Renewal: 1 Year GrowBig Hosting -
                                        <strong>Premiume Plan</strong>
                                    </p>
                                </div>
                                <div className="historydetailright">
                                    <strong>22.61$ </strong>
                                    <Button
                                        style={{
                                            padding: "0 20px",
                                            textTransform: "none",
                                            marginLeft: "10px",
                                            backgroundColor: "#cf3e3e",
                                            color: "white",
                                            border: "none",
                                            outline: "none",
                                            borderRadius: "30px",
                                            fontSize: "14px",
                                        }}
                                    >
                                        Invoice
                                    </Button>
                                </div>
                            </div>
                            <div className="historydetail">
                                <div className="historydetailleft">
                                    <p>20th May 2020</p>
                                    <p>
                                        Renewal: 1 Year GrowBig Hosting -
                                        <strong>Premiume Plan</strong>
                                    </p>
                                </div>
                                <div className="historydetailright">
                                    <strong>22.61$ </strong>
                                    <Button
                                        style={{
                                            padding: "0 20px",
                                            textTransform: "none",
                                            marginLeft: "10px",
                                            backgroundColor: "#cf3e3e",
                                            color: "white",
                                            border: "none",
                                            outline: "none",
                                            borderRadius: "30px",
                                            fontSize: "14px",
                                        }}
                                    >
                                        Invoice
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="accountsetting" >
                            <Box
                                sx={{
                                    boxShadow: 3,

                                    bgcolor: (theme) =>
                                        theme.palette.mode === "dark" ? "#101010" : "#fff",
                                    borderRadius: 2,

                                }}
                            >
                                <div className="accountsettingheader">
                                    <p style={{ fontSize: "16px" }}>Cancel Your Account</p>
                                </div>
                                <div className="accountsettingdetail">
                                    <p style={{ fontSize: "16px" }}>
                                        Cancelling your Field Shark account will you from accessing
                                        all clients, Jobs, Invoices and any other information you've
                                        entered or that has
                                    </p>
                                </div>
                                <h3>How to cancel your account?</h3>
                            </Box>
                        </div>
                    </div>
                    <div className="billingdetail">
                        <div className="billingdetailheader">
                            <h4>Billing Detail</h4>
                            <Button
                                style={{
                                    padding: "3px 15px",
                                    textTransform: "none",
                                    marginLeft: "10px",
                                    backgroundColor: "#0B181C",
                                    color: "white",
                                    border: "none",
                                    outline: "none",
                                    borderRadius: "30px",
                                    fontSize: "12px",
                                }}
                            >
                                New Card
                            </Button>
                        </div>
                        <div className="cartimg">
                            <img src={card} alt="card" />
                        </div>
                        <div className="currentplan">
                            <h4>Current Plan</h4>
                            <Box
                                sx={{
                                    boxShadow: 3,

                                    bgcolor: (theme) =>
                                        theme.palette.mode === "dark" ? "#101010" : "#fff",
                                    borderRadius: 2,
                                    // width: "100%",
                                    p: 1.5,
                                }}
                            >
                                <div className="currentplanheader">
                                    <h4>Premium Plan</h4>
                                    <h4>124$</h4>
                                </div>
                                <p>
                                    Expires on: <strong>Nov 28, 2023</strong>
                                </p>
                                <p>USA</p>

                                <div className="currentplanbtn">
                                    <Button
                                        style={{
                                            padding: "3px 15px",
                                            textTransform: "none",

                                            backgroundColor: "#0B181C",
                                            color: "white",
                                            border: "none",
                                            outline: "none",
                                            borderRadius: "30px",
                                            fontSize: "12px",
                                        }}
                                    >
                                        Upgrade
                                    </Button>
                                    <Button
                                        style={{
                                            padding: "3px 15px",
                                            textTransform: "none",
                                            marginLeft: "10px",
                                            backgroundColor: "#0B181C",
                                            color: "white",
                                            border: "none",
                                            outline: "none",
                                            borderRadius: "30px",
                                            fontSize: "12px",
                                        }}
                                    >
                                        Manage
                                    </Button>
                                </div>
                            </Box>
                        </div>
                        <div className="accountinfo">
                            <h4>Account Info</h4>
                            <p>
                                We're so glad you're here! Now Let's get your free account
                                set-up so you can get going.
                            </p>

                            <form className="accountform">
                                <label htmlFor="">Zip Code</label>
                                <input type="text" placeholder="why zip code" />
                                <label htmlFor="">Full Name</label>
                                <input type="text" placeholder="Name.." />
                                <label htmlFor="">US Cell Phone Number</label>
                                <input type="text" placeholder="+1-3--431-1-45" />

                                <h4>Set up your login info:</h4>
                                <label htmlFor="Your Email">Your Email</label>
                                <input type="email" placeholder="1abx@gmail.com" />
                                <label htmlFor="">Password</label>
                                <input type="password" />

                                <div className="termcondition">
                                    <input type="checkbox" style={{ width: "auto", marginRight: "5px" }} />
                                    <span>
                                        I have read and accept Field Shark Policy and Membership
                                        Agreement.
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    );
};

export default Account;
