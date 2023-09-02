export type TodoType = {
  text: string;
  isCompleted: boolean;
};

export type ListType = {
  title: string;
  todos: TodoType[];
};

const isTodoArray = (value: unknown): value is TodoType[] => {
  return (
    Array.isArray(value) &&
    value.every(
      (element) =>
        typeof element === "object" &&
        element &&
        "text" in element &&
        "isCompleted" in element &&
        typeof element.text === "string" &&
        typeof element.isCompleted === "boolean"
    )
  );
};

export const isListArray = (value: unknown): value is ListType[] => {
  return (
    Array.isArray(value) &&
    value.every(
      (element) =>
        typeof element === "object" &&
        element &&
        "title" in element &&
        "todos" in element &&
        typeof element.title === "string" &&
        isTodoArray(element.todos)
    )
  );
};