import React from 'react';
import {Stack,Button,Box,Typography,IconButton,Badge,Link} from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

const Header = () => {

    // useEffect(()=>{

    // })
    
    return (
        <Box style={{zIndex: 100,position:'fixed', top:0}} sx={{gap:'20%',backgroundColor:'#0066ff',width:'100%',display:'flex',justifyContent: 'space-evenly',alignItems: 'center'}}>
            <Typography sx={{color:'#fff',fontWeight:'600',fontSize:'200%',py:1}}>
                ShopKart.
            </Typography>
            <Box>
                <Stack spacing={2} direction="row">
                    <Button href='/products' sx={{color:'#fff'}} variant="text">Products</Button>
                    {
                        (window.location.pathname === '/' || window.location.pathname === '/signup')?
                            <Button href='/' style={{borderColor:'#fff'}} sx={{color:'#fff'}} variant="outlined">Login</Button>:<Button href='/' style={{borderColor:'#fff'}} sx={{color:'#fff'}} variant="outlined">Logout</Button>
                    }
                    {
                        (window.location.pathname === '/' || window.location.pathname === '/signup')?
                        <Link href="/">
                            <Badge badgeContent={1} color='secondary'>
                                <IconButton sx={{color:'#fff'}} componenet="label">
                                    <ShoppingCart/>
                                </IconButton>
                            </Badge>
                        </Link>:
                        <Link href="/cart">
                            <Badge badgeContent={1} color='secondary'>
                                <IconButton sx={{color:'#fff'}} componenet="label">
                                    <ShoppingCart/>
                                </IconButton>
                            </Badge>
                        </Link>
                    }
                </Stack>
            </Box>
        </Box>
    );

}

export default Header;