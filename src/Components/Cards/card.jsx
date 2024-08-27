import React from 'react'

export default function card({props}) {
  return (
    <div className='w-2/5 h-56 bg-wb_bgcolor_b-400 rounded-xl p-4 hover:bg-neutral-700 transition-all font-monsterrat'>
        <div className=' font-bold text-2xl text-center'>{props.platform}</div>
        <div>
            <ul className=' ml-3'>
            {props.resources.map((val)=><li className='my-2 hover:pl-3 transition-all'>{val}</li>)}
            </ul>
        </div>
        
    </div>
  )
}