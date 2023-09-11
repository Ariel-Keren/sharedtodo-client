import CreateListModal from "./CreateListModal";
import Header from "./Header";
import ListsContainer from "./ListsContainer";
import UserSettingsModal from "./UserSettingsModal";

const App: React.FC = () => (
  <>
    <Header SettingsModal={UserSettingsModal} AddModal={CreateListModal} />
    <ListsContainer />
  </>
);

export default App;
