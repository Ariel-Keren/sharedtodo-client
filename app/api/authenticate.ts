import url from "./url";

const authenticate = async (
  path: "register" | "login",
  username: string,
  password: string
) => {
  const response = await fetch(`${url}/auth/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) return alert(await response.text());

  return await response.json();
};

export default authenticate;
