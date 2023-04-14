import './SmallNav.css'
import Home from "../../Images/svg/home.png";
import New from "../../Images/svg/new.png";
import Customer from "../../Images/svg/customer.png";
import Work from "../../Images/svg/workorder.png";
import Scheduling from "../../Images/svg/scheduling.png";
import Map from "../../Images/svg/map.png";
import Invoice from "../../Images/svg/invoice.png";
import jobs from "../../Images/svg/job.png";
import Estimates from "../../Images/svg/estimate.png";
import Reports from "../../Images/svg/report.png";
import Market_place from "../../Images/svg/market.png";
import FieldSharkLogo from "../../Images/FieldSharkLogo.png";
import Play from "../../Images/play.png";
import { Box, IconButton, Modal } from '@mui/material';
import { AccessTime, BusinessCenter, Campaign, Groups, Help, LocalLibrary, LocalMall, PermPhoneMsg, Receipt } from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const style = {
    position: "relative",
    top: "65%",
    left: "30%",
    transform: "translate(-50%, -50%)",
    width: 350,
    bgcolor: "background.paper",
    border: "none",
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
};

const styleAddNew = {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: '32vw',
    bgcolor: "background.paper",
    border: "none",
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
};


const SmallNav = () => {


    // get started //

    const [openn, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClosee = () => setOpen(false);




    // add new //
    const [openAddNew, setOpenAddNew] = useState(false);
    const handleOpenAddNew = () => setOpenAddNew(true);
    const handleCloseAddNew = () => setOpenAddNew(false);
    return (
        <>
            <div className="Navigation">
                <div className="navigationsmalllogo">
                    <img src={FieldSharkLogo} alt="logo" />
                </div>

                <ul className='smallnavul'>
                    <li>
                        <Link to='/Admin' >
                            <img src={Home} alt="home" /></Link>
                    </li>
                    <li onClick={handleOpenAddNew}>
                        <img src={New} alt="home" />

                    </li>
                    <Modal
                        open={openAddNew}
                        onClose={handleCloseAddNew}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={styleAddNew}>
                            <h2 className='addnewheading'>Add New</h2>
                            <Link to='/Customer' >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        background: " rgba(246, 246, 246, 1)",
                                        marginTop: "10px",
                                    }}
                                >
                                    <IconButton>
                                        <Groups />
                                    </IconButton>
                                    <h4>Customer</h4>
                                </div>
                            </Link>

                            <Link to='/WorkOrder' >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        background: " rgba(246, 246, 246, 1)",
                                        marginTop: "10px",
                                    }}
                                >
                                    <IconButton>
                                        <LocalMall />
                                    </IconButton>
                                    <h4>Work Order</h4>
                                </div>
                            </Link>

                            <Link to='/Estimates' >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        background: " rgba(246, 246, 246, 1)",
                                        marginTop: "10px",
                                    }}
                                >
                                    <IconButton>
                                        <AccessTime />
                                    </IconButton>
                                    <h4>Estimates</h4>
                                </div>
                            </Link>


                            <Link to='/Job' >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        background: " rgba(246, 246, 246, 1)",
                                        marginTop: "10px",
                                    }}
                                >
                                    <IconButton>
                                        <BusinessCenter />
                                    </IconButton>
                                    <h4>Job</h4>
                                </div>
                            </Link>
                            <Link to='/Invoice' >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        background: " rgba(246, 246, 246, 1)",
                                        marginTop: "10px",
                                    }}
                                >
                                    <IconButton>
                                        <Receipt />
                                    </IconButton>
                                    <h4>Invoice</h4>
                                </div>
                            </Link>

                            <Link to='/SocialMedia' >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        background: " rgba(246, 246, 246, 1)",
                                        marginTop: "10px",
                                    }}
                                >
                                    <IconButton>
                                        <Campaign />
                                    </IconButton>
                                    <h4>Social Media Management</h4>
                                </div>
                            </Link>
                        </Box>
                    </Modal>


                    <li>
                        <Link to='/Customer' >
                            <img src={Customer} alt="home" /></Link>
                    </li>
                    <li>
                        <Link to='/WorkOrder' >
                            <img src={Work} alt="home" /></Link>
                    </li>
                    <li>
                        <img src={Scheduling} alt="home" />
                    </li>
                    <li>
                        <Link to='/Maps' >
                            <img src={Map} alt="home" /></Link>
                    </li>
                    <li>
                        <Link to='/Invoice' >
                            <img src={Invoice} alt="home" /></Link>
                    </li>
                    <li>
                        <Link to='/Job' >
                            <img src={jobs} alt="home" /></Link>
                    </li>
                    <li>
                        <Link to='/Estimates' >
                            <img src={Estimates} alt="home" /></Link>
                    </li>
                    {/* <li>
                         <Link to='/SocialMedia' >
                            <IconButton>
                            <Campaign />
                            </IconButton>
                        </Link> 
                    </li> */}
                    <li>
                        <Link to='/Reports' >
                            <img src={Reports} alt="home" /></Link>
                    </li>
                    <li>
                        <Link to='/MarketPlace' >
                            <img src={Market_place} alt="home" /></Link>

                    </li>
                </ul>
                <div className="getstartedmodal" onClick={handleOpen}>
                    <img src={Play} alt="logo" />
                </div>
                <Modal
                    open={openn}
                    onClose={handleClosee}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <h2 >Get Started.</h2>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                background: " rgba(246, 246, 246, 1)",
                                marginTop: "10px",
                            }}
                        >
                            <IconButton>
                                <LocalLibrary />
                            </IconButton>
                            <h4>Learning Center</h4>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                background: " rgba(246, 246, 246, 1)",
                                marginTop: "10px",
                            }}
                        >
                            <IconButton>
                                <Groups />
                            </IconButton>
                            <h4>Fieldshark community</h4>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                background: " rgba(246, 246, 246, 1)",
                                marginTop: "10px",
                            }}
                        >
                            <IconButton>
                                <Help />
                            </IconButton>
                            <h4>Frequently asked questions</h4>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                background: " rgba(246, 246, 246, 1)",
                                marginTop: "10px",
                            }}
                        >
                            <IconButton>
                                <PermPhoneMsg />
                            </IconButton>
                            <h4>Help center</h4>
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default SmallNav
