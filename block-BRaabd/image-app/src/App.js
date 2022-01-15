import React from 'react'
import { useState } from 'react';

const App = () => {
  const [image, setimage] = useState(image);
  const handleClick = ()=>{
     
  }
  return (
    <div>
      <center>
        <h1>Welcome to App</h1>

        <button onClick={()=>{setimage(handleClick)}}>Basketball</button>
        <button onClick={()=>{setimage(handleClick)}}>Pubg</button>
        <button onClick={()=>{setimage(handleClick)}}>Tiger</button>
        <button onClick={()=>{setimage(handleClick)}}>Phone</button>
        <button onClick={()=>{setimage(handleClick)}}>Laptop</button>
        <button onClick={()=>{setimage(handleClick)}}>Cricket</button>
      </center>
      
    </div>
  )
}

export default App
