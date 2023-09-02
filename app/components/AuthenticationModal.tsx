import { useRef } from "react";
import { RiCloseFill } from "react-icons/ri";

type Props = {
  title: string;
  submit: (username: string, password: string) => void;
  hideModal: () => void;
};

const AuthenticationModal: React.FC<Props> = ({ title, submit, hideModal }) => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const submitThis = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!usernameRef.current || !passwordRef.current) return;
    submit(usernameRef.current.value, passwordRef.current.value);
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-brightness-90">
      <div className="bg-gray-900 h-1/2 w-2/3 relative flex justify-center items-center">
        <button onClick={hideModal} className="absolute top-1 right-1">
          <RiCloseFill className="text-gray-300 text-2xl transition-colors hover:text-gray-400" />
        </button>
        <h2 className="text-white uppercase text-3xl font-medium absolute top-5 border-b-4 border-b-blue-700">
          {title}
        </h2>
        <form
          onSubmit={submitThis}
          className="flex flex-col items-center gap-5"
        >
          <div className="flex flex-col">
            <label htmlFor="username" className="text-gray-200">
              Username
            </label>
            <input
              id="username"
              ref={usernameRef}
              className="bg-gray-900 text-white border-b-2 border-b-gray-700 outline-none transition-colors focus:border-b-gray-600"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-white">
              Password
            </label>
            <input
              id="password"
              type="password"
              ref={passwordRef}
              className="bg-gray-900 text-white border-b-2 border-b-gray-700 outline-none transition-colors focus:border-b-gray-600"
            />
          </div>
          <input
            type="submit"
            value={title}
            className="bg-white h-10 w-32 rounded font-medium text-lg uppercase cursor-pointer transition-colors hover:bg-gray-100"
          />
        </form>
      </div>
    </div>
  );
};

export default AuthenticationModal;
