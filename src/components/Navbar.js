import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <div className='h-20 bg-slate-600 flex items-center justify-between fixed top-0 w-screen'>
       <div className=" ml-5 text-3xl text-white">Marwari College</div>
    <div className="flex gap-10 text-xl text-white">
        <div className="cursor-pointer"><Link smooth to='/#'>Home</Link></div>
        <div className="cursor-pointer"><Link smooth to='/#about'>About</Link></div>
        <div className="cursor-pointer"><Link smooth to='/#projects'>Projects</Link></div>
        <div className="cursor-pointer"><Link smooth to='/#skill'>skill</Link></div>
        <div className="cursor-pointer"><Link smooth to='#content me'>content me</Link></div>       
    </div>
    <div className="h-10 w-10 bg-blue-300 rounded-full m-5 "></div>
    </div>
  )
}

export default Navbar