import url from "./url";

const changeUsername = async (
  token: string,
  username: string,
  newUsername: string
) => {
  const response = await fetch(`${url}/users/${username}/username`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", authorization: token },
    body: JSON.stringify({ newUsername }),
  });

  if (!response.ok) alert(await response.text());
  return response.ok;
};

export default changeUsername;
