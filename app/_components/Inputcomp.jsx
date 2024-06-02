"use client";
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice';

function Inputcomp() {
    const [title,settext] = useState("");
    const dispatch =  useDispatch();
    const addtotasks = ()=>{
        dispatch(addTask(title))
    }
  return (
    <div className="flex flex-wrap  justify-center items-center gap-x-10 ">
    <input onChange={(e)=>settext(e.target.value)} type="text" id="confirm_password" className="w-full md:w-3/4 bg-[#374151] text-white border border-transparent  rounded-xl p-3" />
    <button  onClick={addtotasks} className="px-10 py-3 bg-blue-600 hover:bg-black hover:text-green-400 duration-700 text-white rounded-2xl mt-3">Add</button>
    </div>
  )
}

export default Inputcomp;
