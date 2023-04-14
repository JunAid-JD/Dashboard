import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
// import BlackBtn from '../../../Shear_Component/BlackBtn'
import EstimateGraph from './EstimateGraph'
import { ArrowDropDown, ArrowRight } from '@mui/icons-material';
// import ViewBtn from '../../../Shear_Component/ViewBtn'

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
const InvoiceBox = () => {
    return (
        <div>
            <Box
                sx={{
                    boxShadow: 1, height: "180px",
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                    color: (theme) => theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                    borderRadius: 2, fontSize: '0.875rem', fontWeight: '700', p: 1.5
                }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '30px', alignItems: 'center' }}>
                    <div >
                        <p>Invoice</p>
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
                            New Invoices
                        </Button>
                        {/* <BlackBtn params={{ title: 'New Invoice' }} /> */}
                    </div>
                </div>
                <div style={{ display: 'flex', marginTop: '2px' }}>
                    <EstimateGraph params={{ title: 'Paid', amount: 70, color: "rgb(27,187,60)" }} />
                    <EstimateGraph params={{ title: 'Due', amount: 200, color: "#D5073C" }} />
                    <EstimateGraph params={{ title: 'Draft', amount: 100, color: "rgb(18,85,107)" }} />
                    <EstimateGraph params={{ title: 'Need ', amount: 100, color: "rgb(251,197,87)" }} />
                </div>
                <div style={{ overflow: 'hidden', marginTop: '0px', width: "275px" }}>
                    <LineChart
                        width={300}
                        height={100}
                        data={data}
                        margin={{ top: 5, right: 30, left: -30, bottom: 0 }} >
                        <CartesianGrid strokeDasharray="" />
                        <XAxis dataKey="name" style={{ fontSize: '7px' }} />
                        <YAxis style={{ fontSize: '7px' }} />
                        <Tooltip style={{ opacity: '100000' }} />
                        <Line type="monotone" dataKey="pv" stroke="#D5073C" />
                        <Line type="monotone" dataKey="uv" stroke="#1BBB3C" />
                        <Line type="monotone" dataKey="lv" stroke="#FBC557" />
                        <Line type="monotone" dataKey="amt" stroke="#12556B" />
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

export default InvoiceBox