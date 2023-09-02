import useAppState from "../hooks/useAppState";
import List from "./List";

const ListsContainer: React.FC = () => {
  const { lists } = useAppState();

  return (
    <div className="grid grid-cols-5 gap-3 px-5">
      {lists.map((list, index) => (
        <List list={list} index={index} key={index} />
      ))}
    </div>
  );
};

export default ListsContainer;
