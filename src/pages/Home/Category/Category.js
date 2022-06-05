import React from 'react';

const category = ({ logo }) => {
    const { name, img } = logo
    return (
        <div className='brandName'>
            <img className='rounded-lg' src={img} alt="" />
            <h1 className=' font-bold my-2 uppercase'>{name}</h1>
        </div>
    );
};

export default category;