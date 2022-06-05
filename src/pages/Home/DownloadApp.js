import React from 'react';
import apple from '../../images/icons/apple.png'
import google from '../../images/icons/google.png'

const DownloadApp = () => {
    return (
        <div className='px-12 border shadow-sm p-8 mt-10'>
            <div>
                <h1 className='text-4xl font-bold text-center mt-2 mb-1'>Download Our App</h1>
            </div>
            <div>
                <p className='text-center text-xl'>Stay up to date and move work forward with us on iOS and Android. <br /> Download the app today.</p>
            </div>
            <div className='mt-5 sm:justify-center md:flex justify-center justify-items-center '>
                <div className='mt-3 mr-5'><button className='flex border rounded-lg py-2 px-5 justify-center items-center sm:mx-auto'> <img className='w-10 mr-2' src={apple} alt="" /> <span>Download on the <br /> App store</span> </button></div>
                <div className='mt-3'><button className='flex border rounded-lg py-2 px-5 justify-center items-center sm:mx-auto'> <img className='w-10 mr-2' src={google} alt="" /> <span>Download on the <br /> Play store</span> </button></div>
            </div>
        </div>
    );
};

export default DownloadApp;