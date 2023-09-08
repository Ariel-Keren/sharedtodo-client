import url from "./url";

const getPublicLists = async (token: string, username: string) => {
  const response = await fetch(`${url}/users/${username}/lists/public`, {
    headers: { authorization: token },
  });
  if (!response.ok) {
    alert(await response.text());
    return null;
  }
  return await response.json();
};

export default getPublicLists;
