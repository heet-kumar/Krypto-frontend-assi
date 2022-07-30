import React, { useState,useEffect } from "react";
import Header from "../header/header";
import {Box,Typography,Button,Link} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea, CardActions,IconButton } from '@mui/material';
import {useParams} from 'react-router-dom';
import DB from '../../db.json';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ProductDetailPage = () => {
    const {id} = useParams();
    const [color,setcolor] = useState(false);

    useEffect(()=>{

    },[color])

    return(
        <>
            <Card sx={{ backgroundColor:'#fff',width:'100%',height:'100vh',display:'flex',justifyContent: 'center',alignItems: 'center'}}>
                <Box sx={{width:'90%',height:'100vh',display: 'flex',justifyContent: 'center',alignItems: 'center',gap:10}}>
                    <CardMedia
                        sx={{}}
                        component="img"
                        height="350"
                        image={DB.products[id-1].image}
                        alt="green iguana"
                    />
                    <Box>
                        <Box sx={{pl:3,borderLeft: '3px solid #adb5bd'}}>
                            <Typography sx={{gap:2,display:'flex',justifyContent: 'space-between',alignItems: 'center'}} gutterBottom variant="h4" component="div">
                                {DB.products[id-1].title}
                                <IconButton onClick={()=>{(!color)? setcolor(true):setcolor(false)}}>
                                    {(!color)?<FavoriteBorderIcon fontSize='large'/>:<FavoriteIcon sx={{color:'red'}} fontSize='large'/>}
                                </IconButton>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {DB.products[id-1].description}
                            </Typography>
                            <Typography sx={{mt:3,fontSize:'280%'}} varient="h2" color="text.secondary">
                                ₹ {DB.products[id-1].amount}
                            </Typography>
                        </Box>
                        <Box sx={{borderLeft: '3px solid #adb5bd'}}>
                            <Box sx={{display:'flex',justifyContent:'space-evenly',mt:10,p:2,pl:5}}>
                                <Button sx={{borderColor: '#000',color:'#000',px:5,py:1,fontSize:'150%',fontWeight:'bold'}} variant="outlined">Buy Now</Button>
                                <Button sx={{px:5,fontSize:'100%',fontWeight:'bold',color:'#fff',backgroundColor:'#000'}} variant="contained">Add to basket</Button>
                            </Box>
                            <Box sx={{display:'flex',justifyContent: 'right',mr:5}}>
                                <Link href='/products'><IconButton><ChevronRightIcon fontSize="large"/></IconButton></Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Card> 
        </>
    );
}

export default ProductDetailPage;