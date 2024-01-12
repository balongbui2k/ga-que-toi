import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="container mx-auto flex flex-col items-center justify-center h-screen"
    >
      <h1 className="font-bold text-4xl">Oops!</h1>
      <p className="my-20">Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-400">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
