import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 0,
      title: "Task 1",
      date: new Date().toLocaleDateString(),
      completed: false,
    },
    {
      id: 1,
      title: "Task 2",
      date: new Date().toLocaleDateString(),
      completed: true,
    },
    {
      id: 2,
      title: "Task 3",
      date: new Date().toLocaleDateString(),
      completed: true,
    },
    {
      id: 3,
      title: "Task 4",
      date: new Date().toLocaleDateString(),
      completed: false,
    },
  ],
  activeEditId: null,
};

const taskSlice = createSlice({
  name: "Tasks",
  initialState,
  reducers: {
    taskCompleted(state, action) {
      const item = state.tasks.find((item) => item.id === action.payload);
      console.log(item);
      item.completed = !item.completed;
    },
    taskAdded(state, action) {
      state.tasks.push(action.payload);
    },
    taskDeleted(state, action) {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
    taskSetActiveEditID(state, action) {
      state.activeEditId = action.payload;
      console.log(state.activeEditId);
    },
    taskEdited(state, action) {
      const activeID = state.activeEditId;
      const item = state.tasks.find((item) => item.id === activeID);
      item.title = action.payload.title;
      item.date = action.payload.date;
    },
  },
});

export const {
  taskCompleted,
  taskDeleted,
  taskAdded,
  taskSetActiveEditID,
  taskEdited,
} = taskSlice.actions;

export default taskSlice.reducer;
