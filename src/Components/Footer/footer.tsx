import Link from 'next/link'
import { BiEnvelope,BiLogoLinkedin } from "react-icons/bi";

export default function FooterPage(){
    return(
        <div className='w-full flex flex-col items-center mb-5'>
            <hr className='w-11/12 '/>
            <div className='my-5 text-8xl font-archivo'>GET <span className=" font-playwrite">IN</span> TOUCH</div>
            <hr className='w-11/12' />
            <div className='flex justify-between w-11/12 mt-3'>
                <Link href="">LinkedIn</Link>
                <div className='flex items-center'> <BiEnvelope size={20} className='mr-2'/>
                tusharranjan2526@gmail.com</div>
            </div>
        </div>
    )
}