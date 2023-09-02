import { Metadata } from "next";

export const metadata: Metadata = {
  title: "List | SharedTodo",
  description: "Create and share your todo lists",
};

type Props = {
  children: React.ReactNode;
};

const ListPageLayout: React.FC<Props> = ({ children }) => children;

export default ListPageLayout;
