"use client";
import React, { Dispatch,SetStateAction,useEffect, useState } from "react"
import axios from 'axios';
import { toast} from 'react-hot-toast';
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUp(){
    const router=useRouter();
    const [user,setUser]=useState({
        username:"",
        email:"",
        password:""
    })
    const [disableButton,setButtonDisable]=useState(false);
    const [loading,setLoading]=useState(false); 

    // sending the data on user/signup through axios
    const onSignUp=async()=>{
        try{
            setLoading(true);
            await axios.post('/api/users/signup',user);
            console.log("success");
            router.push('/login');
        }catch(err:any){
            console.log(err.message);
            toast.error("Error: "+err.message);
        }
    }
    useEffect(()=>{
        if(user.email.length>0 && user.username.length>0 && user.password.length>0){
            setButtonDisable(false);
        }else{
            setButtonDisable(true);
        }
    },[user]);
    const styleInp="rounded-md px-2 border-2 text-wb_bgcolor_b-400 font-bold border-wb_shadow-400 p-1 my-3";
    return(
        <div className="w-full h-screen bg-wb_bgcolor-400 flex">
        <div className="h-full w-1/2 px-10 py-20 rounded-tr-3xl">
            
            <div className=" text-6xl mt-5 mb-10 font-bold">Join Us and Upskill your Knowledge for Better Opportunities.</div>
            <div className="text-sm">Unlock your potential with our curated resources for mastering full stack web development, Android development, and data science. From building dynamic websites and crafting powerful mobile apps to harnessing the power of data, our comprehensive guides, tutorials, and best practices keep you ahead in these fast-paced fields. Stay updated and transform your ideas into reality with our regularly updated resource library.</div>
        </div>
        <div className="h-full w-3/5 px-16 py-20 flex flex-col">
            <div className="flex w-full justify-between mt-3">
                <div>
                    <h2 className=" text-3xl font-bold text-wb_btn-400" >Sign up</h2>
                </div>
                <div>
                    <h3 className="text-wb_shadow-400 font-medium">Already a member ?</h3>
                    <h2 className=" text-wb_btn-400 font-bold"><Link href='/login'>Log in here</Link></h2>
                </div>
            </div>
            <div className=" mt-10 h-1/2 flex flex-col p-3 text-wb_bgcolor_w-400 text-base w-11/12">

                <label htmlFor="username">Your Full Name</label>
                <input className={styleInp}  type="text" id="username" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})} />

                <label htmlFor="email">Your Email Address</label>
                <input className={styleInp}  type="text" id="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} />

                <label htmlFor="pass">Your Password</label>
                <input className={styleInp}  type="password" id="pass" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} />

                <button className=" bg-wb_shadow-400 mt-10 mb-5 text-white p-2 rounded-lg " onClick={onSignUp}>{disableButton?"No Sign up":"Sign up"}</button>
                {loading && <div className="flex justify-center items-center h-screen">
                    <span>Redirecting to Log in page...</span>
                </div>}
            </div>
        </div>
      </div>
    )
}
