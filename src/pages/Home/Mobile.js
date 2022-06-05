import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/solid'

const Mobile = ({ mobile }) => {
    const { name, img, price, processor, display, camera, memory } = mobile
    return (
        <div className='item mobile  shadow-lg'>
            <div>
                <img className='mx-auto mb-5' src={img} alt="" />
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

export default Mobile;