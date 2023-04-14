import React from 'react'
import { Button } from '@mui/material';
import retun from '../Images/return.png'

const ReturnBtn = () => {
    return (
        <div>
            <Button style={{ backgroundColor: '#0B181C', width: '130px', display: 'flex', justifyContent: 'space-around', color: 'white', padding: '5px 20px', borderRadius: '30px', textTransform: 'none' }}>
                <img src={return} alt="" />
                Return
            </Button>
        </div>
    )
}

export default ReturnBtn
