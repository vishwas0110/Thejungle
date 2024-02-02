import React from 'react';
import Header from '../../components/Home/Header';
import Product from '../../components/collection/Product';
import Footer from '../../components/Home/Footer';

const Collection = () =>{
    return(
        <div>
            <Header/>
            <div className='border flex flex-row justify-between p-3'>
                <div className='flex flex-row gap-2'>
                <span class="material-symbols-outlined text-xs">tune</span>
                    <h1 className='text-xs'>FILTER</h1>
                </div>
                <div className='flex flex-row gap-2'>
                    <h1 className='text-xs'>DEFAULT SORTING</h1>
                </div>
            </div>
            <div className='md:grid-cols-4 justify-center grid grid-cols-2'>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
            <Footer/>
        </div>
    );
};


export default Collection;
