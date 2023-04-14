import React from 'react'
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    row_box: {
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center',
        margin: '1px 0'

    },
    view: {
        backgroundColor: '#E7E7E7', borderRadius: " 0 0 8px 8px", display: 'flex', justifyContent: 'end', padding: '0 10px', alignItems: 'center',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    inner_box: {
        padding: "12px"
    },
    arrow: {
        marginLeft: '10px', objectFit: "cover", height: '14px',
    }
}))


const Card = (props) => {
    const Classes = useStyles();

    return (
        <div>
            <Box
                sx={{
                    mt: 1, mr: 2,
                    boxShadow: 3,
                    width: '140px',
                    height: 'auto',
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                    color: (theme) =>
                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                    borderRadius: 2,
                    fontSize: '0.875rem',
                    fontWeight: '600', display: 'flex', flexDirection: 'column'
                }}>
                <Box className={Classes.inner_box} style={{ backgroundColor: `${props.bgcolor}`, color: `${props.color}`, borderRadius: '8px 8px 0 0' }}>
                    <Typography variant="" >{props.heading}</Typography>
                    <Box className={Classes.row_box}>
                        <Typography variant="h4" fontWeight='600'>{props.total}</Typography>
                        <Typography variant="" mt={1} style={{ color: `${props.percentageColor}` }}>{props.percentage}%</Typography>
                    </Box>
                </Box>
                <Box className={Classes.view}>
                    <Typography color="initial" fontSize={16} >View</Typography>
                    <img src="\Assets\arrow.png" alt="" className={Classes.arrow} />
                </Box>
            </Box>
        </div>
    )
}

export default Card