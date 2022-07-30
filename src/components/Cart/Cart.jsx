import {React,useState,useEffect} from 'react';
import {Box, Typography} from '@mui/material';
import Card from './CartCard'

const Cart = () => {
    const [price,setprice] = useState(99999);
    const [dprice,setdprice] = useState(0);
    const [dc,setdc] = useState(0);
    const [tp,settp] = useState(price+dprice+dc);

    useEffect(() => {
        settp(price+dprice+dc);
    },[price,dprice,dc])

    return(
        <Box sx={{ mt:12,width:'100%',display: 'flex',justifyContent: 'center',gap:5}}>
            <Box sx={{backgroundColor:'#fff',display: 'flex',flexDirection:'column',justifyContent: 'center'}}>
                <Typography varient='h1' component='div' sx={{m:2.5,ml:4,fontSize:'180%'}}>
                    My Cart
                </Typography>
                <Card />
                <Card />
            </Box>
            <Box sx={{maxHeight:'200px',p:4,backgroundColor:'#fff',display: 'flex',flexDirection:'column'}}>
                <Typography varient='h1' component='div' sx={{fontSize:'180%',color:'#495057'}}>
                    Price Details
                </Typography>
                <Typography sx={{mt:2,display: 'flex',flexDirection:'column',justifyContent: 'center'}} >
                    <Box sx={{display:'flex',gap:10,justifyContent: 'space-between',alignItems: 'center'}}>
                        <Typography varient='h6'>Price</Typography>
                        <Typography varient='h6'>{price}</Typography>
                    </Box>
                    <Box sx={{display:'flex',gap:10,justifyContent: 'space-between',alignItems: 'center'}}>
                        <Typography varient='h6'>Discount Price</Typography>
                        <Typography varient='h6'>{dprice}</Typography>
                    </Box>
                    <Box sx={{pb:1,gap:10,borderBottom:'1px solid #000',display:'flex',justifyContent: 'space-between',alignItems: 'center'}}>
                        <Typography varient='h6'>Delivery Charge</Typography>
                        <Typography varient='h6'>{dc}</Typography>
                    </Box>
                    <Box sx={{mt:3,gap:10,display:'flex',justifyContent: 'space-between',alignItems: 'center'}}>
                        <Typography varient='h6'>Total Charge</Typography>
                        <Typography varient='h6'>{tp}</Typography>
                    </Box>
                </Typography>
            </Box>
        </Box>
    );
}

export default Cart;