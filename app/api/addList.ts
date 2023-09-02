import url from "./url";

const addList = async (token: string, username: string, title: string) => {
  const response = await fetch(`${url}/users/${username}/lists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify({ title }),
  });

  if (!response.ok) alert(await response.text());
};

export default addList;
