import { notFound, useParams } from "next/navigation";
import useAppState from "../hooks/useAppState";
import TodoStateContainer from "./TodoStateContainer";

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

  const todoIndices = [] as number[];
  const completedTodoIndices = [] as number[];

  lists[Number(index)].todos.forEach((todo, todoIndex) => {
    if (todo.isCompleted) completedTodoIndices.push(todoIndex);
    else todoIndices.push(todoIndex);
  });

  const todos = lists[Number(index)].todos.filter((todo) => !todo.isCompleted);
  const completedTodos = lists[Number(index)].todos.filter(
    (todo) => todo.isCompleted
  );

  return (
    <div className="flex justify-center">
      <TodoStateContainer
        title="Todos"
        color="#4b5563"
        todos={todos}
        indices={todoIndices}
      />
      <TodoStateContainer
        title="Completed"
        color="#86efac"
        todos={completedTodos}
        indices={completedTodoIndices}
      />
    </div>
  );
};

export default TodosContainer;
