import url from "./url";

const toggleListVisibility = async (
  token: string,
  username: string,
  listIndex: number
) => {
  const response = await fetch(`${url}/users/${username}/lists/${listIndex}`, {
    method: "PATCH",
    headers: { authorization: token },
  });

  if (!response.ok) alert(await response.text());
};

export default toggleListVisibility;
