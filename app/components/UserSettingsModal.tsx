"use client";

import { RiCloseFill } from "react-icons/ri";
import useAPI from "../hooks/useAPI";
import { useRef } from "react";

type Props = {
  hideModal: () => void;
};

const UserSettingsModal: React.FC<Props> = ({ hideModal }) => {
  const { changeUsernameAPI, changePasswordAPI } = useAPI();

  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const verifyPasswordRef = useRef<HTMLInputElement | null>(null);

  const changeUsername = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!usernameRef.current)
      return alert("An error occurred. Please try waiting a bit.");
    if (usernameRef.current.value.replaceAll(" ", "") === "")
      return alert("No username to change to.");
    changeUsernameAPI(usernameRef.current.value);
  };

  const changePassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!passwordRef.current || !verifyPasswordRef.current)
      return alert("An error occurred. Please try waiting a bit.");
    if (passwordRef.current.value.replaceAll(" ", "") === "")
      return alert("No password to change to.");
    if (verifyPasswordRef.current.value !== passwordRef.current.value)
      return alert("Password doesn't match.");
    changePasswordAPI(passwordRef.current.value);
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-brightness-90">
      <div className="bg-gray-900 h-1/2 w-1/3 relative flex flex-col gap-2 justify-center items-center">
        <button onClick={hideModal} className="absolute top-1 right-1">
          <RiCloseFill className="text-gray-300 text-2xl transition-colors hover:text-gray-400" />
        </button>
        <h2 className="text-white uppercase text-3xl font-medium absolute top-5 border-b-4 border-b-blue-700">
          Settings
        </h2>
        <form className="flex flex-col items-center gap-10">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-gray-200">
              Change Username
            </label>
            <input
              id="username"
              ref={usernameRef}
              className="bg-gray-900 text-white border-b-2 border-b-gray-700 outline-none transition-colors focus:border-b-gray-600"
            />
            <button
              onClick={changeUsername}
              className="bg-white h-10 w-32 mt-3 rounded font-medium text-lg uppercase cursor-pointer transition-colors hover:bg-gray-100"
            >
              Change
            </button>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-200">
              Change Password
            </label>
            <input
              id="password"
              ref={passwordRef}
              className="bg-gray-900 text-white border-b-2 border-b-gray-700 outline-none transition-colors focus:border-b-gray-600"
            />
            <label htmlFor="verify-password" className="text-gray-200 mt-3">
              Verify Password
            </label>
            <input
              id="verify-password"
              ref={verifyPasswordRef}
              className="bg-gray-900 text-white border-b-2 border-b-gray-700 outline-none transition-colors focus:border-b-gray-600"
            />
            <button
              onClick={changePassword}
              className="bg-white h-10 w-32 mt-3 rounded font-medium text-lg uppercase cursor-pointer transition-colors hover:bg-gray-100"
            >
              Change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSettingsModal;
