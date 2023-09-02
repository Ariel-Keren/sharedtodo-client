import useModal from "../hooks/useModal";
import AuthenticationModal from "./AuthenticationModal";
import Logo from "./Logo";
import useAPI from "../hooks/useAPI";

const LandingPage: React.FC = () => {
  const { authenticateAPI } = useAPI();

  const [isSignInModalShown, showSignInModal, hideSignInModal] = useModal();
  const [isSignUpModalShown, showSignUpModal, hideSignUpModal] = useModal();

  const register = (username: string, password: string) =>
    authenticateAPI("register", username, password);

  const login = (username: string, password: string) =>
    authenticateAPI("login", username, password);

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center gap-20">
        <Logo size="big" />
        <div className="flex justify-center gap-10 w-1/2">
          <button
            onClick={showSignInModal}
            className="bg-white h-10 w-32 rounded font-medium text-lg uppercase transition-colors hover:bg-gray-100"
          >
            Sign In
          </button>
          <button
            onClick={showSignUpModal}
            className="bg-white h-10 w-32 rounded font-medium text-lg uppercase transition-colors hover:bg-gray-100"
          >
            Sign Up
          </button>
        </div>
      </div>

      {isSignInModalShown && (
        <AuthenticationModal
          title="Sign In"
          submit={login}
          hideModal={hideSignInModal}
        />
      )}
      {isSignUpModalShown && (
        <AuthenticationModal
          title="Sign Up"
          submit={register}
          hideModal={hideSignUpModal}
        />
      )}
    </>
  );
};

export default LandingPage;
