import url from "./url";

const removeTodo = async (
  token: string,
  username: string,
  listIndex: number,
  todoIndex: number
) => {
  const response = await fetch(
    `${url}/users/${username}/lists/${listIndex}/todos/${todoIndex}`,
    { method: "DELETE", headers: { authorization: token } }
  );

  if (!response.ok) alert(await response.text());
};

export default removeTodo;
