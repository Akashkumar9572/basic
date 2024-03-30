import React, { useState } from 'react'
import dog from '../image/dog.jpg'

const Home = () => {

  const [name, setName] = useState("")
 

  const equal = () => {
    setName(eval(name))
  }

  return (
    <>      
        <div className=" flex flex-col md:flex-row p-4 mt-24">
      <div className="md:w-1/2 p-4  center flex-col">
        <h1 className="text-7xl font-bold">Hi, I am Akash</h1>
        <p className="text-gray-700 mt-4 w-3/5 text-xl">Welcome to my portfolio! I am a passionate frontend developer with expertise in building user-friendly and responsive web applications. Feel free to explore my work and download my resume to learn more about my skills and experiences.</p>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700">Download Resume</button>
      </div>
      <div className="md:w-1/2 p-4 mt-5 center ">
        <img src={dog} alt="Your Name" className="w-3/5 h-auto rounded" />
      </div>
    </div>
    </>
  )
}

export default Home