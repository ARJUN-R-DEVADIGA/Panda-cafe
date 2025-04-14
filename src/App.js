import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CafeNavbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import SignIn from './pages/SignIn';
import Navbar from './pages/Navbar.css';

function App() {
  return (
    <BrowserRouter>
      <CafeNavbar />
      <Routes>
         
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
     
        <Route path="/orders" element={<Orders />} />
          <Route path="/signin" element={<SignIn />} />
          
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
