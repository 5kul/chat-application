import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios";
import toast from "react-hot-toast";


const Signup = ()=>{
    const [user, setUser] = useState({
        fullName:"",
        username:"",
        password:"",
        confirmPassword:"",
        gender:"",
    });
    const navigate = useNavigate();
    const handleCheckbox = (gender) =>{
        setUser({...user,gender });
    }
    const onSubmitHandler = async(e)=>{
        e.preventDefault();
        try {
            
            const res = await axios.post('http://localhost:5000/api/v1/user/register', user,{
                headers: {
                    'Content-Type':'application/json'
                },
                withCredentials:true
            });
            if(res.data.success){
                navigate("/login");
                toast.success(res.data.message);

            }
           } catch (error) {
            console.log(error);
            
        }
      
        setUser({
            fullName:"",
            username:"",
            password:"",
            confirmPassword:"",
            gender:"",

        })
    }
    return (
        <div className='min-w-96 mx-auto' >
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
                <h1 className='text-3xl font-bold text-center '>Signup</h1><br></br>
                <form  onSubmit={onSubmitHandler}  action="">
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text' >Full Name</span><br></br>
                        </label>
                        <input value={user.fullName} onChange={(e)=>
                            setUser({...user,fullName:e.target.value})
                        }
                         className='w-full input-bordered h-10' type="text" placeholder='Full Name'></input>
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text' >Username</span><br></br>
                        </label>
                        <input value={user.username} onChange={(e)=>
                            setUser({...user,username:e.target.value})}
                        className='w-full input-bordered h-10' type="text" placeholder='Username'></input>
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text' >Password</span><br></br>
                        </label>
                        <input value={user.password} onChange={(e)=>
                            setUser({...user,password:e.target.value})}
                         className='w-full input-bordered h-10' type="password" placeholder='Password'></input>
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text' >Confirm Password</span><br></br>
                        </label>
                        <input value={user.confirmPassword} onChange={(e)=>
                            setUser({...user,password:e.target.value})}
                         className='w-full input-bordered h-10' type="password" placeholder='Confirm Password'></input>
                    </div>
                    <div>
                        <div className='flex items-center my-4'>
                            <p>Male</p>
                            <input 
                            onChange={()=>handleCheckbox("male")}
                            checked={user.gender==="male"}
                             type="checkbox" defaultChecked 
                            className='checkbox mx-2'></input>
                        </div>      
                        <div className='flex items-center'>
                            <p>Female</p>
                            <input 
                            onChange={()=>handleCheckbox("female")}
                            checked={user.gender==="female"}
                            type="checkbox" defaultChecked className='checkbox mx-2'></input>
                        </div>        
                        
                    </div>
                    <p className='text-center my-2'>Already have an account?  <Link  to="/login">  
                    login                  
                    </Link>
                    </p>                
                   

                  
                    <div>
                        <button type='submit' className='btn btn-block btn-sm mt-2 border-state-700 '>Signup</button>
                    </div>                
                </form>
            </div>
        </div>
    )
}

export default Signup