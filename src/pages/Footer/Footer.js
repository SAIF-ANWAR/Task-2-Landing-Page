import React from 'react';
import './Footer.css'

const Footer = () => {
    return (

        <footer>
            <div className='footer-section shadow-sm'>
                <div className='content'>
                    <div>
                        <p className='text-2xl font-bold mb-3'>Mobile <span className=' text-info'>Shop</span></p>
                        <small>  Location: Dhaka, Bangladesh <br />
                            Email: saifanwar5123@gmail.com <br />
                            Phone: 01777777777
                        </small>
                    </div>
                </div>
                <div className='content'>
                    <div>
                        <p className='font-bold'>About Mobile-Shop</p>
                        <small>
                            <a className='text-decoration-none text-dark mx-5' href="/">Who we are</a> <br />
                            <a className='text-decoration-none text-dark mx-5' href="/">Careers</a>  <br />
                            <a className='text-decoration-none text-dark mx-5' href="/">Company History</a> <br />
                            <a className='text-decoration-none text-dark mx-5' href="/">Partners</a>
                        </small>
                    </div>
                </div>
                <div className='content'>
                    <div>
                        <p className='font-bold'>Customer Service</p>
                        <small className='text-center'>
                            <a className='text-decoration-none text-dark mx-5' href="/">Payment</a> <br />
                            <a className='text-decoration-none text-dark  mx-5' href="/">feedBack</a>  <br />
                            <a className='text-decoration-none text-dark  mx-5' href="/">FAQ</a> <br />
                            <a className='text-decoration-none text-dark  mx-5' href="/">Contact Us</a>
                        </small>
                    </div>
                </div>
            </div>
            <div className='bg-black'>
                <p className='text-center text-white'> <small>Copyright © 2022 - All right reserved</small></p>
            </div>
        </footer>
    );
};

export default Footer;