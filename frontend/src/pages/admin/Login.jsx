import React, { useState } from "react";
import api from "../../api/api";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Actions } from "../../redux/store";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [data,setData] = useState({
        Email:"",
        Password:"",
    });

    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value});
    }

    const submitHandler = e =>{
        e.preventDefault();
        fetch(`${api}/admin/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(resp=>{resp.json().then(dta=>{
            console.log(dta);
            if(dta.success){
                dispatch(Actions.setAdminAuth(true));
                navigate("/admin");
                sessionStorage.setItem("JGLE_TK",JSON.stringify(dta.token));
            }else{
                alert(dta.message)
            }
        }).catch(e=>{
            console.log(e)
        })}).catch(e=>{
            console.log(e)
        });
    }

    return (
        <div>
            <div className="h-16 border flex flex-row justify-between items-center">
                <div className="w-full flex flex-row justify-center">
                    <h1 style={{ fontFamily: "impact", fontSize: 50, color: "#FF6200" }} className="ml-20">
                        Jungle
                    </h1>
                </div>
                <h1 className="text-xs">Welcome Admin</h1>
            </div>
            <div>
                <h1
                    className="text-center text-xl mt-5"
                    style={{ fontFamily: "impact" }}
                >
                    Login
                </h1>
                <form action="" onSubmit={submitHandler}>
                    <div className="flex flex-col items-center gap-2 pt-10 px-3">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="p-2 border border-gray-300 md:w-1/4 w-full logInp"
                            value={data.Email}
                            onChange={changeHandler}
                            name="Email"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="p-2 border border-gray-300 md:w-1/4 w-full logInp"
                            value={data.Password}
                            onChange={changeHandler}
                            name="Password"
                            required
                        />
                        <input
                            type="submit"
                            className="p-2 border border-gray-300 md:w-1/4 hover:bg-white hover:text-black rounded bg-orange-600 text-white cursor-pointer transition w-full"
                            value="Login"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
