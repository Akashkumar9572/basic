import React from 'react';
import cat from '../image/cat.jpg'

const About = () => {
 return(
  <div className=" flex p-8c h-screen bg-blue-200" id='about' >
  <div className="md:w-1/2 p-4">        
    <h1 className="text-4xl font-bold mb-4">About Me</h1>
    <p className="text-gray-700">I am a passionate frontend developer with a strong background in creating dynamic and responsive web applications. My goal is to combine technical skills with creativity to deliver user-friendly and visually appealing experiences. I am proficient in modern web technologies and always eager to learn and adapt to new challenges in the ever-evolving field of web development.</p>
  </div>
  <div className="md:w-1/2 p-4 mt-5 center ">
    <img src={cat} alt="Your Name" className="w-3/5 h-auto rounded" />
  </div>
</div>
 )
 

    
  
}

export default About