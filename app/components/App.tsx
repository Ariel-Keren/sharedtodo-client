import CreateListModal from "./CreateListModal";
import Header from "./Header";
import ListsContainer from "./ListsContainer";

const App: React.FC = () => (
  <>
    <Header SettingsModal={CreateListModal} AddModal={CreateListModal} />
    <ListsContainer />
  </>
);

export default App;
