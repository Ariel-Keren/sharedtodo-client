import { notFound, useParams } from "next/navigation";
import useAppState from "../hooks/useAppState";
import Todo from "./Todo";

const TodosContainer: React.FC = () => {
  const { lists } = useAppState();

  const { index } = useParams();

  if (
    typeof index !== "string" ||
    !Number.isInteger(Number(index)) ||
    Number(index) < 0 ||
    Number(index) >= lists.length
  )
    notFound();

  return (
    <div className="flex flex-col items-center gap-2">
      {lists[Number(index)].todos.map((todo, todoIndex) => (
        <Todo todo={todo} todoIndex={todoIndex} key={todoIndex} />
      ))}
    </div>
  );
};

export default TodosContainer;
