import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public List | SharedTodo",
  description: "Create and share your todo lists",
};

type Props = {
  children: React.ReactNode;
};

const PublicListPageLayout: React.FC<Props> = ({ children }) => children;

export default PublicListPageLayout;
