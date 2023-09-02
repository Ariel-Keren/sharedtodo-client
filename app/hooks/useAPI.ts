import { useCookies } from "react-cookie";
import useAppState from "./useAppState";
import changeTodoState from "../api/changeTodoState";
import addTodo from "../api/addTodo";
import addList from "../api/addList";
import authenticate from "../api/authenticate";
import { isListArray } from "../types";
import removeList from "../api/removeList";
import removeTodo from "../api/removeTodo";

const useAPI = () => {
  const { username, setUsername, setLists } = useAppState();

  const [cookies, setCookie] = useCookies(["token"]);

  const authenticateAPI = async (
    path: "register" | "login",
    username: string,
    password: string
  ) => {
    const data: unknown = await authenticate(path, username, password);

    if (
      typeof data !== "object" ||
      data === null ||
      !("token" in data) ||
      typeof data.token !== "string"
    )
      return;

    setUsername(username);
    setCookie("token", data.token);

    if ("lists" in data && isListArray(data.lists)) return setLists(data.lists);

    setLists([]);
  };

  const addListAPI = (title: string) => addList(cookies.token, username, title);

  const addTodoAPI = (listIndex: number, text: string) =>
    addTodo(cookies.token, username, listIndex, text);

  const changeTodoStateAPI = (listIndex: number, todoIndex: number) =>
    changeTodoState(cookies.token, username, listIndex, todoIndex);

  const removeListAPI = (listIndex: number) =>
    removeList(cookies.token, username, listIndex);

  const removeTodoAPI = (listIndex: number, todoIndex: number) =>
    removeTodo(cookies.token, username, listIndex, todoIndex);

  return {
    authenticateAPI,
    addListAPI,
    addTodoAPI,
    changeTodoStateAPI,
    removeListAPI,
    removeTodoAPI,
  };
};

export default useAPI;
