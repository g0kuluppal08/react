import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  let myobj={
    name:"gokulsexy",
    age:21
  }

  let arr=[1,2,4]

  return (
    <>
        <h1 className='bg-green-400 text-black p-4 rounded-2xl mb-4' >Tailwind Test</h1>
         <Card channel="gokulll" obj={myobj} arr={arr} btnText={"fuck me"}/>
         <Card channel="lodu" />
    </>
  )
}

export default App
