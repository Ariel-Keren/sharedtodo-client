"use client";

import { CookiesProvider } from "react-cookie";
import LandingPage from "./components/LandingPage";
import App from "./components/App";
import useAppState from "./hooks/useAppState";

const Home: React.FC = () => {
  const { username } = useAppState();

  if (username === "")
    return (
      <CookiesProvider>
        <LandingPage />
      </CookiesProvider>
    );

  return (
    <CookiesProvider>
      <App />
    </CookiesProvider>
  );
};

export default Home;
