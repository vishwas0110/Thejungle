import React, { useEffect, useState } from 'react';
import Header from '../../components/Home/Header';
import Product from '../../components/collection/Product';
import Footer from '../../components/Home/Footer';
import Sidebar from '../../components/Home/Sidebar';
import api from '../../api/api';

const Collection = () =>{

    const [products,setProducts] = useState();
    const [loading,setLoading] = useState(false);

    const FetchProducts = () =>{
        setLoading(true);
        fetch(`${api}/products`).then(resp=>{
            resp.json().then(dta=>{
                setProducts(dta);
                setLoading(false);
            }).catch(err=>{
                console.log(err);
                setLoading(false);
            })
        }).catch(err=>{
            console.log(err);
        })
    }   

    useEffect(()=>{
        FetchProducts();
    },[]);

    return(
        <div>
            <Header/>
            <Sidebar/>
            <div className='border flex flex-row justify-between p-3 pt-20'>
                <div className='flex flex-row gap-2'>
                <span class="material-symbols-outlined text-xs">tune</span>
                    <h1 className='text-xs'>FILTER</h1>
                </div>
                <div className='flex flex-row gap-2'>
                    <h1 className='text-xs'>DEFAULT SORTING</h1>
                </div>
            </div>
            <div className='md:grid-cols-2 justify-center grid grid-cols-2'>
                {
                    (!loading && products) && products.map(prdct=>{
                        return(<Product title={prdct.name} price={prdct.price} images={prdct.images} desc={prdct.description} id={prdct._id}/>);
                    })
                }
            </div>
            <Footer/>
        </div>
    );
};


export default Collection;
