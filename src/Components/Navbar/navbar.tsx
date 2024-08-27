"use client";
import { Dispatch,SetStateAction,useRef,useState } from "react";
import {motion} from 'framer-motion'
import Link from "next/link";
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export default function App(){
  const[position,setPosition]=useState<Position>({
    left:0,
    width:0,
    opacity:0,
  });
  return (
    <>
      <div className="w-full bg-wb h-max flex justify-center absolute top-4 font-monsterrat">
        <ul 
        onMouseLeave={()=>{
          setPosition(pv=>({
            ...pv,
            opacity:0
          }))
        }}
        className="relative bg-black flex z-50 w-fit rounded-full border-white border-2 p-1">
            <List setPosition={setPosition}>HOME</List>
            <List setPosition={setPosition}>TECH-STACK</List>
            <List setPosition={setPosition}>LOGIN</List>
            <Cursor position={position}/>
        </ul>
      </div>
    </>
  )
}

function List({children,setPosition}:{
  children:string,
  setPosition:Dispatch<SetStateAction<Position>>
}){
  const ref=useRef<null | HTMLLIElement>(null);
  const redirect=children==='HOME'?'':children.toLowerCase();
  return(
    <Link href={'/'+redirect}>
    <motion.li
    ref={ref}  
    onMouseEnter={()=>{
      if(!ref.current)return;
      const {width}=ref.current.getBoundingClientRect();

      setPosition({
          width,
          opacity:1,
          left:ref.current.offsetLeft,
      })
    }} 
     className="relative z-10 block cursor-pointer px-2 py-1 text-xs text-wb mix-blend-difference md:px-6 md:py-3 md:text-sm">
      {children}
    </motion.li>
    </Link>
  );
}
function Cursor({position}:{position:Position}){
  return(
    <motion.li
    animate={{...position,}}
    className="absolute z-0 h-4 w-36 rounded-full bg-wb_bgcolor_b-400 md:h-11"/>
  )
}
type Position={
  left:number,
  width:number,
  opacity:number
}
