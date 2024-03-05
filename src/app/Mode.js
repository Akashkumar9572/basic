import React, { useEffect, useState } from 'react'

const Mode = () => {
   const today=new Date();
    const [toggle, setToggle]=useState(true);
    const [myTime,setMyTime]=useState('')
  
  console.log(today);

  useEffect(()=>
  {
console.log("kya haal hai ?");
  },[])


  return (
    <div className={`w-screen h-screen center flex-col ${toggle? "dark" : "light" }`}>

<div className=" py-3 px-10 bg-red-500 rounded-full text-white text-xl cursor-pointer absolute top-[100px] right-[50px]" 
onClick={()=>setToggle(!toggle)}
>                                     {toggle? "Light" : "Dark" }</div>

 <div className="center h-screen w-screen bg-white dark:bg-black
  rounded-2xl text-black dark:text-white text-2xl">Himanshu Saraswati </div>      
       <div>{myTime}</div>
    </div>
  )
}

export default Mode