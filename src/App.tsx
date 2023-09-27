import Grid from "@mui/material/Unstable_Grid2";
import Buttons from "./buttons";

function App() {
  return (
    <Grid container>
      <Grid md={12}><Buttons color="error"/></Grid>
      <Grid md={2}><Buttons color="info"/></Grid>
      <Grid md={8}><Buttons color="secondary"/></Grid>
      <Grid md={2}><Buttons color="success"/></Grid>
      <Grid md={12}><Buttons/></Grid>
    </Grid>
  );
}

export default App;
