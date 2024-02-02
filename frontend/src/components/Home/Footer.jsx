import React from 'react';

const Footer = () =>{
    return(
        <div className='flex flex-row items-center justify-between p-2'>
            <div>
                <ul className='flex flex-row text-xs gap-2 items-center p-3'>
                    <li className='cursor-pointer text-gray-600'>INSTAGRAM</li>
                    <li className='cursor-pointer text-gray-600'>YOUTUBE</li>
                    <li className='cursor-pointer text-gray-600'>LINKEDIN</li>
                </ul>
            </div>
            <div>
                <h1 className='text-xs text-gray-600'>2024, THEJUNGLE</h1>
            </div>
        </div>
    );
};

export default Footer;