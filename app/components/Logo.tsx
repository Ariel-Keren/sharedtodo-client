import Link from "next/link";

type Props = {
  size: "big" | "small";
};

const Logo: React.FC<Props> = ({ size }) => (
  <Link href="/">
    <h1
      className={`text-white font-bold border-b-blue-700 transition-colors hover:border-b-blue-500 ${
        size === "big" ? "text-8xl border-b-8" : "text-3xl border-b-4"
      }`}
    >
      SharedTodo
    </h1>
  </Link>
);

export default Logo;
