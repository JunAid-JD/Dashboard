import React from 'react'
import Typography from '@mui/material/Typography'

const Notification = [
    {
        NotificationHeader: 'enim exercitationem id',
        details: 'lorema asnai asnda sldanskd vasid asldk kasdk mamsd illum eius ',
        NotificationTime: '1 '
    },
    {
        NotificationHeader: 'commodi sint repellat',
        details: 'Deleniti adipisci qui illum eius enim est natuseius enim est natus',
        NotificationTime: '10 '
    },
    {
        NotificationHeader: 'magnam ratione dicta',
        details: 'Non ab magni hic et. Eos voluptatem velit dolore eius enim est natus',
        NotificationTime: '20 '
    }
]

const NotificationBox = () => {
    return (

        <>
            {
                Notification.map((value, key) => {
                    return (
                        <div style={{
                            width: '100%', height: '65px', backgroundColor: 'rgba(112,112,112,0.1)', borderRadius: '15px'
                            , marginTop: '10px', padding: "10px", textOverflow: 'ellipsis'
                        }}>
                            <Typography style={{ fontSize: '10px', textAlign: 'right' }} >{value.NotificationTime} min ago</Typography>
                            <Typography variant="h6" color="initial" style={{ marginTop: '-18px', fontWeight: "600" }}>{value.NotificationHeader}</Typography>
                            <p style={{
                                fontSize: '14px', fontWeight: '100', width: '100%', marginTop: '5px', height: '18px', overflow: 'hidden',
                                textOverflow: ''
                            }}>{value.details}</p>
                        </div>
                    )
                })
            }
        </>

    )
}

export default NotificationBox

