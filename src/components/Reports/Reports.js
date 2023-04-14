import React from 'react'
import RC from '../../reuse/ReportChart.js'
import { Typography, Box, Button } from '@mui/material'
import Action from '../../reuse/Action.js'


//Max height menu
const options = [
    { title: 'Create invoice', route: '' },
];
const Reports = () => {
    return (
        <div >
            <Typography variant="h5" color="initial" fontWeight={600} style={{ margin: "1rem 0" }}>Reports</Typography>
            <Box className='MainBox'>
                <Box style={{ margin: '1px 0 20px 0', display: 'flex', flexWrap: "wrap", justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h6" color="#D5073C">Your reports</Typography>
                    </Box>
                    <Box style={{ display: 'flex', flexWrap: "wrap", alignItems: "center" }}>
                        <Button style={{ color: "#0B181C", backgroundColor: 'rgba(215, 40, 40, 0.2)', borderRadius: '30px', padding: '4px 15px', fontSize: '13px', textTransform: 'none', margin: "0 .3rem" }}>Custom report</Button>
                        <Button style={{ color: "#0B181C", backgroundColor: 'rgba(215, 40, 40, 0.2)', borderRadius: '30px', padding: '4px 15px', fontSize: '13px', margin: '.5rem 0.3rem', textTransform: 'none' }}>Create Report</Button>
                        <Action options={options} />
                    </Box>
                </Box >
                <Box style={{
                    display: 'flex', flexWrap: 'wrap',
                    marginLeft: '-20px', width: '100%'
                }}>
                    <RC heading='jobs' Amount="0" />
                    <RC heading='Leads Report' Amount="12" />
                    <RC heading='Activity' Amount="23" />
                    <RC heading='Time Sheets' Amount="0" />
                    <RC heading='Tax' Amount="0" />
                    <RC heading='Social Media' Amount="13" />
                    <RC heading='Payments' Amount="0" />
                    <RC heading='Estimates' Amount="0" />
                    <RC heading='Items & Service' Amount="673" />
                    <RC heading='Email Market' Amount="12" />
                    <RC heading='Web Requests' Amount="194" />
                    <RC heading='Call Data' Amount="0" />
                    <RC heading='Job Stats' Amount="33" />
                    <RC heading='Balances' Amount="24" />
                    <RC heading='Invoices' Amount="11" />
                </Box>

            </Box>
        </div>
    )
}

export default Reports