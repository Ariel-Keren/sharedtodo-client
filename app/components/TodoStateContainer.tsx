import { TodoType } from "../types";
import Todo from "./Todo";

type Props = {
  title: string;
  color: string;
  todos: TodoType[];
  indices: number[];
};

const TodoStateContainer: React.FC<Props> = ({
  title,
  color,
  todos,
  indices,
}) => {
  return (
    <div className="flex flex-col items-center w-full gap-2 my-2">
      <h2
        className="text-white text-xl font-medium uppercase border-b-2"
        style={{ borderBottomColor: color }}
      >
        {title}
      </h2>
      {todos.map((todo, index) => (
        <Todo todo={todo} todoIndex={indices[index]} key={index} />
      ))}
      {todos.length === 0 && (
        <p className="text-gray-600">This list is empty</p>
      )}
    </div>
  );
};

export default TodoStateContainer;
