import url from "./url";

const removeList = async (
  token: string,
  username: string,
  listIndex: number
) => {
  const response = await fetch(`${url}/users/${username}/lists/${listIndex}`, {
    method: "DELETE",
    headers: { authorization: token },
  });

  if (!response.ok) alert(await response.text());
};

export default removeList;
