import url from "./url";

const addTodo = async (
  token: string,
  username: string,
  listIndex: number,
  text: string
) => {
  const response = await fetch(
    `${url}/users/${username}/lists/${listIndex}/todos`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ text }),
    }
  );

  if (!response.ok) alert(await response.text());
};

export default addTodo;
