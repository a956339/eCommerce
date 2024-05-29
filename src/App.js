import React, { memo } from 'react';
import "../src/App.css";
import NavBar from './Component/NavBar/NavBar';
import Home from './Component/HomePage/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from './Component/CartPage/CartPage';
import { Provider } from 'react-redux';
import store from './Redux_Toolkit/Store';
console.log("app.js")
const App = () => {
  return (
    <>
     <Provider store={store}>
     <BrowserRouter> 
        <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/CartPage' element={<CartPage/>} />
        </Routes>
      </BrowserRouter>
     </Provider>

     
    </>
    
  );
}

export default memo(App);
