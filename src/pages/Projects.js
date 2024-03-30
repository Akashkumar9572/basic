import React from 'react'
import { Link } from 'react-router-dom'
import Counter_image from '../image/counter_thumbnail.png'
import Calculator_image from '../image/calculator.png'
import light_dark from '../image/light-dark.webp'

const Projects = () => {
  return (
    <div className=' w-full flex justify-center items-center flex-col gap-10 h-screen bg-red-100' id='projects'>
 
  <div className="mt-24 text-5xl font-bold text-red-700">My Projects</div>
   
   <div className="flex justify-center items-center flex-col md:flex-row gap-10 ">
   
      <Link to="/counter">
        <div className="w-[400px] h-[500px] md:w-[500px] md:h-[600px] bg-blue-200 shadow-2xl">
        <div className=" z-10 rounded-xl"><img src={Counter_image} className='p-2 rounded-xl' />
        </div>
       
       <div className="p-5 text-xl mt-5">
        <div className='  '><span className='font-bold'>App Name :</span>  Counter App</div>

        <div className=' mt-5 '><span className='font-bold'>Description :</span>  Its a counter app which is used to count numbers</div>

        <div className=' mt-5 '><span className='font-bold'>Languages used :</span>  HTML, Tailwind, React</div> 
        </div>

      </div>
      </Link>

      <Link to="/calculator"><div className="w-[400px] h-[500px] md:w-[500px] md:h-[600px] bg-blue-200 ">
        <div className=" z-10 rounded-xl"><img src={Calculator_image} className='p-2 rounded-xl' />
        </div>
       
       <div className="p-5 text-xl mt-5">
        <div className='  '><span className='font-bold'>App Name :</span>  Calculator</div>

        <div className=' mt-5 '><span className='font-bold'>Description :</span>  Its a calculator app which is used to calculate numbers</div>

        <div className=' mt-5 '><span className='font-bold'>Languages used :</span>  HTML, Tailwind, React</div> 
        </div>

      </div>
      </Link>

      <Link to="/mode"><div className="w-[400px] h-[500px] md:w-[500px] md:h-[600px] bg-blue-200 ">
        <div className=" z-10 rounded-xl"><img src={light_dark} className='p-2 rounded-xl' />
        </div>
       
       <div className="p-5 text-xl mt-5">
        <div className='  '><span className='font-bold'>App Name :</span>  Dark Mode </div>

        <div className=' mt-5 '><span className='font-bold'>Description :</span>  In this app we can toggle application in dark and light mode</div>

        <div className=' mt-5 '><span className='font-bold'>Languages used :</span>  HTML, Tailwind, React</div>

        <div
          className="box-card border-2 rounded-xl h-72 w-64
        
        opacity-90 hover:opacity-100 transition-opacity duration-300
        hover:border-b-green-500 relative"
        >
          {/* <img src={ReactCardThumb} alt="" className="" /> */}
          <div className="flex  items-center justify-center absolute top-0  border-1 rounded-t-xl  h-44 w-64 backdrop-blur-[1px] opacity-0 hover:opacity-100 transition-opacity duration-300">
          <i class="fa-brands fa-github   mt-24 pr-3 text-3xl text-green-500 "></i>
          </div>
          <div className=" p-2 pt-4 pb-0 text-gray-300">•Business Card</div>
          <div className="p-2 pt-0 pb-0 text-gray-300">
            •Custom business card design using React for a personalized touch.{" "}
            <br />
            Click to view.
          </div>
          <div className="pl-2  text-gray-300 tracking-tight">
            •Language used - React & Tailwind CSS
          </div>
        </div>
        </div>

      </div>
      </Link>



      </div>
    </div>

  )
}

export default Projects
