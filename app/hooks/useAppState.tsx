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
  toggleTodoCompleteReducer,
  removeListReducer,
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
  const toggleTodoComplete = (listIndex: number, todoIndex: number) =>
    dispatch(toggleTodoCompleteReducer({ listIndex, todoIndex }));
  const removeList = (listIndex: number) =>
    dispatch(removeListReducer(listIndex));

  return {
    username,
    lists,
    setUsername,
    resetUsername,
    setLists,
    addList,
    addTodo,
    toggleTodoComplete,
    removeList,
  };
};

export default useAppState;
