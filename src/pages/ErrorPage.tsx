import { useRouteError } from "react-router-dom";
interface RouterError {
    statusText: string;
    message: string;
}
export default function ErrorPage() {
  const error = useRouteError() as RouterError;
  console.error(error);

  return (
    <>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  );
}
