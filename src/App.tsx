import { Grid } from "@mui/material";
import TestPage from "./pages/TestPage";
import ResponsiveAppBar from "./components/AppBar/AppBar";

export default function App() {
  return (
    <Grid container>
      <ResponsiveAppBar />
      <TestPage />
    </Grid>
  );
}
