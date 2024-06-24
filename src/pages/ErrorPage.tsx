import { FaExternalLinkAlt } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center azeret-mono-400">
      <h1 className="text-6xl font-bold text-darygrey dark:text-gray-100 mb-4">
        404
      </h1>
      <p className="text-2xl mb-4 text-darkgrey dark:text-gray-100">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="text-purple-500 hover:text-purple-300 duration-150 text-lg flex flex-row items-center gap-4"
      >
        Go to Homepage <FaExternalLinkAlt />
      </a>
    </div>
  );
};

export default ErrorPage;
