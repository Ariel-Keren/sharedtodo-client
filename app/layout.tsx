import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReduxProvider from "./components/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SharedTodo",
  description: "Create and share your todo lists",
};

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => (
  <html lang="en">
    <body className={`${inter.className} bg-gray-950`}>
      <ReduxProvider>{children}</ReduxProvider>
    </body>
  </html>
);

export default RootLayout;
