import React from 'react';
import Carousel from './Carousel';
import FeaturedCategory from './Category/FeaturedCategory';
import DownloadApp from './DownloadApp';
import FeaturedProducts from './FeaturedProducts';
import SaleItems from './SaleItems/SaleItems';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <FeaturedProducts></FeaturedProducts>
            <SaleItems></SaleItems>
            <FeaturedCategory></FeaturedCategory>
            <DownloadApp></DownloadApp>
        </div>
    );
};

export default Home;