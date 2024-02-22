import React, { useEffect, useState } from 'react'
import api from '../../api/api';
import LinearProgress from '@mui/material/LinearProgress';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import { useNavigate } from 'react-router-dom'

export const ManageOrders = () => {

    const [orders,setOrders] = useState([]);
    const [Loading,setLoading] = useState(false);
    const navigate = useNavigate();

    const FetchOrders = () =>{
        setLoading(true);
        fetch(`${api}/orders/all`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },
        }).then(resp=>{
            resp.json().then(dta=>{
                setLoading(false);
                setOrders(dta.orders);
            }).catch(err=>console.log(err));
        }).catch(err=>{
            setLoading(false);
            console.log(err);
        })
    }

    useEffect(()=>{
        FetchOrders();
    },[])

    return (
        <div className='w-full'>
            {Loading && <LinearProgress color="warning"/>}
            {
                !Loading && (
                    <div>
                        <h1 className='text-center mt-5'>Orders</h1>
                        {
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell><h1 className='text-center'>Order ID</h1></TableCell>
                                            <TableCell><h1 className='text-center'>Name</h1></TableCell>
                                            <TableCell><h1 className='text-center'>Email</h1></TableCell>
                                            <TableCell><h1 className='text-center'>Mobile</h1></TableCell>
                                            <TableCell><h1 className='text-center'>Actions</h1></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            orders.map(order=>{
                                                if(order.status === true){
                                                    return(<TableRow>
                                                        <TableCell><h1 className='text-center'>{order._id}</h1></TableCell>
                                                        <TableCell><h1 className='text-center'>{order.Name}</h1></TableCell>
                                                        <TableCell><h1 className='text-center'>{order.Email}</h1></TableCell>
                                                        <TableCell><h1 className='text-center'>{order.Mobile}</h1></TableCell>
                                                        <TableCell>
                                                            <div className='flex flex-row gap-2 justify-center'>
                                                                <button className='p-2 border hover:bg-orange-500 hover:text-white' onClick={()=>navigate(`/admin/vieworder/${order._id}`)}>View</button>
                                                                <button className='p-2 border bg-red-500 text-white'>Delete</button>
                                                            </div>
                                                        </TableCell>
                                                    </TableRow>)
                                                }
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        }
                    </div>
                )
            }
        </div>
    )
}
