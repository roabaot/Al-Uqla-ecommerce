import React from 'react'
import Cart from '../icons/Cart'

const Header = () => {
    return (
        <div className='h-[100px] w-full bg-white'>
            <div className='flex items-center justify-between h-full py-4 mx-6'>
                <div className='flex items-center gap-3'>
                    <a href='#' className='h-[50px] leading-[50px] text-lg mx-2 text-black cursor-pointer transition ease-in-out duration-500 hover:text-[#8bc34a] hover:scale-105'>MyLogo</a>
                    <a href='#' className='h-[50px] leading-[50px] text-lg mx-2 text-black cursor-pointer transition ease-in-out duration-500 hover:text-[#8bc34a] hover:scale-105'>Everything</a>
                    <a href='#' className='h-[50px] leading-[50px] text-lg mx-2 text-black cursor-pointer transition ease-in-out duration-500 hover:text-[#8bc34a] hover:scale-105'>Groceries</a>
                    <a href='#' className='h-[50px] leading-[50px] text-lg mx-2 text-black cursor-pointer transition ease-in-out duration-500 hover:text-[#8bc34a] hover:scale-105'>Juice</a>
                </div>
                <div>
                    <div className='flex items-center gap-3'>
                        <a href='#' className='h-[50px] leading-[50px] text-lg mx-2 text-black cursor-pointer transition ease-in-out duration-500 hover:text-[#8bc34a] hover:scale-105'>About</a>
                        <a href='#' className='h-[50px] leading-[50px] text-lg mx-2 text-black cursor-pointer transition ease-in-out duration-500 hover:text-[#8bc34a] hover:scale-105'>Contact</a>
                        <a href='#' className='h-[50px] leading-[50px] text-lg mx-2 text-black cursor-pointer transition ease-in-out duration-500 hover:scale-110 flex items-center'>
                            <Cart width="28px" height="28px" color="#8bc34a" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header