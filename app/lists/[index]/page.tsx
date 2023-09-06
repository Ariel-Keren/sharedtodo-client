"use client";

import CreateTodoModal from "@/app/components/CreateTodoModal";
import Header from "@/app/components/Header";
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
      <Header Modal={CreateTodoModal} />
      <Title title={lists[Number(index)].title} />
      <TodosContainer />
    </>
  );
};

export default ListPage;
