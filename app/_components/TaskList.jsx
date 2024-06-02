"use client";
import React from 'react'
import TaskComp from './TaskComp';
import { useSelector } from 'react-redux';

function TaskList() {
  const Tasks =  useSelector(state=>state.task.tasklist)
  return (
    <div className="flex justify-center mt-5">
    <div className="flex flex-col gap-y-6 w-full max-w-sm md:max-w-lg">
          
      {Tasks.map((task,index)=>(
        <TaskComp  key={index} task={task} Index={index}/>
      ))}

      </div>
      
    </div>
  )
}

export default TaskList;
