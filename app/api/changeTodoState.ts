import url from "./url";

const changeTodoState = async (
  token: string,
  username: string,
  listIndex: number,
  todoIndex: number
) => {
  const response = await fetch(
    `${url}/users/${username}/lists/${listIndex}/todos/${todoIndex}`,
    {
      method: "PATCH",
      headers: {
        authorization: token,
      },
    }
  );

  if (!response.ok) alert(await response.text());
};

export default changeTodoState;
