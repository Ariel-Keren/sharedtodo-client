"use client";

import { HiPlusSm } from "react-icons/hi";
import useModal from "../hooks/useModal";
import Logo from "./Logo";
import { RiSettings3Fill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import SearchModal from "./SearchModal";

type ModalProps = {
  hideModal: () => void;
};

type Props = {
  SettingsModal: React.ComponentType<ModalProps>;
  AddModal: React.ComponentType<ModalProps>;
};

const Header: React.FC<Props> = ({ SettingsModal, AddModal }) => {
  const [isAddModalShown, showAddModal, hideAddModal] = useModal();
  const [isSettingsModalShown, showSettingsModal, hideSettingsModal] =
    useModal();
  const [isSearchModalShown, showSearchModal, hideSearchModal] = useModal();

  return (
    <div className="p-5 flex justify-between items-center">
      <Logo size="small" />
      <div className="flex items-center gap-3">
        <button
          onClick={showSearchModal}
          className="bg-gray-800 rounded-2xl p-2 group transition-colors hover:bg-gray-700"
        >
          <FiSearch className="text-white text-3xl transition-transform duration-500 group-hover:scale-110" />
        </button>
        <button
          onClick={showSettingsModal}
          className="bg-gray-800 rounded-2xl p-2 group transition-colors hover:bg-gray-700"
        >
          <RiSettings3Fill className="text-white text-3xl transition-transform duration-500 group-hover:rotate-180" />
        </button>
        <button
          onClick={showAddModal}
          className="bg-blue-700 rounded-2xl p-2 group transition-all duration-200 hover:bg-white hover:rounded-lg"
        >
          <HiPlusSm className="text-white text-5xl transition-colors delay-100 group-hover:text-blue-700" />
        </button>
      </div>

      {isAddModalShown && <AddModal hideModal={hideAddModal} />}
      {isSettingsModalShown && <SettingsModal hideModal={hideSettingsModal} />}
      {isSearchModalShown && <SearchModal hideModal={hideSearchModal} />}
    </div>
  );
};

export default Header;
