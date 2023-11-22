import React, { useState } from 'react';
import Header from "./components/Core/Header";
import Hero from './components/Home/Hero';
import Products from './components/Home/Products';

function ecommerce() {

  return (
    <div className='bg-slate-100 min-h-screen'>
      <Header />
      <Hero />
      <Products />
    </div>
  );
}

export default ecommerce;