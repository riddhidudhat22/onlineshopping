import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../user/component/Header/Header';
import Footer from '../user/component/Footer/Footer';
import Home from '../user/container/Home/Home';
import Productlist from '../user/container/Productlist/Productlist';
import Productdetail from '../user/container/Productdetail/Productdetail';
import Cart from '../user/container/Page/Cart';
import Wishlist from '../user/container/Page/Wishlist';
import Login from '../user/container/Page/Login';
import Contact from '../user/container/Contact/Contact';

function Userroute(props) {
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/productlist" element={<Productlist />} />
                <Route exact path='/productdetail' element={<Productdetail />} />
                <Route exact path='/page' />
                <Route exact path='/cart' element={<Cart />} />
                <Route exact path='/wishlist' element={<Wishlist />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default Userroute;