import { configureStore } from "@reduxjs/toolkit";
import AutReducer from "../Reducers/AutReducer";
import UserReducer from "../Reducers/UserReducer";
import TodoReducer from "../Reducers/TodoReducer";

const Store = configureStore({
    reducer:{
        AutReducer:AutReducer,
        UserReducer:UserReducer,
        TodoReducer:TodoReducer
    }
})

export default Store;