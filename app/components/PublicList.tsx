import Link from "next/link";
import { ListType } from "../types";
import { notFound, useParams } from "next/navigation";

type Props = {
  list: ListType;
  index: number;
};

const PublicList: React.FC<Props> = ({ list, index }) => {
  const { username } = useParams();

  if (typeof username !== "string") notFound();

  return (
    <Link
      href={`/public/${username}/lists/${index}`}
      className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3"
    >
      <div className="bg-gray-900 p-5 rounded transition-colors hover:bg-gray-800">
        <h2 className="text-gray-200">{list.title}</h2>
        <p className="text-gray-400">
          {list.todos.length} {list.todos.length === 1 ? "item" : "items"}
        </p>
      </div>
    </Link>
  );
};

export default PublicList;
