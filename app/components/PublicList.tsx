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
    <Link href={`/public/${username}/lists/${index}`}>
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
