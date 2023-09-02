"use client";

import { useState } from "react";

const useModal = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  const showModal = () => setIsModalShown(true);
  const hideModal = () => setIsModalShown(false);

  const modal: [boolean, () => void, () => void] = [
    isModalShown,
    showModal,
    hideModal,
  ];

  return modal;
};

export default useModal;
