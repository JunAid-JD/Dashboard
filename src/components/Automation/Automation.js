import { ArrowRight, Facebook, Google } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import Box from "@mui/material/Box";
import './Automation.css';
import Switch from '@mui/material/Switch';
import { NavLink } from 'react-router-dom';
const label = { inputProps: { 'aria-label': 'Color switch demo' } };

const Automation = () => {
    return (
        <div className='automation'>
            <div className="automationHeader">
                <h1>Automation</h1>

                <NavLink to='/Admin' >
                    <p style={{ fontSize: "15px" }}>Skip getting started  <ArrowRight /></p>
                </NavLink>

            </div>
            <div className="automationcards">
                <Box
                    sx={{
                        boxShadow: 3,
                        padding: "25px",
                        margin: "20px 0",
                        minHeight: "200px",
                        bgcolor: "white",
                        color: "grey.800",
                        borderRadius: 2,
                    }}
                    className="box"
                >
                    <h4>Online form submitted notify customer of work order received</h4>
                    <p className='automationcardparagraph'>Jame, We received your work order request one of our team members will
                        reach out to you shortly.</p>
                    <div className="automationcardbtns">
                        <div>
                            <Button
                                style={{
                                    background: "black",
                                    color: "white",
                                    padding: "0 20px",
                                    borderRadius: "15px",
                                    fontWeight: "700",
                                    textTransform: "capitalize"
                                }}
                            >
                                Edit message
                            </Button>
                            <Button
                                style={{
                                    padding: "0 20px",
                                    marginLeft: "5px",
                                    borderRadius: "15px",
                                    color: "black"
                                }}
                            >
                                Save
                            </Button>
                        </div>
                        <div>
                            <p className='statusbtn'>Status:</p>
                            <Switch {...label} defaultChecked color="error" /> Active
                        </div>
                    </div>
                </Box>
                <Box
                    sx={{
                        boxShadow: 3,
                        // width: "45%",
                        padding: "16px",
                        margin: "20px 0",
                        minHeight: "200px",
                        bgcolor: "white",
                        color: "grey.800",
                        borderRadius: 2,
                    }}
                    className="box"
                >
                    <div className="customerReminder">
                        <h4>Customer Reminder</h4><input type="number" placeholder='1' />Days before Upcoming Jobs at <input type="number" placeholder='9:00 Am' />
                    </div>
                    <div className="automationcardbtns">
                        <div>
                            <Button
                                style={{
                                    background: "black",
                                    color: "white",
                                    padding: "0 20px",
                                    borderRadius: "15px",
                                    fontWeight: "700",
                                    textTransform: "capitalize"
                                }}
                            >
                                Edit
                            </Button>
                            <Button
                                style={{
                                    padding: "0 20px",
                                    marginLeft: "5px",
                                    borderRadius: "15px",
                                    color: "black"
                                }}
                            >
                                Save
                            </Button>
                        </div>
                        <div>
                            <p className='statusbtn'>Status:</p>
                            <Switch {...label} defaultChecked color="error" /> Active
                        </div>
                    </div>
                </Box>


                <Box
                    sx={{
                        boxShadow: 3,
                        // width: "45%",
                        padding: "16px",
                        margin: "20px 0",
                        minHeight: "200px",
                        bgcolor: "white",
                        color: "grey.800",
                        borderRadius: 2,
                    }}
                    className="box"
                >
                    <div className="customerReminder">
                        <h4>Customer Reminder</h4><input type="number" placeholder='1' />Days before Upcoming Jobs at <input type="number" placeholder='9:00 Am' />
                    </div>
                    <div className="automationcardbtns">
                        <div>
                            <Button
                                style={{
                                    background: "black",
                                    color: "white",
                                    padding: "0 20px",
                                    borderRadius: "15px",
                                    fontWeight: "700",
                                    textTransform: "capitalize"
                                }}
                            >
                                Edit
                            </Button>
                            <Button
                                style={{
                                    padding: "0 20px",
                                    marginLeft: "5px",
                                    borderRadius: "15px",
                                    color: "black"
                                }}
                            >
                                Save
                            </Button>
                        </div>
                        <div>
                            <p className='statusbtn'>Status:</p>
                            <Switch {...label} defaultChecked color="error" /> Active
                        </div>
                    </div>
                </Box>


                <Box
                    sx={{
                        boxShadow: 3,
                        // width: "45%",
                        padding: "16px",
                        margin: "20px 0",
                        minHeight: "200px",
                        bgcolor: "white",
                        color: "grey.800",
                        borderRadius: 2,
                    }}
                    className="box"
                >
                    <div className="customerReminder">
                        <h4>Team Reminder</h4><input type="number" placeholder='1' />Days before Upcoming Jobs at <input type="number" placeholder='9:00 Am' />
                    </div>
                    <div className="automationcardbtns">
                        <div>
                            <Button
                                style={{
                                    background: "black",
                                    color: "white",
                                    padding: "0 20px",
                                    borderRadius: "15px",
                                    fontWeight: "700",
                                    textTransform: "capitalize"
                                }}
                            >
                                Edit
                            </Button>
                            <Button
                                style={{
                                    padding: "0 20px",
                                    marginLeft: "5px",
                                    borderRadius: "15px",
                                    color: "black"
                                }}
                            >
                                Save
                            </Button>
                        </div>
                        <div>
                            <p className='statusbtn'>Status:</p>
                            <Switch {...label} defaultChecked color="error" /> Active
                        </div>
                    </div>
                </Box>


                <Box
                    sx={{
                        boxShadow: 3,
                        // width: "45%",
                        padding: "16px",
                        margin: "20px 0",
                        minHeight: "200px",
                        bgcolor: "white",
                        color: "grey.800",
                        borderRadius: 2,
                    }}
                    className="box"
                >

                    <div className="customerReminder">
                        <h4>Team Reminder</h4><input type="number" placeholder='1' />Days before Upcoming Jobs at <input type="number" placeholder='9:00 Am' />
                    </div>
                    <div className="automationcardbtns">
                        <div>
                            <Button
                                style={{
                                    background: "black",
                                    color: "white",
                                    padding: "0 20px",
                                    borderRadius: "15px",
                                    fontWeight: "700",
                                    textTransform: "capitalize"
                                }}
                            >
                                Edit
                            </Button>
                            <Button
                                style={{
                                    padding: "0 20px",
                                    marginLeft: "5px",
                                    borderRadius: "15px",
                                    color: "black"
                                }}
                            >
                                Save
                            </Button>
                        </div>
                        <div>
                            <p className='statusbtn'>Status:</p>
                            <Switch {...label} defaultChecked color="error" /> Active
                        </div>
                    </div>
                </Box>


                <Box
                    sx={{
                        boxShadow: 3,
                        // width: "45%",
                        padding: "25px",
                        margin: "20px 0",
                        minHeight: "200px",
                        bgcolor: "white",
                        color: "grey.800",
                        borderRadius: 2,
                    }}
                    className="box"
                >
                    <div className="customerReviewReminder">
                        <h4>Customer Reviews Reminder</h4><input type="number" placeholder='1' /> Hour after the job is completed
                    </div>
                    <p className='automationcardparagraph'>Thank you for using river city tree service to cut your trees,
                        please leave us a review on google or social media by clicking on one of the links below <br />
                        <IconButton><Google /><p style={{ fontSize: "15px", textDecoration: "underline", color: "black" }}> Google</p></IconButton>
                        <IconButton> <Facebook /><p style={{ fontSize: "15px", textDecoration: "underline", color: "black" }}> Facebook</p></IconButton>

                    </p>
                    <div className="automationcardbtns">
                        <div>
                            <Button
                                style={{
                                    background: "black",
                                    color: "white",
                                    padding: "0 20px",
                                    borderRadius: "15px",
                                    fontWeight: "700",
                                    textTransform: "capitalize"
                                }}
                            >
                                Edit
                            </Button>
                            <Button
                                style={{
                                    padding: "0 20px",
                                    marginLeft: "5px",
                                    borderRadius: "15px",
                                    color: "black"
                                }}
                            >
                                Save
                            </Button>
                        </div>
                        <div>
                            <p className='statusbtn'>Status:</p>
                            <Switch {...label} defaultChecked color="error" /> Active
                        </div>
                    </div>
                </Box>


                <Box
                    sx={{
                        boxShadow: 3,
                        // width: "45%",
                        padding: "16px",
                        margin: "20px 0",
                        minHeight: "200px",
                        bgcolor: "white",
                        color: "grey.800",
                        borderRadius: 2,
                    }}
                    className="box"
                >

                    <div className="customerReminder">
                        <h4>Customer Estimates Follow up</h4><input type="number" placeholder='1' />Days after estimate was sent if
                        not approved or declined
                    </div>
                    <div className="automationcardbtns">
                        <div>
                            <Button
                                style={{
                                    background: "black",
                                    color: "white",
                                    padding: "0 20px",
                                    borderRadius: "15px",
                                    fontWeight: "700",
                                    textTransform: "capitalize"
                                }}
                            >
                                Edit
                            </Button>
                            <Button
                                style={{
                                    padding: "0 20px",
                                    marginLeft: "5px",
                                    borderRadius: "15px",
                                    color: "black"
                                }}
                            >
                                Save
                            </Button>
                        </div>
                        <div>
                            <p className='statusbtn'>Status:</p>
                            <Switch {...label} defaultChecked color="error" /> Active
                        </div>
                    </div>
                </Box>

                <Box
                    sx={{
                        boxShadow: 3,
                        // width: "45%",
                        padding: "16px",
                        margin: "20px 0",
                        minHeight: "200px",
                        bgcolor: "white",
                        color: "grey.800",
                        borderRadius: 2,
                    }}
                    className="box"
                >

                    <div className="customerReminder">
                        <h4>Auto Invoicing</h4><select >
                            <option value="Immediately">Immediately</option>
                            <option value="Later">Later</option>
                        </select>Once job is mark completed.
                    </div>
                    <div className="automationcardbtns">
                        <div>
                            <Button
                                style={{
                                    background: "black",
                                    color: "white",
                                    padding: "0 20px",
                                    borderRadius: "15px",
                                    fontWeight: "700",
                                    textTransform: "capitalize"
                                }}
                            >
                                Edit
                            </Button>
                            <Button
                                style={{
                                    padding: "0 20px",
                                    marginLeft: "5px",
                                    borderRadius: "15px",
                                    color: "black"
                                }}
                            >
                                Save
                            </Button>
                        </div>
                        <div>
                            <p className='statusbtn'>Status:</p>
                            <Switch {...label} defaultChecked color="error" /> Active
                        </div>
                    </div>
                </Box>


                <Box
                    sx={{
                        boxShadow: 3,
                        // width: "45%",
                        padding: "16px",
                        margin: "20px 0",
                        minHeight: "200px",
                        bgcolor: "white",
                        color: "grey.800",
                        borderRadius: 2,
                    }}
                    className="box"
                >

                    <div className="customerReminder">
                        <h4>Customer Invoice Follow up</h4><input type="number" placeholder='1' />Days after invoice due date
                    </div>
                    <div className="automationcardbtns">
                        <div>
                            <Button
                                style={{
                                    background: "black",
                                    color: "white",
                                    padding: "0 20px",
                                    borderRadius: "15px",
                                    fontWeight: "700",
                                    textTransform: "capitalize"
                                }}
                            >
                                Edit
                            </Button>
                            <Button
                                style={{
                                    padding: "0 20px",
                                    marginLeft: "5px",
                                    borderRadius: "15px",
                                    color: "black"

                                }}
                            >
                                Save
                            </Button>
                        </div>
                        <div>
                            <p className='statusbtn'>Status:</p>
                            <Switch {...label} defaultChecked color="error" /> Active
                        </div>
                    </div>
                </Box>

                <Box
                    sx={{
                        boxShadow: 3,
                        // width: "45%",
                        padding: "25px",
                        margin: "20px 0",
                        minHeight: "200px",
                        bgcolor: "white",
                        color: "grey.800",
                        borderRadius: 2,
                    }}
                    className="box"
                >
                    <div className="customerReviewReminder">
                        <h4>Send Coupons</h4><input type="number" placeholder='180' /> To All customers or tagged customers
                    </div>
                    <p className='automationcardparagraph'>
                        Jame, We received your work order request one of our team members will
                        reach out to you shortly.
                    </p>
                    <div className="automationcardbtns">
                        <div>
                            <Button
                                style={{
                                    background: "black",
                                    color: "white",
                                    padding: "0 20px",
                                    borderRadius: "15px",
                                    fontWeight: "700",
                                    textTransform: "capitalize"
                                }}
                            >
                                Edit
                            </Button>
                            <Button
                                style={{
                                    padding: "0 20px",
                                    marginLeft: "5px",
                                    borderRadius: "15px",
                                    color: "black"
                                }}
                            >
                                Save
                            </Button>
                        </div>
                        <div>
                            <p className='statusbtn'>Status:</p>
                            <Switch {...label} defaultChecked color="error" /> Active
                        </div>
                    </div>
                </Box>

                <Box
                    sx={{
                        boxShadow: 3,
                        // width: "45%",
                        padding: "25px",
                        margin: "20px 0",
                        minHeight: "200px",
                        bgcolor: "white",
                        color: "grey.800",
                        borderRadius: 2,
                    }}
                    className="box"
                >
                    <div className="customerReviewReminder">
                        <h4>Online form submitted notify owner/ Manager of work order received</h4>
                    </div>
                    <p className='automationcardparagraph'>
                        Hi River City Tree Service, you just received a new work order request,
                        to respond click on reply button below or open your app and reply.
                        <div><Button
                            style={{
                                background: "black",
                                color: "white",
                                padding: "0 20px",
                                borderRadius: "15px",
                                margin: "5px 0",
                                fontWeight: "700",
                                textTransform: "capitalize"
                            }}
                        >
                            Reply
                        </Button></div>
                    </p>
                    <div className="automationcardbtns">
                        <div>
                            <Button
                                style={{
                                    background: "black",
                                    color: "white",
                                    padding: "0 20px",
                                    borderRadius: "15px",
                                    fontWeight: "700",
                                    textTransform: "capitalize"
                                }}
                            >
                                Edit message
                            </Button>
                            <Button
                                style={{
                                    padding: "0 20px",
                                    marginLeft: "5px",
                                    borderRadius: "15px",
                                    color: "black"
                                }}
                            >
                                Save
                            </Button>
                        </div>
                        <div>
                            <p className='statusbtn'>Status:</p>
                            <Switch {...label} defaultChecked color="error" /> Active
                        </div>
                    </div>
                </Box>

            </div>
        </div >
    )
}

export default Automation
