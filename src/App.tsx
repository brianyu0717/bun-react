import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "./components/AppBar/AppBar";
import TestPage from "./pages/TestPage";

export default function App() {
  return (
    <Grid container>
      <ResponsiveAppBar />
      <TestPage />
    </Grid>
  );
}
