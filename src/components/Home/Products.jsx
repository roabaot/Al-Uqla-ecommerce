import React, { useRef, useState } from 'react'
import leaf from "../../assets/logo-leaf-new.png";

// oranges
import orange1 from "../../assets/orange1.jpg";
import orange2 from "../../assets/orange2.jpg";
import orange3 from "../../assets/orange3.jpg";

// apples
import apple1 from "../../assets/apple1.jpg";
import apple2 from "../../assets/apple2.jpg";
import apple3 from "../../assets/apple3.jpg";

// bananas
import banana1 from "../../assets/banana1.jpg";
import banana2 from "../../assets/banana2.webp";
import banana3 from "../../assets/banana3.webp";

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isMove, setIsMove] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const tabsBox = useRef(null)
    const categories = [
        {
            id: 1,
            label: 'orange'
        },
        {
            id: 2,
            label: 'apple'
        },
        {
            id: 3,
            label: 'banana'
        },
        {
            id: 4,
            label: 'lemon'
        }
    ]
    const products = [
        {
            label: 'orange 1',
            price: '23$',
            category: 'orange',
            img: orange1
        },
        {
            label: 'orange 2',
            price: '34$',
            category: 'orange',
            img: orange2
        },
        {
            label: 'orange 3',
            price: '11$',
            category: 'orange',
            img: orange3
        },
        {
            label: 'apple 1',
            price: '8$',
            category: 'apple',
            img: apple1
        },
        {
            label: 'apple 2',
            price: '12$',
            category: 'apple',
            img: apple2
        },
        {
            label: 'apple 3',
            price: '16$',
            category: 'apple',
            img: apple3
        },
        {
            label: 'banana 1',
            price: '22$',
            category: 'banana',
            img: banana1
        },
        {
            label: 'banana 2',
            price: '43$',
            category: 'banana',
            img: banana2
        },
        {
            label: 'banana 3',
            price: '24$',
            category: 'banana',
            img: banana3
        },
    ]

    const handleMouseDown = (e) => {
        setIsMouseDown(true);
        setStartX(e.pageX);
        setScrollLeft(tabsBox.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    const handleMouseMove = (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        setIsMove(true)
        const x = e.pageX;
        const walk = (x - startX); // Adjust the scroll speed if needed
        tabsBox.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchStart = (e) => {
        setIsMouseDown(true);
        setStartX(e.touches[0].pageX);
        setScrollLeft(tabsBox.current.scrollLeft);
    };

    const handleTouchEnd = () => {
        setIsMouseDown(false);
    };

    const handleTouchMove = (e) => {
        if (!isMouseDown) return;
        // e.preventDefault();
        setIsMove(true);
        const x = e.touches[0].pageX;
        const walk = x - startX; // Adjust the scroll speed if needed
        tabsBox.current.scrollLeft = scrollLeft - walk;
    };
    const handleTabClick = (category) => {
        if (isMouseDown || isMove) {
            setIsMouseDown(false);
            setIsMove(false)
        } else {
            setSelectedCategory(category)
            setVisible(true)
        }
    };
    const clearStatus = () => {
        setIsMouseDown(false)
        setIsMove(false)
    }

    const filterProduct = () => {
        if (selectedCategory == 'all') {
            return products
        } else {
            return products.filter((prod) => prod.category == selectedCategory)
        }
    }
    return (
        <div className='md:mx-12 mx-6 py-12'>
            <div className='mx-auto text-center'>
                <img src={leaf} alt="leaf" className='mx-auto w-[100px]' />
            </div>
            <ul
                ref={tabsBox}
                className='list-none px-3 gap-3 overflow-x-hidden flex justify-center my-8'
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onTouchMove={handleTouchMove}
            >
                {
                    <>
                        <li
                            className={`text-white bg-[#373c29] whitespace-nowrap text-[18px] rounded-full hover:bg-[#8bc34a] h-[35px] items-center cursor-pointer leading-[35px] px-4 select-none transition ease-in-out duration-500 hover:scale-95 active:scale-90 ${selectedCategory == 'all' ? 'bg-[#8bc34a]' : ''}`}
                            onClick={() => handleTabClick('all')}
                        >
                            All
                        </li>
                    </>
                }
                {
                    categories.map((category) => (
                        <li
                            key={category.id}
                            className={`text-white bg-[#373c29] whitespace-nowrap text-[18px] rounded-full hover:bg-[#8bc34a] h-[35px] items-center cursor-pointer leading-[35px] px-4 select-none transition ease-in-out duration-500 hover:scale-95 active:scale-90 ${selectedCategory == category.label ? 'bg-[#8bc34a]' : ''}`}
                            onClick={() => handleTabClick(category.label)}
                        >
                            {category?.label}
                        </li>
                    ))
                }
            </ul>
            <div className='mx-auto text-center'>
                <img src={leaf} alt="leaf" className='mx-auto w-[100px]' />
            </div>

            <div className='mt-8'>
                {
                    filterProduct().length > 0 ?
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {
                                filterProduct().map(prod => (
                                    <a href="#" className="group bg-white p-3 rounded-xl transition ease-in-out duration-500 hover:scale-110">
                                        <div className=" aspect-square w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                            <img src={prod.img} alt={prod.label} className="h-full w-full object-cover object-center group-hover:opacity-75" />
                                        </div>
                                        <h3 className="mt-4 text-sm text-gray-700">{prod.label}</h3>
                                        <p className="mt-1 text-lg font-medium text-gray-900">{prod.price}</p>
                                    </a>
                                ))
                            }
                        </div> :
                        <div className='text-center text-2xl my-6'>No Products for Now</div>
                }
            </div>
        </div>
    )
}

export default Products