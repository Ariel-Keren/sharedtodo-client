import CreateListModal from "./CreateListModal";
import Header from "./Header";
import ListsContainer from "./ListsContainer";

const App: React.FC = () => (
  <>
    <Header Modal={CreateListModal} />
    <ListsContainer />
  </>
);

export default App;
