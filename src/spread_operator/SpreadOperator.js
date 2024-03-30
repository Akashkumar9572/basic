import React, { useState } from 'react'
import logo from '../images/logo.svg';
const SpreadOperator = () => {
    const [data, setData]=useState(['ram','mohan','sita'])
    console.log(data)
       
    const addTodo=()=>
    {
     setData([...data,'babita']);
    }   
    
    const myStyle={
      fontSize:"30px",
      backgroundColor:"red",
      padding:"10px 30px",
      borderRadius:"30px",
      color:"white",
      cursor:"pointer"
    }
    
    const items={
      fontSize:"30px",
      display:"flex",
      backgroundColor:"blue",
      gap:"10px"
    }

  return (
    <div>
         <header className="App-header">
<input type="text" />
        <p>
         {data.map((item,index)=><div style={items}> {item}</div>)}
        </p>
       
         <div onClick={()=>addTodo()} style={myStyle}>Learn React</div> 
        
      </header>
    </div>
  )
}

export default SpreadOperator