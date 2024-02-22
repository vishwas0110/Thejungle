import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../api/api';
import LinearProgress from '@mui/material/LinearProgress';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import Avatar from '@mui/material/Avatar';

export const ViewOrder = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState();

    const fetchOrder = () => {
        setLoading(true);
        fetch(`${api}/orders/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }).then(resp => resp.json().then(dta => {
            setLoading(false);
            setOrder(dta.order);
        }).catch(err => { console.log(err); setLoading(false) })).catch(err => { console.log(err); setLoading(false) });
    }

    useEffect(() => {
        fetchOrder();
    }, []);

    return (
        <div className='w-full'>
            {loading && <LinearProgress color='warning' />}
            <h1 className='text-center mt-2 w-full uppercase font-bold'>Order Details</h1>
            {
                !loading && (
                    <div>
                        <h1 className='text-left m-2'>User Details</h1>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell><h1 className='text-center'>Name</h1></TableCell>
                                        <TableCell><h1 className='text-center'>Email</h1></TableCell>
                                        <TableCell><h1 className='text-center'>Mobile</h1></TableCell>
                                        <TableCell><h1 className='text-center'>Address</h1></TableCell>
                                        <TableCell><h1 className='text-center'>City</h1></TableCell>
                                        <TableCell><h1 className='text-center'>State</h1></TableCell>
                                        <TableCell><h1 className='text-center'>Pincode</h1></TableCell>
                                        <TableCell><h1 className='text-center'>Flatno</h1></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell><h1 className='text-center'>{order.Name}</h1></TableCell>
                                        <TableCell><h1 className='text-center'>{order.Email}</h1></TableCell>
                                        <TableCell><h1 className='text-center'>{order.Mobile}</h1></TableCell>
                                        <TableCell><h1 className='text-center'>{order.Address}</h1></TableCell>
                                        <TableCell><h1 className='text-center'>{order.City}</h1></TableCell>
                                        <TableCell><h1 className='text-center'>{order.State}</h1></TableCell>
                                        <TableCell><h1 className='text-center'>{order.Pincode}</h1></TableCell>
                                        <TableCell><h1 className='text-center'>{order.Flatno}</h1></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <h1 className='m-2'>Order Details</h1>
                        {
                            order.Orders.map(ord => {
                                return (
                                    <TableContainer>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell><h1 className='text-center'>Product id</h1></TableCell>
                                                    <TableCell><h1 className='text-center'>Product Img</h1></TableCell>
                                                    <TableCell><h1 className='text-center'>Product Name</h1></TableCell>
                                                    <TableCell><h1 className='text-center'>Product Size</h1></TableCell>
                                                    <TableCell><h1 className='text-center'>Product Stock</h1></TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell><h1 className='text-center'>{ord.id}</h1></TableCell>
                                                    <TableCell><div className='flex flex-row justify-center'><Avatar src={ord.image}/></div></TableCell>
                                                    <TableCell><h1 className='text-center'>{ord.name}</h1></TableCell>
                                                    <TableCell><h1 className='text-center'>{ord.size}</h1></TableCell>
                                                    <TableCell><h1 className='text-center'>{ord.stock}</h1></TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                );
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}
