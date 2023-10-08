import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export default function Index() {
  const { param } = useParams();
  const paramInfo = param ? (
    <h1>{param}</h1>
  ) : (
    <Typography>Home page</Typography>
  );

  return <>{paramInfo}</>;
}
