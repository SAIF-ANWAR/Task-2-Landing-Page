import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import './Item.css'

const Item = ({ item }) => {
    const { name, img, price, processor, display, camera, memory } = item
    return (
        <div className='mobile  shadow-lg'>
            <div className='mobile-Img'>
                <img className='mx-auto mb-5' src={img} alt="" />
                <span className='saleTitle bg-red-500 p-1 font-bold rounded-sam text-white'> <span>10%</span> <br /> OFF</span>
            </div>
            <div className='details'>
                <h3 className='name font-medium py-3'>{name}</h3>
                <li>{processor}</li>
                <li>{display}</li>
                <li>{camera}</li>
                <li>{memory}</li>
                <p className='my-2 text-2xl font-bold'>$ {price}</p>
            </div>
            <div className='my-3 w-48 mx-auto'>
                <button className='btn btn-sm w-44 flex justify-center items-center'> <span className='mr-4'>Buy Now</span> <ShoppingCartIcon className='w-4'></ShoppingCartIcon></button>
            </div>
        </div>
    );
};

export default Item;