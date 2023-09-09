"use client";

import Logo from "@/app/components/Logo";
import Title from "@/app/components/Title";
import TodosContainer from "@/app/components/TodosContainer";
import useAPI from "@/app/hooks/useAPI";
import useAppState from "@/app/hooks/useAppState";
import { notFound, useParams } from "next/navigation";
import { useEffect } from "react";

const PublicListPage: React.FC = () => {
  const { publicLists } = useAppState();
  const { getPublicListsAPI } = useAPI();
  const { username, index } = useParams();

  if (typeof username !== "string") notFound();

  const lists = publicLists[username];

  if (
    typeof username !== "string" ||
    lists === null ||
    typeof index !== "string" ||
    !Number.isInteger(Number(index)) ||
    Number(index) < 0 ||
    Number(index) >= lists?.length
  )
    notFound();

  useEffect(() => {
    if (username in publicLists) return;
    getPublicListsAPI(username);
  }, [username, publicLists, getPublicListsAPI]);

  if (!lists) return <p>Loading...</p>;

  return (
    <>
      <div className="flex p-5">
        <Logo size="small" />
      </div>
      <Title title={lists[Number(index)].title} />
      <TodosContainer todos={lists[Number(index)].todos} access="public" />
    </>
  );
};

export default PublicListPage;
