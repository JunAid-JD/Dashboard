import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    LineChartBox: {
        backgroundColor: "rgba(112,112,112,0.1)", height: '30px', borderRadius: '7px'
        , display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 5px',
        width: "30%", marginRight: '2px', marginTop: '5px'
    }
}))

const EstimateGraph = ({ params }) => {
    const classes = useStyles();
    const { title, amount, color } = params;
    return (
        <>
            <div className={classes.LineChartBox}>
                <div>
                    <Typography color="initial" style={{ fontSize: '10px' }}>{title}</Typography>
                    <Typography color="initial" style={{ color: 'rgba(112,112,112,0.6)', fontSize: '8px', marginTop: '-1px' }}>{amount}</Typography>
                </div>
                <div style={{ width: '12px', height: "12px", borderRadius: '50%', backgroundColor: `${color}`, color: `${color}` }}></div>
            </div>
        </>
    )
}

export default EstimateGraph