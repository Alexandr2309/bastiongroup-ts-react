import React from 'react';
import './styles/Aps.scss';
import Layout from './components/Layout/Layout';
import {Navigate, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Types from './pages/Types';
import Products from "./pages/Produсts";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <div className=''>
      <Layout>
          <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/types" element={<Types/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/shopping" element={<ShoppingCart/>}/>
              <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
      </Layout>
    </div>
  );
}

export default App;
