import React from 'react';
import Header from '../../components/Home/Header';
import Product from '../../components/collection/Product';
import Footer from '../../components/Home/Footer';
import hoodie from '../../Assets/junglemain.jpg';
import Sidebar from '../../components/Home/Sidebar';

const Collection = () =>{
    return(
        <div>
            <Header/>
            <Sidebar/>
            <div className='border flex flex-row justify-between p-3'>
                <div className='flex flex-row gap-2'>
                <span class="material-symbols-outlined text-xs">tune</span>
                    <h1 className='text-xs'>FILTER</h1>
                </div>
                <div className='flex flex-row gap-2'>
                    <h1 className='text-xs'>DEFAULT SORTING</h1>
                </div>
            </div>
            <div className='md:grid-cols-2 justify-center grid grid-cols-2'>
                <Product title="Junglie Basic" price="999" image={hoodie} desc="Junglie basics for everyday use."/>
                <Product title="Junglie Basic" price="999" image={hoodie} desc="Junglie basics for everyday use."/>
                <Product title="Junglie Special" price="1499" image={hoodie} desc="Junglie Special for everyday use."/>
                <Product title="Junglie Special" price="1499" image={hoodie} desc="Junglie Special for everyday use."/>
            </div>
            <Footer/>
        </div>
    );
};


export default Collection;
