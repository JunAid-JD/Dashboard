import React from 'react';
import { BarChart, Bar } from "recharts";
import { Box, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    row_box: {
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center',
        margin: '10px 0'

    },
    view: {
        backgroundColor: '#0B181C', borderRadius: " 0 0 8px 8px", display: 'flex', justifyContent: 'end', padding: '0 10px', alignItems: 'center',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    inner_box: {
        padding: "12px"
    },
    arrow: {
        width: '18px', marginLeft: '10px', height: '13px', paddingTop: '0px'
    }
}))

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
        fill: "rgba(5,187,60,0.3)"
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
        fill: "rgba(5,187,60,0.3)"
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
        fill: "rgba(5,187,60,0.3)"
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
        fill: "rgba(5,187,60,0.3)"
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
        fill: "rgba(5,187,60,0.3)"
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
        fill: "#05BB3C"
    },

];

const ReportChart = (props) => {
    const Classes = useStyles();

    return (
        <div>
            <Box
                sx={{
                    mt: 1, ml: 3,
                    boxShadow: 3,
                    width: '170px',
                    height: 'auto',
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                    color: (theme) =>
                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                    borderRadius: 2,
                    fontSize: '0.875rem',
                    fontWeight: '600', display: 'flex', flexDirection: 'column'
                }}
            >
                <Box className={Classes.inner_box} style={{ backgroundColor: `${props.bgcolor}`, color: `${props.color}`, borderRadius: '8px 8px 0 0' }}>
                    <Typography variant="h6" >{props.heading}</Typography>
                    <Box className={Classes.row_box}>
                        <Typography variant="h4" >{props.Amount}</Typography>
                        <BarChart width={55} height={37} data={data}>
                            <Bar dataKey="uv" />
                        </BarChart>
                    </Box>
                </Box>
                <Box className={Classes.view}>
                    <Typography color="white" fontSize={16} >Open</Typography>
                    <img src="\Assets\WhiteArrow.png" alt="" className={Classes.arrow} />
                </Box>


            </Box>
        </div>
    )
}

export default ReportChart


