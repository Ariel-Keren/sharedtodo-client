import Link from "next/link";
import { ListType } from "../types";
import { RiCloseFill } from "react-icons/ri";
import useAppState from "../hooks/useAppState";
import useAPI from "../hooks/useAPI";

type Props = {
  list: ListType;
  index: number;
};

const List: React.FC<Props> = ({ list, index }) => {
  const { removeList } = useAppState();

  const { removeListAPI } = useAPI();

  const removeThisList = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeListAPI(index);
    removeList(index);
  };

  return (
    <Link href={`/lists/${index}`}>
      <div className="relative bg-gray-900 p-5 rounded transition-colors hover:bg-gray-800">
        <h2 className="text-gray-200">{list.title}</h2>
        <p className="text-gray-400">
          {list.todos.length} {list.todos.length === 1 ? "item" : "items"}
        </p>
        <button onClick={removeThisList} className="absolute top-1 right-1">
          <RiCloseFill className="text-red-400 text-xl transition-colors hover:text-red-500" />
        </button>
      </div>
    </Link>
  );
};

export default List;
