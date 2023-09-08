export type TodoType = {
  text: string;
  isCompleted: boolean;
  isTrash: boolean;
};

export type ListType = {
  title: string;
  isPublic: boolean;
  todos: TodoType[];
};

export type PublicListsDictionary = {
  [username: string]: ListType[] | null;
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
        typeof element.isCompleted === "boolean" &&
        typeof element.isTrash === "boolean"
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
        "isPublic" in element &&
        "todos" in element &&
        typeof element.title === "string" &&
        typeof element.isPublic === "boolean" &&
        isTodoArray(element.todos)
    )
  );
};
