import { notFound, useParams } from "next/navigation";
import useAppState from "../hooks/useAppState";
import { TodoType } from "../types";
import { FaCheck, FaTrash } from "react-icons/fa";
import useAPI from "../hooks/useAPI";

type Props = {
  todo: TodoType;
  todoIndex: number;
};

const Todo: React.FC<Props> = ({ todo, todoIndex }) => {
  const { lists, changeTodoState, removeTodo } = useAppState();

  const { changeTodoStateAPI, removeTodoAPI } = useAPI();

  const { index } = useParams();

  if (
    typeof index !== "string" ||
    !Number.isInteger(Number(index)) ||
    Number(index) < 0 ||
    Number(index) >= lists.length
  )
    notFound();

  const changeThisTodoState = () => {
    changeTodoState(Number(index), todoIndex);
    changeTodoStateAPI(Number(index), todoIndex);
  };

  const removeThisTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    removeTodo(Number(index), todoIndex);
    removeTodoAPI(Number(index), todoIndex);
  };

  return (
    <div
      onClick={changeThisTodoState}
      className="flex justify-between items-center bg-gray-900 w-1/2 px-5 h-16 rounded cursor-pointer transition-all hover:bg-gray-800 hover:pl-10"
    >
      <p
        className={`text-white text-lg h-7 border-b-2 ${
          todo.isTrash
            ? "border-b-red-400"
            : todo.isCompleted
            ? "border-b-green-300"
            : "border-b-gray-600"
        }`}
      >
        {todo.text}
      </p>
      <div className="flex items-center gap-3">
        {todo.isCompleted && !todo.isTrash && (
          <FaCheck className="text-green-300" />
        )}
        <button
          onClick={removeThisTodo}
          className="bg-gray-900 bg-opacity-50 p-2 rounded transition-colors hover:bg-opacity-100"
        >
          <FaTrash className="text-gray-300" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
