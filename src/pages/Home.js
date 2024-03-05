import React, { useState } from 'react'

const Home = () => {

  const [name, setName] = useState("")
 

  const equal = () => {
    setName(eval(name))
  }

  return (
    <>
      <div className='center h-screen  gap-10 flex-col '>

        <div className="h-[550px] w-[400px] border-2 border-black p-3 relative">
          <input type="text"
            className='border-[2px] text-gray-600 border-black h-24 w-full text-5xl font-bold rounded-lg p-2 '
            value={name}
            onChange={(e) => setName(e.target.value)} />
<div className='flex gap-2 m-4'>
<div className="bg-white border-2 border-black font-bold w-12 h-12 center rounded-lg cursor-pointer hover:bg-gray-400 text-3xl "
            onClick={() => setName(name+"0")}
          >0</div>
          <div className="bg-white border-2 border-black font-bold w-12 h-12 center rounded-lg cursor-pointer hover:bg-gray-400 text-3xl "
            onClick={() => setName(name+"1")}
          >1</div>
          <div className="bg-white border-2 border-black font-bold w-12 h-12 center rounded-lg cursor-pointer hover:bg-gray-400 text-3xl "
            onClick={() => setName(name+"2")}
          >2</div>
          <div className="bg-white border-2 border-black font-bold w-12 h-12 center rounded-lg cursor-pointer hover:bg-gray-400 text-3xl "
            onClick={() => setName(name+"3")}
          >3</div>

<div className="bg-white border-2 border-black font-bold w-12 h-12 center rounded-lg cursor-pointer hover:bg-gray-400 text-3xl "
            onClick={() => setName(name+"+")}
          >+</div>

<div className="bg-white border-2 border-black font-bold w-12 h-12 center rounded-lg cursor-pointer hover:bg-gray-400 text-3xl "
            onClick={() => setName(name+"-")}
          >-</div>

<div className="bg-white border-2 text-2xl font-bold border-black  w-28 h-12 center   rounded-lg cursor-pointer hover:bg-gray-400 absolute bottom-0"
          onClick={() => equal()}
        >=</div>
</div>
          

        </div>





       
        
      </div>


    </>
  )
}

export default Home