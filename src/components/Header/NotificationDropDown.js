import React from 'react'
import { Typography, Button } from '@mui/material'
import NotificationBox from './NotificationBox'

const NotficationDropdown = () => {
    return (
        <div style={{ marginTop: '20px', }}>
            <div className='notificationdropdown'>
                <Typography variant="h6" color="initial" style={{ fontWeight: "600" }}>Latest</Typography>
                <div>
                    <Button style={{ fontSize: '12px', padding: '2px 15px', borderRadius: '20px', backgroundColor: 'rgba(213,7,60,0.2)', marginRight: '10px', color: 'black' }}>clear all</Button>
                    <Button style={{ fontSize: '12px', padding: '2px 15px', borderRadius: '20px', backgroundColor: 'rgb(208 205 205 / 20%)', color: 'black' }}>Mark as read</Button>
                </div>
            </div>
            <NotificationBox />

            <Typography variant="h6" color="initial" style={{ marginTop: '20px', fontWeight: "600" }}>26th November 2019</Typography>
            <div style={{
                width: '100%', height: '65px', backgroundColor: 'rgba(112,112,112,0.1)', borderRadius: '15px'
                , marginTop: '10px', padding: "10px", textOverflow: 'ellipsis'
            }}>
                <Typography style={{ fontSize: '10px', textAlign: 'right' }} >5 min ago</Typography>
                <Typography variant="h6" color="initial" style={{ marginTop: '-18px', fontWeight: "600" }}>enim exercitationem id</Typography>
                <p style={{
                    fontSize: '14px', fontWeight: '100', width: '100%', marginTop: '5px', height: '18px', overflow: 'hidden',
                    textOverflow: ''
                }}>Consequatur voluptas illo dolor aut. Id voluptas..</p>
            </div>
        </div>
    )
}

export default NotficationDropdown