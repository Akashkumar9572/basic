import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount]=useState(0)


const increament=()=>
{
setCount(count+1);
}

const decrement=()=>
{
setCount(count-1);
}
  return (
    <div className="center h-screen  gap-10">
    <div className="bg-blue-700 text-white py-1 px-8 rounded-lg cursor-pointer hover:bg-blue-900"
   onClick={()=>decrement()}
   >Decrement</div>

   <div className="text-4xl font-bold text-red-500">{count}</div>

   <div className="bg-blue-700 text-white py-1 px-8 rounded-lg cursor-pointer hover:bg-blue-900"
   onClick={()=>increament()}
   >increament</div>
    
        </div>
  )
}

export default Counter