import React from 'react'
import {motion} from 'framer-motion'

const Circle = ({color,size}) => {
    let mycolor=color
    let mySize=size || 60
  return (
    <div className='center m-3'> 
     
        <motion.div 
        whileTap={{ rotate: 360 }}
        transition={{ duration: 0.6, repeat:Infinity, ease:'linear'}}
        className={`size-60 z-10 ${mycolor} halla_bol`}></motion.div>
    </div>
  )
}

export default Circle