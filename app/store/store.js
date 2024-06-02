const { configureStore } = require("@reduxjs/toolkit");
import TaskReducer from "./taskSlice"
export const store =  configureStore({
reducer:{
    "task":TaskReducer
}
})