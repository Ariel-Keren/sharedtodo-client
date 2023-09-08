"use client";

import CreateTodoModal from "@/app/components/CreateTodoModal";
import Header from "@/app/components/Header";
import ListSettingsModal from "@/app/components/ListSettingsModal";
import Title from "@/app/components/Title";
import TodosContainer from "@/app/components/TodosContainer";
import useAppState from "@/app/hooks/useAppState";
import { notFound, useParams } from "next/navigation";

const ListPage: React.FC = () => {
  const { lists } = useAppState();

  const { index } = useParams();

  if (
    typeof index !== "string" ||
    !Number.isInteger(Number(index)) ||
    Number(index) < 0 ||
    Number(index) >= lists.length
  )
    notFound();

  return (
    <>
      <Header SettingsModal={ListSettingsModal} AddModal={CreateTodoModal} />
      <Title title={lists[Number(index)].title} />
      <TodosContainer todos={lists[Number(index)].todos} access="private" />
    </>
  );
};

export default ListPage;
