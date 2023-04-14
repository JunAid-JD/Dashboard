import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { ArrowDropDown, ArrowRight } from '@mui/icons-material'
import chart from '../../Images/wochart.png'



const WorkOrderBox = () => {
    return (
        <>
            <Box
                sx={{
                    boxShadow: 1, height: "180px",
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                    color: (theme) => theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                    borderRadius: 2, fontSize: '0.875rem', fontWeight: '700', p: 1.5
                }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '30px', alignItems: 'center' }}>
                    <div >
                        <p>Work Orders</p>
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
                                width: "80px",
                                padding: "1px 4px",
                                fontSize: "12px",
                                height: "20px",
                            }}
                        >
                            New WO
                        </Button>
                        {/* <BlackBtn params={{ title: 'New Invoice' }} /> */}
                    </div>
                </div>
                <div className="wochart">
                    <img src={chart} alt="chart" />
                </div>
                <p
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                    }}
                > View All <ArrowRight />
                </p>
            </Box>
        </>
    )
}

export default WorkOrderBox
