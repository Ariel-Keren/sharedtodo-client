import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public User | SharedTodo",
  description: "Create and share your todo lists",
};

type Props = {
  children: React.ReactNode;
};

const PublicUserPageLayout: React.FC<Props> = ({ children }) => children;

export default PublicUserPageLayout;
