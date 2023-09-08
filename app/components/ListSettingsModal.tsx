"use client";

import { RiCloseFill } from "react-icons/ri";
import useAppState from "../hooks/useAppState";
import useAPI from "../hooks/useAPI";
import { notFound, useParams } from "next/navigation";

type Props = {
  hideModal: () => void;
};

const ListSettingsModal: React.FC<Props> = ({ hideModal }) => {
  const { lists, toggleListVisibility } = useAppState();

  const { toggleListVisibilityAPI } = useAPI();

  const { index } = useParams();

  if (
    typeof index !== "string" ||
    !Number.isInteger(Number(index)) ||
    Number(index) < 0 ||
    Number(index) >= lists.length
  )
    notFound();

  const isPublic = lists[Number(index)].isPublic;

  const toggleVisibility = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    toggleListVisibility(Number(index));
    toggleListVisibilityAPI(Number(index));
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-brightness-90">
      <div className="bg-gray-900 h-1/3 w-1/3 relative flex flex-col gap-2 justify-center items-center">
        <button onClick={hideModal} className="absolute top-1 right-1">
          <RiCloseFill className="text-gray-300 text-2xl transition-colors hover:text-gray-400" />
        </button>
        <h2 className="text-white uppercase text-3xl font-medium absolute top-5 border-b-4 border-b-blue-700">
          Settings
        </h2>
        <h3 className="text-white text-lg uppercase">List Visibility</h3>
        <button
          onClick={toggleVisibility}
          disabled={isPublic}
          className={`h-10 w-32 rounded font-medium text-lg uppercase transition-colors ${
            isPublic
              ? "bg-white cursor-default"
              : "bg-gray-950 text-gray-300 cursor-pointer hover:bg-gray-800"
          }`}
        >
          Public
        </button>
        <button
          onClick={toggleVisibility}
          disabled={!isPublic}
          className={`h-10 w-32 rounded font-medium text-lg uppercase cursor-pointer transition-colors ${
            !isPublic
              ? "bg-white cursor-default"
              : "bg-gray-950 text-gray-300 cursor-pointer hover:bg-gray-800"
          }`}
        >
          Private
        </button>
      </div>
    </div>
  );
};

export default ListSettingsModal;
