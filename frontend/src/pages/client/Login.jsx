import React, { useState } from 'react';
import Header from '../../components/Home/Header';
import Sidebar from '../../components/Home/Sidebar';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import { useDispatch } from 'react-redux'
import { Actions } from '../../redux/store';

const Login = () =>{

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [data,setData] = useState({
        Email:"",
        Password:""
    });

    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value});
    }

    const submitHandler = async (e) =>{
        e.preventDefault()
        fetch(`${api}/user/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(resp=>{ 
            resp.json().then(dta=>{
                if(dta.success){
                    dispatch(Actions.setAuth(true));
                    navigate("/collection");
                }else{
                    alert(dta.message);
                }
            }).catch(err=>{
                console.log(err);
            })
        }).catch(err=>{
            console.log(err);
        })
    }

    return(
        <div>
            <Header/>
            <Sidebar/>
            <div className='pt-20'>
                <h1 className='text-center text-xl mt-5' style={{fontFamily:"impact"}}>Login</h1>
                <form action="" onSubmit={submitHandler}>
                    <div className='flex flex-col items-center gap-2 pt-10 px-3'>
                    <input type="email" placeholder='Enter Email' className='p-2 border border-gray-300 md:w-1/4 w-full logInp' value={data.Email} onChange={changeHandler} name="Email" required/>
                    <input type="password" placeholder='Enter Password' className='p-2 border border-gray-300 md:w-1/4 w-full logInp' value={data.Password} onChange={changeHandler} name="Password" required/>
                    <input type="submit" className='p-2 border border-gray-300 md:w-1/4 hover:bg-white hover:text-black rounded bg-orange-600 text-white cursor-pointer transition w-full' value="Login"/>
                </div>
                </form>
                <h1 className='text-center mt-3'>or</h1>
                <h1 className='text-center mt-5'>Don't Have an Account ? <span className='text-orange-500 cursor-pointer' onClick={()=>navigate("/signup")}>Signup</span></h1>
            </div> 
        </div>
    );
};
export default Login;