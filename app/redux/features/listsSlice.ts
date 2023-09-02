import { ListType } from "@/app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const listsSlice = createSlice({
  name: "lists",
  initialState: [] as ListType[],
  reducers: {
    setListsReducer: (_, action: PayloadAction<ListType[]>) => action.payload,
    addListReducer: (state, action: PayloadAction<string>) => [
      ...state,
      { title: action.payload, todos: [] },
    ],
    addTodoReducer: (
      state,
      action: PayloadAction<{ listIndex: number; text: string }>
    ) => {
      state[action.payload.listIndex].todos.push({
        text: action.payload.text,
        isCompleted: false,
        isTrash: false,
      });
    },
    toggleTodoCompleteReducer: (
      state,
      action: PayloadAction<{ listIndex: number; todoIndex: number }>
    ) => {
      state[action.payload.listIndex].todos[
        action.payload.todoIndex
      ].isCompleted =
        !state[action.payload.listIndex].todos[action.payload.todoIndex]
          .isCompleted;
    },
    removeListReducer: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
    removeTodoReducer: (
      state,
      action: PayloadAction<{ listIndex: number; todoIndex: number }>
    ) => {
      if (
        state[action.payload.listIndex].todos[action.payload.todoIndex].isTrash
      )
        state[action.payload.listIndex].todos.splice(
          action.payload.todoIndex,
          1
        );
      else
        state[action.payload.listIndex].todos[
          action.payload.todoIndex
        ].isTrash = true;
    },
  },
});

export const {
  setListsReducer,
  addListReducer,
  addTodoReducer,
  toggleTodoCompleteReducer,
  removeListReducer,
  removeTodoReducer,
} = listsSlice.actions;
export default listsSlice.reducer;
