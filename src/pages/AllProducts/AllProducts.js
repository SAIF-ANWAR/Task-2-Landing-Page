import React from 'react';
import useProduct from '../../hooks/useProducts';
import Mobile from '../Home/Mobile';

const AllProducts = () => {
    const [mobiles] = useProduct()
    return (
        <div className='px-12'>
            <h1 className='title lg:text-4xl font-bold text-center py-8'>Cell Phones</h1>
            <div className='mobiles'>
                {
                    mobiles.map(mobile => <Mobile key={mobile.id} mobile={mobile}></Mobile>)
                }
            </div>

        </div>
    );
};

export default AllProducts;