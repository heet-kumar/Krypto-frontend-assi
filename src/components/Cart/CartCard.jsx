import {React,useState,useEffect} from 'react';
import { useTheme } from '@mui/material/styles';
import {Box,Button,ButtonGroup} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import DB from '../../db.json';



const CartCard = () => {
    const theme = useTheme();
    const [qty,setqty] = useState(1);

    useEffect(() =>{
    },[qty])

    return(
        <Box sx={{px:7,mb:2}}>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={DB.products[0].image}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {DB.products[0].title}
                    </Typography>
                    <Typography sx={{color:'black',fontSize:'120%'}}variant="subtitle1" color="text.secondary" component="div">
                        ₹ {DB.products[0].amount}
                    </Typography>
                    </CardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            '& > *': {
                            m: 1,
                            },
                        }}
                    >
                        <ButtonGroup size="large" aria-label="large button group">
                            <Button key="one" onClick={()=>{(qty>0)?setqty(qty-1):setqty(0)}} >-</Button>
                            <Button key="two">{qty}</Button>
                            <Button key="three" onClick={()=>setqty(qty+1)}>+</Button>
                        </ButtonGroup>
                    </Box>
                </Box>
            </Card>
        </Box>
    );
}

export default CartCard;