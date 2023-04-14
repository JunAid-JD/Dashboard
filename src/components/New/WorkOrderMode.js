import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles(({ theme }) => ({
    lab: {
        width: '550px',
        display: "flex",
    },
    leftSide: {
        maxWidth: '41%',
        float: 'left',
    },
    root: {
        "& .MuiDataGrid-columnHeaders": {
            fontSize: 17.8,
        },
        "& .MuiDataGrid-row Mui-selected": {
            backgroundColor: "red"
        }
    },
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0px',
            height: '10px',
        },
        '*::-webkit-scrollbar-thumb': {
            width: '0rem',
            backgroundColor: '#D5073C',
            borderRadius: "2rem",
        },
    },
}))

const WorkOrderMode = (props) => {
    const classes = useStyles();

    return (
        <div style={{ display: 'flex' }}>
            <Box className={classes.leftSide}>
                {/* Client details */}
                {console.log(props)}
                <Typography variant="h6" fontWeight={600} color="#D5073C">Client Details</Typography>
                <Box ml={2}>
                    <Box className={classes.lab}>
                        <Typography fontWeight={600} style={{ width: '100px' }}>Name </Typography>
                        <p>{props.ClientData.Cname}</p>
                    </Box>
                    <Box className={classes.lab}>
                        <Typography fontWeight={600} style={{ width: '100px' }}>Company  </Typography>
                        <p>{props.ClientData.Company}</p>
                    </Box>
                    <Box className={classes.lab}>
                        <Typography fontWeight={600} style={{ width: '100px' }}>Email </Typography>
                        <p>{props.ClientData.email}</p>
                    </Box>
                    <Box className={classes.lab}>
                        <Typography fontWeight={600} style={{ width: '100px' }}>Phone </Typography>
                        <p>{props.ClientData.Cname}</p>
                    </Box>
                </Box>
                {/* Service Location  */}
                <Typography variant="h6" fontWeight={600} mt={3} color="#D5073C">Service Location</Typography>
                <Box ml={2}>
                    <Box className={classes.lab}>
                        <Typography fontWeight={600} style={{ width: '100px' }}>Address </Typography>
                        <div style={{ width: '270px' }}>
                            <p >{props.ClientData.address}</p>
                        </div>
                    </Box>
                    <Box className={classes.lab}>
                        <Typography fontWeight={600} style={{ width: '100px' }}>City  </Typography>
                        <p>{props.ClientData.City}</p>
                    </Box>
                    <Box className={classes.lab}>
                        <Typography fontWeight={600} style={{ width: '100px' }}>Regin </Typography>
                        <p>{props.ClientData.Regin}</p></Box>
                    <Box className={classes.lab}>
                        <Typography fontWeight={600} style={{ width: '100px' }}>Postal code </Typography>
                        <p>{props.ClientData.Postal_code}</p>
                    </Box>
                    <Box className={classes.lab}>
                        <Typography fontWeight={600} style={{ width: '100px' }}>Country </Typography>
                        <p>{props.ClientData.country}</p>
                    </Box>
                </Box>
                {/* Assign Job  */}
                <Typography variant="h6" fontWeight={600} mt={3} color="#D5073C">Assign Job</Typography>
                <Box ml={2}>
                    <Box className={classes.lab}>
                        <Typography fontWeight={600} style={{ width: '100px' }}>Member </Typography>
                        <p>{props.ClientData.member}</p>
                    </Box>
                </Box>

            </Box>




            {/* Right Side */}
            <Box >
                {/* Job Details  */}
                <Typography variant="h6" fontWeight={600} color="#D5073C">Job Detail</Typography>
                <Box ml={2}>
                    <Box className={classes.lab}>
                        <Typography fontWeight={600} style={{ width: '100px' }}>Description </Typography>
                        <div style={{ width: '300px' }}>
                            <p>{props.ClientData.Description}</p>
                        </div>
                    </Box>
                </Box>
                {/* Schedule  */}
                <Typography variant="h6" fontWeight={600} color="#D5073C" mt={3}>Schedule</Typography>
                <Box ml={2}>
                    <Box className={classes.lab}>
                        <Typography fontWeight={600} style={{ width: '100px' }}>Start Date </Typography>
                        <p>{props.ClientData.sDate}</p>
                    </Box>
                    <Box className={classes.lab}>
                        <Typography fontWeight={600} style={{ width: '100px' }}>End Date </Typography>
                        <p>{props.ClientData.sDate}</p>
                    </Box>
                    <Box className={classes.lab}>
                        <Typography fontWeight={600} style={{ width: '100px' }}>Start Time </Typography>
                        <p>{props.ClientData.sTime}</p>
                    </Box>
                    <Box className={classes.lab}>
                        <Typography fontWeight={600} style={{ width: '100px' }}>End Time </Typography>
                        <p>{props.ClientData.eTime}</p>
                    </Box>
                </Box>
                {/* Billing  */}
                <Typography variant="h6" fontWeight={600} color="#D5073C" mt={3}>WorkOrder Notes</Typography>
                <Box ml={2}>
                    <Box className={classes.lab}>
                        <Typography fontWeight={600} style={{ width: '100px' }}>Notes </Typography>
                        <div style={{ width: '300px' }}>
                            <p>{props.ClientData.notes}</p>
                        </div>
                    </Box>
                </Box>
                <Typography variant="h6" fontWeight={600} color="#D5073C" mt={3}>Billing</Typography>
                <Box ml={2}>
                    <Box className={classes.lab}>
                        <Typography fontWeight={600} style={{ width: '200px' }}>Allow Auto Invoicing </Typography>
                        <p>{props.ClientData.Invoice ? "No" : 'Yes'}</p>
                    </Box>
                    <Box className={classes.lab}>
                        <Typography fontWeight={600} style={{ width: '200px' }}>Allow Invoice Reminder </Typography>
                        <p>{props.ClientData.Reminder ? "No" : 'Yes'} </p>
                    </Box>
                </Box>
            </Box>
        </div >
    )
}

export default WorkOrderMode
