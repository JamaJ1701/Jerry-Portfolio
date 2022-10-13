import { useRouteError } from "react-router-dom";
import { Typography } from "@mui/material";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <Typography variant="h1">Oops!</Typography>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}