import Logo from "@/app/components/Logo";

const PublicUserNotFound: React.FC = () => (
  <div className="flex flex-col justify-center items-center h-screen">
    <div className="absolute top-5">
      <Logo size="small" />
    </div>
    <h2 className="text-white text-3xl font-medium uppercase">
      User Not Found
    </h2>
    <p className="text-gray-300 text-lg">
      Please check if you mistyped something in the URL.
    </p>
  </div>
);

export default PublicUserNotFound;
