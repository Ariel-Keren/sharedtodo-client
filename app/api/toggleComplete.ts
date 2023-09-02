import url from "./url";

const toggleComplete = async (
  token: string,
  username: string,
  listIndex: number,
  todoIndex: number,
  isCompleted: boolean
) => {
  const response = await fetch(
    `${url}/users/${username}/lists/${listIndex}/todos/${todoIndex}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ isCompleted }),
    }
  );

  if (!response.ok) alert(await response.text());
};

export default toggleComplete;
