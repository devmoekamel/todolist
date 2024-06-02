"use client";
import React from 'react'
import { useDispatch } from 'react-redux';
import { checkTask, deleteTask } from '../store/taskSlice';
import { Trash2 } from 'lucide-react';
function TaskComp({task,Index}) {
  const dispatch =  useDispatch();
  const handleCheckboxChange = ()=>{
    dispatch(checkTask(Index));
  }
  const handledel = ()=>{
    dispatch(deleteTask(Index))
  }
  return (
    <div className="bg-slate-600 px-10 rounded-2xl p-4 flex justify-between  items-center">
        <div className='flex gap-x-5  items-center'>
        <input  onChange={handleCheckboxChange} type="checkbox"  checked={task.checked} className="cursor-pointer w-4 h-4 accent-blue-600" />
         {task.checked? 
         <h1 className="text-xl text-white hover:text-green-500 duration-500 text-center line-through">{task.title}</h1>:
         <h1 className="text-xl text-white text-center">{task.title}</h1>}
        </div>
        <Trash2 onClick={handledel} className=' text-white hover:text-red-500 duration-500 cursor-pointer' />
  </div>
  )
}

export default TaskComp
