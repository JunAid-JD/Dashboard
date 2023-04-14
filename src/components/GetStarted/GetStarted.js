
import { KeyboardArrowRight } from '@mui/icons-material'
import './GetStarted.css'
import { NavLink } from 'react-router-dom'
import { Avatar, Box, Button } from '@mui/material'
import tick from '../../Images/true.png'
import cross from '../../Images/false.png'
import account from '../../Images/getstarted/account.png'
import schedule from '../../Images/getstarted/schedule.png'
import group from '../../Images/getstarted/group.png'
import estimate from '../../Images/getstarted/estimate.png'
import job from '../../Images/getstarted/job.png'
import review from '../../Images/getstarted/review.png'
import payment from '../../Images/getstarted/payment.png'


const GetStarted = () => {
    return (
        <>
            <div className="getstarted">
                <div className="getstartedheader">
                    <div className="getstartedheadercontent"><h3>GET STARTED!</h3>
                        <p>Welcome to your dashboard we will guide you in setting up your account and get use to
                            creating <strong>estimates, scheduling assestments, scheduling jobs</strong> and getting paid for your services.
                        </p>
                        <NavLink to='/Automation' >
                            <div className="skipgetstarted">
                                Skip getting started  <KeyboardArrowRight />
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className="getstartedbody">
                    <div className="getstartedsidebar">
                        <div className="getstartedsidecard" id='getstartedfirstcard'>
                            <div className="cardh3"> <img src={account} alt="1" />
                                <h3 style={{ color: "black", fontFamily: "sans-serif" }}>Setup Account</h3></div>
                            <img src={tick} alt="1" />
                        </div>
                        <div className="getstartedsidecard ">
                            <div className="cardh3"><img src={schedule} alt="1" />
                                <h3>Schedule WO Visit</h3>
                            </div>
                            <img src={cross} alt="1" />
                        </div>
                        <div className="getstartedsidecard">
                            <div className="cardh3">   <img src={group} alt="1" />
                                <h3>Add your team</h3>
                            </div>
                            <img src={cross} alt="1" />
                        </div>
                        <div className="getstartedsidecard">
                            <div className="cardh3"><img src={estimate} alt="1" />
                                <h3>Create estimates</h3></div>
                            <img src={cross} alt="1" />
                        </div>
                        <div className="getstartedsidecard">
                            <div className="cardh3">     <img src={job} alt="1" />
                                <h3>Create jobs</h3></div>
                            <img src={cross} alt="1" />
                        </div>
                        <div className="getstartedsidecard">
                            <div className="cardh3"> <img src={payment} alt="1" />
                                <h3>Setup payments</h3></div>
                            <img src={cross} alt="1" />
                        </div>
                        <div className="getstartedsidecard">
                            <div className="cardh3">  <img src={review} alt="1" />
                                <h3>Get reviews</h3></div>
                            <img src={cross} alt="1" />
                        </div>
                    </div>
                    <div className="getstartedcontent">
                        <h2 className='getstartedcontenth1'>SETUP ACCOUNT</h2>
                        <h4>Setup your account by adding business information.</h4>

                        <form className='getstartedcontentform' >
                            <Box
                                sx={{

                                    width: "100%",
                                    boxShadow: "4",
                                    height: "auto",
                                    bgcolor: "white",
                                    color: "grey.800",
                                    borderRadius: 2,
                                    textAlign: "center",
                                    fontSize: "0.875rem",
                                    fontWeight: "700",
                                }}
                            >
                                <div className="getStartedContent">
                                    <div className="businessDetail">
                                        <h3 className='getStartedContenth3'>Business Details</h3>
                                        <label htmlFor="company name">Company Name</label>
                                        <input type="text" placeholder="Enter Name" />
                                        <div className="FirstLastName">
                                            <div>
                                                <label htmlFor="business owner name">
                                                    First Name Business Owner
                                                </label>
                                                <input type="text" placeholder="Enter Name" />
                                            </div>
                                            <div>
                                                <label htmlFor="business owner name">
                                                    Last Name Business Owner
                                                </label>
                                                <input type="text" placeholder="Enter Name" />
                                            </div>
                                        </div>
                                        <label htmlFor="Company Description">
                                            Company Description
                                        </label>
                                        <textarea
                                            name=""
                                            rows="7"
                                            placeholder="Write Here..."
                                        ></textarea>

                                        <label htmlFor="business website">Business Website</label>
                                        <input type="text" placeholder="Enter website" />
                                        <label htmlFor="company email">Company Eamil</label>
                                        <input type="email" placeholder="Enter Email" />
                                        <label htmlFor="company phone number">
                                            Company phone number
                                        </label>
                                        <input type="text" placeholder="Enter phone number" />
                                        <label htmlFor="Time Zone">Time Zone</label>
                                        <select name="" id="">
                                            <option value="Enter time zone">Time Zone</option>
                                            <option value="UTC">UTC</option>
                                            <option value="UTC">UTC</option>
                                            <option value="UTC">UTC</option>
                                        </select>
                                        <label htmlFor="Business hour">Business hours</label>
                                        <span className="businessHours">
                                            <input type="number" placeholder="9:00 AM" /> To{" "}
                                            <input type="number" placeholder="5:00 PM" />
                                        </span>
                                    </div>
                                    <div className="businessAddress">
                                        <h3 className='getStartedContenth3'>Business Address</h3>
                                        <label htmlFor="company Address">Company Address</label>
                                        <input type="text" placeholder="Enter Address" />

                                        <div className="FirstLastName">
                                            <div>
                                                <label htmlFor="business city">City</label>
                                                <input type="text" placeholder="Enter City" />
                                            </div>
                                            <div>
                                                <label htmlFor="business region">Region</label>
                                                <input type="text" placeholder="Enter Region" />
                                            </div>
                                        </div>

                                        <div className="FirstLastName">
                                            <div>
                                                <label htmlFor="business postal code">Postal Code</label>
                                                <input type="text" placeholder="Enter Postal" />
                                            </div>
                                            <div>
                                                <label htmlFor="business country">Country</label>
                                                <select name="" id="">
                                                    <option value="Enter country">Country</option>
                                                    <option value="UTC">USA</option>
                                                    <option value="UTC">UK</option>
                                                    <option value="UTC">Europe</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="companylogo">
                                            <p>Upload company logo</p>
                                            <Avatar />
                                            <p className="drag&drop">Drag & Drop</p>
                                            OR
                                            {/* <button className="getStartedBtn">Upload</button> */}
                                            <Button
                                                style={{
                                                    background: "black",
                                                    color: "white",
                                                    padding: "2px 50px",
                                                    fontWeight: "700"
                                                }}
                                            >
                                                Upload
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Box>
                            <Box
                                sx={{
                                    boxShadow: 1,
                                    width: "80%",

                                    margin: "20px 0",
                                    height: "auto",
                                    bgcolor: "white",
                                    color: "grey.800",
                                    borderRadius: 2,
                                    textAlign: "center",
                                    fontSize: "0.875rem",
                                    fontWeight: "700",
                                }}
                            >
                                <div className="formSubmitBtn">
                                    <NavLink to='/Automation' >
                                        <Button
                                            style={{
                                                padding: "3px 20px",
                                                color: "black",
                                                fontWeight: "700"
                                            }}
                                        >
                                            Cancel
                                        </Button></NavLink>
                                    <NavLink to='/Automation' >
                                        <Button
                                            style={{
                                                background: "black",
                                                color: "white",
                                                padding: "2px 50px",
                                                fontWeight: "700"
                                            }}
                                        >


                                            Submit

                                        </Button></NavLink>
                                </div>
                            </Box>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}

export default GetStarted
