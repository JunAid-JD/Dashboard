import React from 'react'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Menu, Button, MenuItem } from '@mui/material'
// import { Link } from 'react-router-dom'
import down from '../Images/down.png'


const Action = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <React.Fragment>
                        <Button variant="contained" {...bindTrigger(popupState)} style={{ backgroundColor: '#0B181C', textTransform: 'none', borderRadius: '30px', padding: '5px 25px', boxShadow: '0 0 0 0' }}>
                            Action
                            <img src={down} alt="" style={{ marginLeft: '8px' }} />
                        </Button>
                        <Menu {...bindMenu(popupState)}>
                            {props.options.map((option) => (
                                // <Link to={`${option.route}`} style={{ textDecoration: 'none', color: "#666666" }}>
                                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose} >
                                    {option.title}
                                </MenuItem>
                                // </Link>
                            ))}
                        </Menu>
                    </React.Fragment>
                )}
            </PopupState>
        </div>
    )
}

export default Action
