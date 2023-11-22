import React from 'react'
import products from "../../assets/organic-products-hero.png";
import leaf from "../../assets/logo-leaf-new.png";

const Hero = () => {
    return (
        <div className='md:mx-12 mx-6 py-12'>
            <div className='flex items-center gap-12 md:flex-row flex-col'>
                <div className='md:w-1/2 w-full'>
                    <img src={products} alt="products" width="100%" height="100%" />
                </div>
                <div className='md:w-1/2 w-full'>
                    <img src={leaf} alt="leaf" />
                    <h5 className='text-[1.2625rem] font-serif font-semibold my-3'>Best Quality Products</h5>
                    <h1 className='text-[3.25rem] font-semibold my-3'>Join The Organic Movement!</h1>
                    <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero