import React from 'react';
import { BrowserRouter as BRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Login from './components/Login/login';
import Signup from './components/Signup/Signup'
import Homepage from './components/HomePage/homepage';
import ProductDetailPage from './components/ProductDetailPage/ProductDetailPage';
import Cart from './components/Cart/Cart'

const Router = () => {

    return(
        <BRouter>
            <Routes>
                <Route path='/' element={<><Header /><Login /></>} />
                <Route path='/signup' element={<><Header /><Signup /></>} />
                <Route path='/products' element={<><Header /><Homepage /></>} />
                <Route path='/products/:id' element={<><Header/><ProductDetailPage /></>}/>
                <Route path='/cart' element={<><Header /><Cart /></>}/>
            </Routes>
        </BRouter>
    );
}

export default Router;