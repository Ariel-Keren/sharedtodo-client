"use client";

import Logo from "@/app/components/Logo";
import PublicListsContainer from "@/app/components/PublicListsContainer";
import Title from "@/app/components/Title";
import useAPI from "@/app/hooks/useAPI";
import useAppState from "@/app/hooks/useAppState";
import { notFound, useParams } from "next/navigation";
import { useEffect } from "react";

const PublicUserPage: React.FC = () => {
  const { publicLists } = useAppState();
  const { getPublicListsAPI } = useAPI();
  const { username } = useParams();

  if (typeof username !== "string" || publicLists[username] === null)
    notFound();

  useEffect(() => {
    if (username in publicLists) return;
    getPublicListsAPI(username);
  }, [username, publicLists, getPublicListsAPI]);

  return (
    <>
      <div className="flex p-5">
        <Logo size="small" />
      </div>
      <Title title={username} />
      <PublicListsContainer />
    </>
  );
};

export default PublicUserPage;
