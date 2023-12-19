import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter,setcounter]=useState(0); //hooks 
  // const addvalue=()=>{
  //   // if(counter<20) counter++;
  //   setcounter(counter+1);
  //   setcounter(counter+1);
  //   setcounter(counter+4);

  //asynch nature of usestate--->move in batches ie react will batch these changes nd perform toghether
  
  // }
  const addvalue=()=>{
    // if(counter<20) counter++;
    setcounter(prevctr=>prevctr+1);
    setcounter(prevctr=>prevctr+2);
    setcounter(prevctr=>prevctr+4);
  }


  const removevalue=()=>{
   if(counter>0) counter--;
    setcounter(counter);
  }

  return (
    <>
      <h1>chai and react</h1>
      <h2>Counter value:{counter}</h2>
       <button 
       onClick={addvalue}
       >
        add value </button>
       <br />
       <button
       onClick={removevalue}>remove value</button>

    </>
  )
}

export default App
