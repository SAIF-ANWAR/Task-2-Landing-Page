import React from 'react';
import Category from './Category'
import './Category.css'
import apple from '../../../images/logo/apple.png'
import huawei from '../../../images/logo/huawei.png'
import samsung from '../../../images/logo/samsung.png'
import nokia from '../../../images/logo/nokia.png'
import xiaomi from '../../../images/logo/xiaomi.png'
import sony from '../../../images/logo/sony.png'
import realme from '../../../images/logo/realme.png'
import oppo from '../../../images/logo/oppo.png'

const FeaturedCategory = () => {
    const logos = [
        { id: 1, name: "apple", img: apple },
        { id: 2, name: "huawei", img: huawei },
        { id: 3, name: "samsung", img: samsung },
        { id: 4, name: "nokia", img: nokia },
        { id: 5, name: "xiaomi", img: xiaomi },
        { id: 6, name: "sony", img: sony },
        { id: 7, name: "realme", img: realme },
        { id: 8, name: "oppo", img: oppo }
    ]
    return (
        <div>
            <h1 className='title lg:text-4xl font-bold text-center py-8 my-10'>Shop by Brands</h1>
            <div className='category px-10'>
                {
                    logos.map(logo => <Category key={logo.id} logo={logo}></Category>)
                }
            </div>
        </div>
    );
};

export default FeaturedCategory;