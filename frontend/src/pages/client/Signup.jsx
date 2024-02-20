import React, { useState } from 'react';
import Header from '../../components/Home/Header';
import Sidebar from '../../components/Home/Sidebar';
import api from '../../api/api';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom'

const Signup = () =>{

    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    const [data,setData] = useState({
        Name:"",
        Email:"",
        Password:"",
        Mobile:""
    })

    const submitHandler = e =>{
        e.preventDefault();
        setLoading(true);
        fetch(`${api}/user/add`,{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(resp=>{
            resp.json().then(dta=>{
                setLoading(false);
                if(dta.success){
                    alert("Registered");
                }else{
                    alert("user already exits !")
                }
            }).catch(err=>{
                setLoading(false);
                console.log(err);
            })
        }).catch(err=>{
            setLoading(false);
            console.log(err);
        })
    }

    const changeHandler = (e) =>{
        setData({...data,[e.target.name]:e.target.value});
    }

    return(
        <div>
            <Header/>
            <Sidebar/>
            <div className='pt-20'>
                <h1 className='text-center mt-3 text-xl' style={{fontFamily:"impact"}}>Signup</h1>
                <form action="" onSubmit={submitHandler}>
                    <div className='flex flex-col items-center gap-2 pt-10 px-3'>
                    <input type="text" placeholder='Enter Name' className='p-2 border border-gray-300 md:w-1/4 w-full logInp' value={data.Name} onChange={changeHandler} name="Name" required/>
                    <input type="email" placeholder='Enter Email' className='p-2 border border-gray-300 md:w-1/4 w-full logInp' value={data.Email} onChange={changeHandler} name="Email" required/>
                    <input type="password" placeholder='Enter Password' className='p-2 border border-gray-300 md:w-1/4 w-full logInp' value={data.Password} onChange={changeHandler} name="Password" required/>
                    <input type="number" placeholder='Enter Mobile Number' className='p-2 border border-gray-300 md:w-1/4 w-full logInp' value={data.Mobile} onChange={changeHandler} name="Mobile" required/>
                    {!loading && <input type="submit" className='p-2 border border-gray-300 md:w-1/4 hover:bg-white hover:text-black rounded bg-orange-600 text-white cursor-pointer transition w-full' value="Signup"/>}
                    {loading && <CircularProgress size={20} color="error" className='mt-3'/>}
                </div>
                </form>
                <h1 className='text-center mt-3'>or</h1>
                <h1 className='text-center mt-5'>Have an Account ? <span className='text-orange-500 cursor-pointer' onClick={()=>navigate("/login")}>Login</span></h1>
            </div>
        </div>
    );
};

export default Signup;