import { useEffect, useState } from 'react'
import './App.css'
import { Todoprovider } from './contexts'
import { Todoform, Todoitems } from './components'
function App() {
  

  const [todos,settodos]=useState([])

  const addtodo=(todo)=>{
    settodos((prev)=>[{id:Date.now(),...todo},...prev ])
  }

  const updatedtodo=(id,todo)=>{

    settodos((prev)=>prev.map((prevtodo)=>(prevtodo.id===id ?todo:prevtodo)));
  }

  const togglecomplete=(id)=>{
    settodos((prev)=>prev.map((prevtodo)=>prevtodo.id===id? {...prevtodo,completed:!prevtodo.completed}:prevtodo))
  }
  const deletedtodo=(id)=>{
    settodos((prev)=>prev.filter((todo)=>todo.id!==id));
  }

  useEffect(()=>{
   const todos=  JSON.parse(localStorage.getItem("todos"));
   if(todos && todos.length>0)settodos(todos);
       
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
//   useEffect(() => {
//   const storedTodos = localStorage.getItem("todos");
  
//   try {
//     // Attempt to parse the stored data
//     const parsedTodos = JSON.parse(storedTodos);

//     // Check if parsedTodos is an array and not empty
//     if (Array.isArray(parsedTodos) && parsedTodos.length > 0) {
//       settodos(parsedTodos);
//     }
//   } catch (error) {
//     // Handle any potential parsing errors here
//     console.error("Error parsing todos from localStorage:", error);
//   }
// }, []);

// useEffect(() => {
//   // Stringify todos before storing in localStorage
//   localStorage.setItem("todos", JSON.stringify(todos));
// }, [todos]);


  return (
    <Todoprovider value={{todos,addtodo,updatedtodo,deletedtodo,togglecomplete}} >
  <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <Todoform/> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}

                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <Todoitems todo={todo}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
} 

export default App
