import React from 'react';
import useProduct from '../../../hooks/useProducts';
import Item from './Item';
import './SaleItem.css'

const SaleItems = () => {
    const [mobiles] = useProduct()
    return (
        <div className='px-10'>
            <h1 className='title lg:text-4xl sm:text-3xl font-bold text-center lg:py-8 mt-8 lg:my-10'>Summer Sale !!!</h1>
            <div className='saleItems'>
                {
                    mobiles.slice(4, 8).map(item => <Item key={item.id} item={item}></Item>)
                }
            </div>
        </div>

    );
};

export default SaleItems;