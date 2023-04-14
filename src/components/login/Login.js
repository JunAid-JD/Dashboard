import './Login.css'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { Button, Divider, FormHelperText, OutlinedInput } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ArrowBackIosNew, ArrowForwardIos, Close, MoreHoriz } from '@mui/icons-material';
import google from '../../Images/google_logo.png'
import fb from '../../Images/fb_logo.png'
import FieldShark from '../../Images/FieldShark.png'
import dashboard from '../../Images/dashboard.png'
import chat from '../../Images/chat.png'


const Login = () => {


    // ------------ login auth ---------- //
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    let name, value;
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    const DataAuth = () => {
        localStorage.setItem('user', JSON.stringify(user.email))
    }


    // const [showPassword, setShowPassword] = useState(false);

    // const handleClickShowPassword = () => setShowPassword((show) => !show);

    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };

    return (
        <>
            <div className="login">
                <div className="loginleft">
                    <div className="loginlefthead">
                        <h3>LOGIN TO FIELDSHARK</h3>
                        <p>Didn't have an account?
                            <NavLink to='/Signup' >
                                <strong>Signup</strong>
                            </NavLink>
                        </p>
                    </div>
                    <form className='loginform'>
                        <div style={{ textAlign: "left" }}>

                            <label htmlFor="">Email<span>*</span></label>
                            <input type='email' placeholder="Email" name='email' value={user.email} onChange={handleInput} />
                            <label htmlFor="">Password<span>*</span></label>
                            <input type='password' placeholder="password" value={user.password} onChange={handleInput} name="password" />
                            <p className='forgetpassword'>Forgot Your Password ?</p>
                            {/* <label htmlFor="email" style={{ marginBottom: ".5rem", fontWeight: '800' }}>Email*</label>
                            <TextField label="Email" id="fullWidth" fullWidth name='email' value={user.email} onChange={handleInput} />


                        
                            <label className='label' htmlFor="password" style={{ marginBottom: ".5rem", fontWeight: '800' }}>Password*</label>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput value={user.password} onChange={handleInput} name="password"
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                                <FormHelperText id="outlined-weight-helper-text" className='forgetpassword' style={{ color: "black" }}>Forget Password?</FormHelperText>
                            </FormControl> */}
                        </div>
                        <NavLink to='/GetStarted' >
                            <Button
                                style={{
                                    backgroundColor: "#000000",
                                    color: "#FFFFFF",
                                    borderRadius: "30px",
                                    width: "200px",
                                    fontSize: "18px",
                                    height: "40px",
                                    margin: "1.5rem 0 .5rem",
                                    textTransform: "capitalize",
                                    fontWeight: "700"
                                }}
                                onClick={DataAuth}> Login</Button></NavLink>

                    </form>



                    <Divider className='loginDivider'> OR </Divider>

                    <div className="signUp_with">
                        <div>
                            <img src={google} alt="" width="40px" />
                            <p>Sign up with Google</p>
                        </div>
                        <div>
                            <img src={fb} alt="" width="40px" />
                            <p>Sign up with Facebook</p>
                        </div>

                    </div>
                    <p className='recapta'>This site is protected by <strong>ReCAPTHA</strong> and the <strong>Google privacy policy</strong> and <strong>Terms of Services</strong> Apple
                    </p>

                </div>
                <div className="loginright">

                    <div className="loginrighthead">
                        <img src={FieldShark} alt="fieldshark" />
                        <IconButton className='loginclose'>
                            <Close />
                        </IconButton>
                    </div>

                    <div className="loginrightbody">
                        <IconButton id='loginmoveleft'>
                            <ArrowBackIosNew />
                        </IconButton>
                        <img src={dashboard} alt="dashboard" />
                        <IconButton id='loginmoveright'>
                            <ArrowForwardIos />
                        </IconButton>
                    </div>

                    <div className="loginrightfooter">
                        <p>Voluptas veniam quas fugiat. Dolore nisi id ea culpa vitae. Vitae rerum et quia consectetur deserunt. Consequatur
                            voluptatum consequatur fuga ipsam voluptas dolorem rerum repellendus perferendis. Cumque perferendis quod.
                            Officiis in enim.</p>

                        <IconButton id="logindotdot">
                            <MoreHoriz />
                        </IconButton>


                        <span className='chaticon'>
                            <img src={chat} alt="chaticon" />
                        </span>
                    </div>


                </div>
            </div >
        </>
    )
}

export default Login
