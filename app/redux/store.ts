import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "./features/usernameSlice";
import listsReducer from "./features/listsSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    usernameReducer,
    listsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
