import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import ManageProducts from './components/Dashboard/ManageProducts/ManageProducts';
import ViewProducts from './components/Dashboard/ViewProducts/ViewProducts';
import Home from './components/Home/Home';
import Product from './components/Shop/Product';
import Shop from './components/Shop/Shop';

const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="dashboard" element={<Dashboard/>}>
       <Route path="view-products" element={<ViewProducts/>}  /> 
       <Route path="manage-products" element={<ManageProducts/>} />
      </Route>
      <Route path="shop" element={<Shop/>}/>
      <Route path="product:id" element={<Product/>}/>
      </Routes>
    </>
  );
};

export default App;