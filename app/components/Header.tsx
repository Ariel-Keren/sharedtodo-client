"use client";

import { HiPlusSm } from "react-icons/hi";
import useModal from "../hooks/useModal";
import Logo from "./Logo";

type ModalProps = {
  hideModal: () => void;
};

type Props = {
  Modal: React.ComponentType<ModalProps>;
};

const Header: React.FC<Props> = ({ Modal }) => {
  const [isModalShown, showModal, hideModal] = useModal();

  return (
    <div className="p-5 flex justify-between items-center">
      <Logo size="small" />
      <button onClick={showModal}>
        <HiPlusSm className="text-white text-5xl" />
      </button>

      {isModalShown && <Modal hideModal={hideModal} />}
    </div>
  );
};

export default Header;
