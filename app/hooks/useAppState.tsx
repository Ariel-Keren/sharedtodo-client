import { useAppSelector } from "../redux/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import {
  setUsernameReducer,
  resetUsernameReducer,
} from "../redux/features/usernameSlice";
import {
  setListsReducer,
  addListReducer,
  addTodoReducer,
  changeTodoStateReducer,
  removeListReducer,
  removeTodoReducer,
} from "../redux/features/listsSlice";
import { ListType } from "../types";

const useAppState = () => {
  const username = useAppSelector((state) => state.usernameReducer);
  const lists = useAppSelector((state) => state.listsReducer);

  const dispatch = useDispatch<AppDispatch>();

  const setUsername = (username: string) =>
    dispatch(setUsernameReducer(username));
  const resetUsername = () => dispatch(resetUsernameReducer());

  const setLists = (newLists: ListType[]) =>
    dispatch(setListsReducer(newLists));
  const addList = (title: string) => dispatch(addListReducer(title));
  const addTodo = (listIndex: number, text: string) =>
    dispatch(addTodoReducer({ listIndex, text }));
  const changeTodoState = (listIndex: number, todoIndex: number) =>
    dispatch(changeTodoStateReducer({ listIndex, todoIndex }));
  const removeList = (listIndex: number) =>
    dispatch(removeListReducer(listIndex));
  const removeTodo = (listIndex: number, todoIndex: number) =>
    dispatch(removeTodoReducer({ listIndex, todoIndex }));

  return {
    username,
    lists,
    setUsername,
    resetUsername,
    setLists,
    addList,
    addTodo,
    changeTodoState,
    removeList,
    removeTodo,
  };
};

export default useAppState;
