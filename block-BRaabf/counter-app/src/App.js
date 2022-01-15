import React from 'react'
import { useState } from 'react';

const App = () => {
  const [counter, setcounter] = useState(0);
  const [step, setstep] = useState(5);
  const [max, setmax] = useState(15);

  return (
    <div>
      <center>
        <h1>{counter}</h1>
        <h3>Steps</h3>
        {
          [5, 10, 15].map((step) => <button
            onClick={() => {
              setstep(step)
            }}
            className={step === step ? 'active--step' : ""}>{step}</button>)
        }
      </center>
      <center>
      <h3>Max</h3>
      {
          [15, 100, 200].map((max) => <button
            onClick={() => {
              setmax(max)
            }
            }
            >{max}</button>)
        }
         
      </center>
      <center>

        <button onClick={() => { setcounter(counter + step > max ? counter : counter + step) }}>Increment</button>
        <button onClick={() => { setcounter(counter - step) }}>Decrement</button>
        <button onClick={() => { setcounter(0) }}>Reset</button>
      </center>


    </div>
  )
}

export default App
