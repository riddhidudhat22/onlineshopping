import React from 'react';
import Layout from '../admin/component/Layout/Layout'
import { Route, Routes } from 'react-router-dom';
import Category from '../admin/container/Category/Category';
import Subcategory from '../admin/container/Subcategory/Subcategory';

function Adminroute(props) {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route exact path='/category' element={<Category/>}/>
                </Routes>
            </Layout>
        </div>
    );
}

export default Adminroute;