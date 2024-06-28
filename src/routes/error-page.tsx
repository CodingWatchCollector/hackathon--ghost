import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {error instanceof Error
            ? "statusText" in error && typeof error.statusText === "string"
              ? error.statusText
              : "message" in error
              ? error.message
              : "Unknown error!"
            : "Unknown error !"}
        </i>
      </p>
    </div>
  );
};
