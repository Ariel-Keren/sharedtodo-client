"use client";

import { useRef } from "react";
import { RiCloseFill } from "react-icons/ri";
import { useRouter } from "next/navigation";

type Props = {
  hideModal: () => void;
};

const SearchModal: React.FC<Props> = ({ hideModal }) => {
  const router = useRouter();
  const usernameRef = useRef<HTMLInputElement | null>(null);

  const createTodoList = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!usernameRef.current) return;
    if (usernameRef.current.value.replaceAll(" ", "") === "")
      return alert("Cannot search for a user without a username.");

    router.push(`/public/${usernameRef.current.value}`);
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-brightness-90">
      <div className="bg-gray-900 h-1/3 w-1/3 relative flex justify-center items-center">
        <button onClick={hideModal} className="absolute top-1 right-1">
          <RiCloseFill className="text-gray-300 text-2xl transition-colors hover:text-gray-400" />
        </button>
        <h2 className="text-white uppercase text-3xl font-medium absolute top-5 border-b-4 border-b-blue-700">
          Search User
        </h2>
        <form
          onSubmit={createTodoList}
          className="flex flex-col items-center gap-10"
        >
          <div className="flex flex-col">
            <label htmlFor="username" className="text-gray-200">
              Username
            </label>
            <input
              id="username"
              ref={usernameRef}
              className="bg-gray-900 text-white border-b-2 border-b-gray-700 outline-none transition-colors focus:border-b-gray-600"
            />
          </div>
          <input
            type="submit"
            value="Search"
            className="bg-white h-10 w-32 rounded font-medium text-lg uppercase cursor-pointer transition-colors hover:bg-gray-100"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchModal;
