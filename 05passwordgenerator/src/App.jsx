import { useState ,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  
  const [length,setlength]=useState(8);
  const [numberallow,setnumberallow]=useState(false);
  const [charallow,setcharallow]=useState(false);
  const [password,setpassword]=useState("");

  const passwordref=useRef(null);  
  const copypasswordtoclickboard=useCallback(()=>{

    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,3);
    
    window.navigator.clipboard.writeText(password);
  },[password]);

  const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberallow)str+="0123456789";
    if(charallow)str+="!@#$%^&*()_+";
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);

    }
    setpassword(pass);
   

  },[length,numberallow,charallow,setpassword]); 

  // passwordgenerator();
  useEffect(()=>{
     passwordgenerator();

  },[length,numberallow,charallow,passwordgenerator]);


  return (
    <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
            <h1 className='text-white text-center my-3'>Password Generator</h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
              <input type="text" 
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='Password'
              readOnly
              ref={passwordref}
               />
              <button
              onClick={copypasswordtoclickboard}
               className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
                copy</button>
            </div>

              <div className='flex text-sm gap-x-2'>

                <div className='flex items-center gap-x-1'>
                  <input type="range"
                  min={6}
                  max={100}
                  value={length}
                  className='cursor-pointer'
                  onChange={(e)=>{setlength(e.target.value)}}
                  />
                  <label >Length:{length}</label>
                </div>
 
                <div className='flex items-center gap-x-1'>
                  <input type="checkbox"
                  defaultChecked={numberallow}
                  id='numberinput'
                  onChange={()=>{
                    setnumberallow((prev)=>!prev);
                  }} />
                  <label htmlFor="numberinput">Numbers</label>

                </div>

                   <div className='flex items-center gap-x-1'>
                  <input 
                  type="checkbox"
                  defaultChecked={charallow}
                  id='charinput'
                  onChange={()=>{
                    setcharallow((prev)=>!prev);
                  }} />
                  <label htmlFor="charinput">Characters</label>

                </div>  



              </div>


        </div>
    </>
  )
} 

export default App
