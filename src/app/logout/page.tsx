'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
export default function LogoutPage(){
    const router=useRouter();
    const logout=async()=>{
        try {
            await axios.post('/api/users/logout');
            router.push('/');
            
        } catch (error:any) {
            console.log(error)
        }
    }
    return(
        <div className="w-full h-screen bg-wb_bgcolor-400 flex flex-col justify-center items-center">
            <div className=' text-3xl font-bold mb-5'>You'll have to Log Out first !!</div>
            <motion.button 
            initial={{
                scale:1,
            }}
            whileHover={{
                scale:1.2,
            }}
            className=' text-black font-bold bg-wb_bgcolor_w-400 px-8 py-3 rounded-full' onClick={logout}>logout</motion.button>
        </div>
    )
}