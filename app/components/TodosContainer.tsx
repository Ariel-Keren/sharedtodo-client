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
  const todosInTrashIndices = [] as number[];

  lists[Number(index)].todos.forEach((todo, todoIndex) => {
    if (todo.isTrash) todosInTrashIndices.push(todoIndex);
    else if (todo.isCompleted) completedTodoIndices.push(todoIndex);
    else todoIndices.push(todoIndex);
  });

  const todos = lists[Number(index)].todos.filter(
    (todo) => !todo.isCompleted && !todo.isTrash
  );
  const completedTodos = lists[Number(index)].todos.filter(
    (todo) => todo.isCompleted && !todo.isTrash
  );
  const todosInTrash = lists[Number(index)].todos.filter(
    (todo) => todo.isTrash
  );

  return (
    <div className="flex flex-col p-5 gap-x-5 lg:flex-row lg:justify-center">
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
      <TodoStateContainer
        title="Trash"
        color="#f87171"
        todos={todosInTrash}
        indices={todosInTrashIndices}
      />
    </div>
  );
};

export default TodosContainer;
