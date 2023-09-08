import { notFound, useParams } from "next/navigation";
import useAppState from "../hooks/useAppState";
import { TodoType } from "../types";
import { FaCheck, FaTrash } from "react-icons/fa";
import useAPI from "../hooks/useAPI";

type Props = {
  todo: TodoType;
};

const PublicTodo: React.FC<Props> = ({ todo }) => {
  return (
    <div className="flex justify-between items-center bg-gray-900 w-full px-5 h-16 rounded transition-all hover:bg-gray-800 hover:pl-10 sm:w-3/4 md:w-2/3 lg:w-full 2xl:w-3/4">
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
      </div>
    </div>
  );
};

export default PublicTodo;
