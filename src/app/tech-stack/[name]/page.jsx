"use client"
import Cards from '@/Components/Cards/card'
import Skeleton from '@/Components/Skeleton/Skeleton';
import { useEffect,useState } from 'react'
export default function InfoPage({params}){
    const [data,setData]=useState({
        intro:'',
        road:[],
        resource:[]
    });
    const [loading,setLoading] =useState(false); 
    const loadData=async()=>{
        try{
            setLoading(true);
            const got=await fetch(`/api/users/generate_page/${params.name}`);
            const res=await got.json();
            setData({...data,intro:res.brief,road:res.roadmap,resource:res.type});
            setLoading(false);
        }catch(err){
            console.log('Error fetching data',err);
            return;
        }
    }
    useEffect(()=>{
        loadData();
    },[])
    return<>
     <div className="h-[200vh] w-full px-20  mt-20 flex justify-center flex-col font-monsterrat">
            <>
                <div className="w-full">
                    <h1 className=" w-full text-base lg:text-5xl font-bold">{params.name.toUpperCase()}</h1>
                    <p className="mt-10 w-full h-max text-lg">{loading?
                        <>
                        <Skeleton classname="h-[10px] w-full"/><Skeleton classname="h-[10px] w-full"/><Skeleton classname="h-[10px] w-full"/>
                        </>:data.intro}</p>
                </div>
                <div className="flex flex-col px-20 mt-5 text-justify w-full">
                    <div className="flex flex-col mt-4">
                        <h2 className=" text-2xl font-bold mb-4">Roadmap</h2>
                        <ul> 
                            {loading?
                        <>
                        <Skeleton classname="h-[10px] w-full"/><Skeleton classname="h-[10px] w-full"/><Skeleton classname="h-[10px] w-full"/><Skeleton classname="h-[10px] w-full"/><Skeleton classname="h-[10px] w-full"/><Skeleton classname="h-[10px] w-full"/>
                        </>:data.road.map((ind,val)=><li className='m-2'>{val+1}.{ind}</li>)}
                        </ul>
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl text-center font-bold m-10">Resources</h1>
                    <div className="flex flex-wrap justify-evenly gap-4 mt-10 h-max w-full">
                        {data.resource.map((res)=><Cards props={res}/>)}
                    </div>
                    
                </div>
                </>
        </div>
    </>
}
