import React from 'react'
import { usetodo } from '../contexts';
import { useState } from 'react';

function Todoitems({ todo }) {

    const [istodoedit,setistodoedit]=useState(false);
    const [todomsg,settodomsg]=useState(todo.todo)
    
    const {deletedtodo,updatedtodo,togglecomplete}=usetodo()

    const edittodo=()=>{

        updatedtodo(todo.id,{...todo,todo:todomsg})
        setistodoedit(false)

    }
    const togglecom=()=>{
        togglecomplete(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={togglecom}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    istodoedit ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todomsg}
                onChange={(e) => settodomsg(e.target.value)}
                readOnly={!istodoedit}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (istodoedit) {
                        edittodo();
                    } else setistodoedit((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {istodoedit ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deletedtodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default Todoitems;

