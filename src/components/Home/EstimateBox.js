import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
// import BlackBtn from '../../../Shear_Component/BlackBtn';
// import ViewBtn from '../../../Shear_Component/ViewBtn'
import EstimateGraphSportBox from './EstimateGraph'
import { ArrowDropDown, ArrowRight } from '@mui/icons-material';



const useStyles = makeStyles(() => ({
    LineChartBox: {
        backgroundColor: "rgba(112,112,112,0.1)", height: '30px', borderRadius: '7px'
        , display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 5px',
        width: "30%", marginRight: '2px', marginTop: '5px'
    },
    toolkit: {
        height: '100px', width: '100px', fontSize: '10px'
    }
}))

const EstimateBox = () => {
    const classes = useStyles();
    const data = [
        {
            "name": "Mon",
            "uv": 4000,
            "pv": 2400,
            "lv": 1400,
            "amt": 2400
        },
        {
            "name": "Tus",
            "uv": 3000,
            "pv": 1398,
            "lv": 3000,
            "amt": 2210
        },
        {
            "name": "Wen",
            "uv": 2000,
            "pv": 9800,
            "lv": 5000,
            "amt": 2290
        },
        {
            "name": "Thr",
            "uv": 2780,
            "pv": 3908,
            "lv": 1000,
            "amt": 2000
        },
        {
            "name": "Fri",
            "uv": 1890,
            "pv": 4800,
            "lv": 2400,
            "amt": 2181
        },
        {
            "name": "Sat",
            "uv": 2390,
            "pv": 3800,
            "lv": 5000,
            "amt": 2500
        },
        {
            "name": "Sun",
            "uv": 3490,
            "pv": 4300,
            "lv": 6000,
            "amt": 2100
        },
    ]

    return (
        <div>
            <Box
                sx={{
                    boxShadow: 1, height: "180px",
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                    borderRadius: 2, fontSize: '0.875rem', fontWeight: '700', p: 1.5
                }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '30px', alignItems: 'center' }}>
                    <div >
                        <p>Estimate</p>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '-3px' }}>
                            <div className="employeviewtime" style={{ fontSize: "10px" }}>
                                Last 7 days <ArrowDropDown />
                            </div>
                            <img src="\Assets\downBlack.png" alt='' style={{ cursor: 'pointer', width: '10px', marginLeft: '3px' }} />
                        </div>
                    </div>
                    <div>
                        <Button
                            style={{
                                color: "white",
                                textTransform: "none",
                                backgroundColor: "black",
                                borderRadius: "30px",
                                width: "100px",
                                padding: "1px 4px",
                                fontSize: "12px",
                                height: "20px",
                            }}
                        >
                            New Estimate
                        </Button>
                        {/* <BlackBtn params={{ title: 'New Estimate' }} /> */}
                    </div>
                </div>

                <div style={{ display: 'flex', marginTop: '2px' }}>
                    <EstimateGraphSportBox params={{ title: 'Created', amount: 70, color: "rgb(18,85,107)" }} />
                    <EstimateGraphSportBox params={{ title: 'Sent', amount: 200, color: "rgb(251,197,87)" }} />
                    <EstimateGraphSportBox params={{ title: 'Approved', amount: 100, color: "rgb(27,187,60)" }} />
                    <EstimateGraphSportBox params={{ title: 'Attention', amount: 100, color: "#D5073C" }} />
                </div>

                {/* lineChart */}
                <div style={{ width: '275px', overflow: 'hidden' }}>
                    <LineChart
                        width={300}
                        height={100}
                        data={data}
                        margin={{ top: 5, right: 30, left: -30, bottom: 0 }} >
                        <CartesianGrid strokeDasharray="" />
                        <XAxis dataKey="name" style={{ fontSize: '7px' }} />
                        <YAxis style={{ fontSize: '7px' }} />
                        <Tooltip style={{ opacity: '100000' }} />
                        <Line type="monotone" dataKey="pv" stroke="#12556B" />
                        <Line type="monotone" dataKey="uv" stroke="#FBC557" />
                        <Line type="monotone" dataKey="lv" stroke="#1BBB3C" />
                        <Line type="monotone" dataKey="amt" stroke="#D5073C" />
                    </LineChart>
                </div>
                <p
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                    }}
                >
                    View All <ArrowRight />
                </p>
            </Box>

        </div>
    )
}

export default EstimateBox