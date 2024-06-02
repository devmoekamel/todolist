const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  tasklist: [
    {
      title: "go to school",
      checked: true,
    },
  ],
};

const TaskSlice = createSlice({
  name: "Task",
  initialState,
  reducers:{
    addTask:(state,action)=>{
        state.tasklist = [{title:action.payload,checked:false},...state.tasklist,]
    },
    deleteTask:(state,action)=>{
        state.tasklist.splice(action.payload,1);
    },
    checkTask:(state,action)=>{
        state.tasklist[action.payload].checked = !state.tasklist[action.payload].checked  ;
    }
    

  }
});

export default TaskSlice.reducer ; 

export const  {addTask,checkTask,deleteTask} =  TaskSlice.actions;