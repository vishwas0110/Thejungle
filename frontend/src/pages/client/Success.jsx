import React from 'react'
import { useParams } from 'react-router-dom';
import Header from '../../components/Home/Header';
import Sidebar from '../../components/Home/Sidebar';
import { useNavigate } from 'react-router-dom';

const Success = () => {

    const { tid,oid } = useParams();

    const navigate = useNavigate();

  return (
    <div>
        <Header/>
        <Sidebar/>
        <div className='pt-20'>
            <h1 className='text-center uppercase'>Status </h1>
            <div className='rounded-full p-10 bg-orange-500 w-32 h-32 mx-auto mt-10 flex flex-row justify-center items-center transition-all animate-pulse'>
                <span className='material-symbols-outlined text-white text-5xl'>done_all</span>
            </div>
            <h1 className='text-center mt-7 uppercase text-gray-500 font-bold'>Order Placed !</h1>
            <h1 className='text-gray-500 text-center mt-5'>ORDER ID : {oid}</h1>
            <h1 className='text-gray-500 text-center'>TRANSACTION ID : {tid}</h1>
            <div className='flex flex-row justify-center mt-6'>
                <button className='text-xs p-3 bg-orange-500 text-white rounded mx-auto' onClick={()=>navigate("/collection")}>Continue Shopping</button>
            </div>
        </div>
    </div>
  )
}

export default Success