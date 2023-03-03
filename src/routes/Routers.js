import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import AllFoods from '../pages/AllFoods';
import FoodDetails from '../pages/FoodDetails';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Contact from '../pages/Contact';

export default function Routers() {
    return (
        <Routes>
            <Route path='/' element={<Navigate to="/home" />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/foods' element={<AllFoods />}></Route>
            <Route path='/foods/:id' element={<FoodDetails />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
        </Routes>
    )
}
