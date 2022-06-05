import React from 'react';
import Mobile from './Mobile';
import './Mobile.css';
import { ArrowRightIcon } from '@heroicons/react/solid'
import useProduct from '../../hooks/useProducts';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    const [mobiles] = useProduct()
    return (
        <div className='px-12'>
            <h1 className='title lg:text-4xl font-bold text-center py-8'>Featured Products</h1>

            <div className='mobiles'>
                {
                    mobiles.slice(0, 4).map(mobile => <Mobile key={mobile.id} mobile={mobile}></Mobile>)
                }
            </div>
            <Link to="/allProducts" className='btn btn-outline w-36 flex mx-auto mt-5 justify-center'> <span className='mr-4'>See All</span> <ArrowRightIcon className='w-4'></ArrowRightIcon> </Link>
        </div>
    );
};

export default FeaturedProducts;