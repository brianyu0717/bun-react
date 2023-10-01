/** Root App Wrapper */
import Grid from "@mui/material/Unstable_Grid2";
import ResponsiveAppBar from "../components/AppBar/AppBar";

import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <Grid container>
      <ResponsiveAppBar />
      <Outlet />
    </Grid>
  );
}
