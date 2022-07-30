import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {IconButton,Link,Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ProductDetailPage from '../ProductDetailPage/ProductDetailPage'

const Cardtemplete = (prop) => {

    return(
        <Link key={prop.id} href={`/products/${prop.id}`} sx={{textDecoration: 'none'}} >
            <Card key ={prop.id} sx={{ width: 250, height: 320 ,position: 'relative'}}>
                <CardMedia
                    component="img"
                    height="140"
                    image={prop.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography style={{textDecoration: 'none'}} sx={{textDecoration: 'none'}} gutterBottom variant="body" component="div">
                    {prop.title}
                    </Typography>
                    <Typography variant="body" color="text.secondary" sx={{color:'black',fontSize:'120%',textDecoration: 'none'}}>
                    ₹ {prop.amount}
                    </Typography>
                    <Box varient="body2" sx={{py:.5,mt:.5,width:'15%',backgroundColor:'green',color:'#fff',display:'flex',justifyContent: 'center',fontWeight:'bold',fontSize:'80%',textDecoration: 'none'}}>
                        {prop.rating}
                    </Box>
                </CardContent>
                <CardActions sx={{gap:10,width:'100%',position: 'absolute',display:'flex',bottom:0,left:0,right:0,justifyContent: 'space-evenly'}}>
                    <IconButton><FavoriteIcon /></IconButton>
                    <IconButton><AddShoppingCartIcon /></IconButton>
                </CardActions>
            </Card>
        </Link>
    );
}

export default Cardtemplete;