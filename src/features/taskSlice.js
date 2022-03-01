import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [{
        id: 0,
        title: 'Biryani',
        date: new Date().toLocaleDateString(),
        completed: false
    },
    {
        id: 1,
        title: 'Chai',
        date: new Date().toLocaleDateString(),
        completed: true
    }, {
        id: 2,
        title: 'Biryani',
        date: new Date().toLocaleDateString(),
        completed: true
    }
        ,
    {
        id: 3,
        title: 'Chai',
        date: new Date().toLocaleDateString(),
        completed: false
    }

    ]
}

const taskSlice = createSlice({
    name: 'Tasks',
    initialState,
    reducers: {
        taskCompleted(state, action) {
            const item = state.tasks.find(item => item.id === action.payload)
            console.log(item)
            item.completed = !item.completed
        }
    }
})

export const { taskCompleted } = taskSlice.actions

export default taskSlice.reducer