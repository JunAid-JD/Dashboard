import Button from '@mui/material/Button'

const BlackBtn = ({ title }) => {
    return (
        <>
            <Button style={{ color: 'white', textTransform: 'none', backgroundColor: 'black', borderRadius: '30px', width: '120px', height: '20px', padding: '15px 20px', fontSize: '16px' }}>
                {title}
            </Button>
        </>
    )
}

export default BlackBtn