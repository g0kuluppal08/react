import { createContext,useContext } from "react";

export const TodoContext=createContext({

  todos: [
    {
        id:1,
        todo:"Todo msg",
        completed:false,
    }
  ],
  addtodo:(todo)=>{},
  updatedtodo:(id,todo)=>{},
  deletedtodo:(id)=>{},
  togglecomplete:(id)=>{}

})


export const usetodo=()=>{
    return useContext(TodoContext);
}

export const  Todoprovider = TodoContext.Provider


