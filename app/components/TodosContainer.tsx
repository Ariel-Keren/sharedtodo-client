import TodoStateContainer from "./TodoStateContainer";
import { TodoType } from "../types";

type Props = {
  todos: TodoType[];
  access: "private" | "public";
};

const TodosContainer: React.FC<Props> = ({ todos, access }) => {
  const uncompletedTodoIndices = [] as number[];
  const completedTodoIndices = [] as number[];
  const todosInTrashIndices = [] as number[];

  todos.forEach((todo, todoIndex) => {
    if (todo.isTrash) todosInTrashIndices.push(todoIndex);
    else if (todo.isCompleted) completedTodoIndices.push(todoIndex);
    else uncompletedTodoIndices.push(todoIndex);
  });

  const uncompletedTodos = todos.filter(
    (todo) => !todo.isCompleted && !todo.isTrash
  );
  const completedTodos = todos.filter(
    (todo) => todo.isCompleted && !todo.isTrash
  );
  const todosInTrash = todos.filter((todo) => todo.isTrash);

  return (
    <div className="flex flex-col p-5 gap-x-5 lg:flex-row lg:justify-center">
      <TodoStateContainer
        title="Todos"
        color="#4b5563"
        todos={uncompletedTodos}
        indices={uncompletedTodoIndices}
        access={access}
      />
      <TodoStateContainer
        title="Completed"
        color="#86efac"
        todos={completedTodos}
        indices={completedTodoIndices}
        access={access}
      />
      <TodoStateContainer
        title="Trash"
        color="#f87171"
        todos={todosInTrash}
        indices={todosInTrashIndices}
        access={access}
      />
    </div>
  );
};

export default TodosContainer;
