import { useRouteError } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Header from "./Header";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
{/* TODO: Change the page layout for desktop verison */}
      <Header />
      <Box>
        <div id="error-page">
          <Typography variant="h1">Oops!</Typography>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </Box>
    </>
  );
}