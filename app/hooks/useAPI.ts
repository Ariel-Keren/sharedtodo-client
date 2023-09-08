import { useCookies } from "react-cookie";
import useAppState from "./useAppState";
import changeTodoState from "../api/changeTodoState";
import addTodo from "../api/addTodo";
import addList from "../api/addList";
import authenticate from "../api/authenticate";
import { isListArray } from "../types";
import removeList from "../api/removeList";
import removeTodo from "../api/removeTodo";
import toggleListVisibility from "../api/toggleListVisibility";
import getPublicLists from "../api/getPublicLists";

const useAPI = () => {
  const { username, setUsername, setLists, addPublicLists } = useAppState();

  const [cookies, setCookie] = useCookies(["token"]);

  const authenticateAPI = async (
    path: "register" | "login",
    username: string,
    password: string
  ) => {
    const data: unknown = await authenticate(path, username, password);

    if (
      typeof data !== "object" ||
      !data ||
      !("token" in data) ||
      typeof data.token !== "string"
    )
      return;

    setUsername(username);
    setCookie("token", data.token);

    if ("lists" in data && isListArray(data.lists)) return setLists(data.lists);

    setLists([]);
  };

  const getPublicListsAPI = async (typedUsername: string) => {
    const data: unknown = await getPublicLists(cookies.token, typedUsername);

    if (!data) return addPublicLists(typedUsername, null);

    if (
      typeof data !== "object" ||
      !("publicLists" in data) ||
      !isListArray(data.publicLists)
    )
      return;

    addPublicLists(typedUsername, data.publicLists);
  };

  const addListAPI = (title: string) => addList(cookies.token, username, title);

  const addTodoAPI = (listIndex: number, text: string) =>
    addTodo(cookies.token, username, listIndex, text);

  const toggleListVisibilityAPI = (listIndex: number) =>
    toggleListVisibility(cookies.token, username, listIndex);

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
    toggleListVisibilityAPI,
    changeTodoStateAPI,
    removeListAPI,
    removeTodoAPI,
    getPublicListsAPI,
  };
};

export default useAPI;
