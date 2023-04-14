import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    searchInput: {
        backgroundColor: "rgba(112,112,112,0.1)", border: 'none', outline: 'none', borderRadius: '10px',
        height: "40px", paddingLeft: "10px", fontSize: '17px', width: '300px',
    },
}))


const Shearchtab = () => {
    const classes = useStyles();

    return (
        <div>
            <input type='text' className={classes.searchInput} placeholder="Search here..." />
        </div>
    )
}

export default Shearchtab