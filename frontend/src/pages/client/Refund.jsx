import React from 'react';
import Header from '../../components/Home/Header';
import Sidebar from '../../components/Home/Sidebar';

const Refund = () => {
    return (
        <div>
            <Header/>
            <Sidebar/>
            <div className='pt-20 pl-5'>
                <h1 className='text-center font-bold'>Return & Refund Policy</h1>
                <p className='text-base mt-2'>UNFORTUNATELY, AS PER STORE POLICY, CANCELLATION AND REFUNDS ARE NOT POSSIBLE AGAINST ANY ORDERS.</p>
            </div>
        </div>
    );
};

export default Refund;