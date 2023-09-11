import url from "./url";

const changeUsername = async (
  token: string,
  username: string,
  newPassword: string
) => {
  const response = await fetch(`${url}/users/${username}/password`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", authorization: token },
    body: JSON.stringify({ newPassword }),
  });

  if (!response.ok) alert(await response.text());
};

export default changeUsername;
