import { notFound, useParams } from "next/navigation";
import useAppState from "../hooks/useAppState";
import PublicList from "./PublicList";
import { AiOutlineLoading } from "react-icons/ai";

const PublicListsContainer: React.FC = () => {
  const { publicLists } = useAppState();
  const { username } = useParams();

  if (typeof username !== "string" || publicLists[username] === null)
    notFound();

  if (!publicLists[username])
    return (
      <div className="flex justify-center">
        <AiOutlineLoading className="text-gray-300 animate-spin text-5xl" />
      </div>
    );

  return (
    <div className="flex flex-col items-center gap-3 px-5">
      {publicLists[username]?.map((list, index) => (
        <PublicList list={list} index={index} key={index} />
      ))}
    </div>
  );
};

export default PublicListsContainer;
