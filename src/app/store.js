import { configureStore } from "@reduxjs/toolkit";

import TaskReducer from '../features/taskSlice'

const store = configureStore({
    reducer: {
        Tasks: TaskReducer
    }
})

export default store