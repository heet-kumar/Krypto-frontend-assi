import React from 'react';
import {Box} from '@mui/material';
import DB from '../../db.json';
import cardtemplete from './cardtemplate';

const Homepage = () => {

    return(
        <Box sx={{mt:13,gap:3,mb:5,width: '100%',display:'flex',flexWrap: 'wrap',justifyContent: 'center'}}>
            {DB.products.map(cardtemplete)}
        </Box>
    );
}

export default Homepage;