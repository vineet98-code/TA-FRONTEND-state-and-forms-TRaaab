import React from 'react'
import { useState } from 'react';

const App = () => {
  let labels = ['basketball','pubg', 'tiger', 'phone', 'laptop', 'cricket'];
  const [state, setState] = useState('tiger')
  
  return (
    <div>
      <center>
        <h1>Welcome to App</h1>

        {labels.map((label) => (  
          <button onClick={()=>(
            setState(label)
          )}>{label}</button>
        ))}
      </center>
      
      <img src={`./assets/${state}.jpg`} alt={state} />

      
    </div>
  )
}

export default App
