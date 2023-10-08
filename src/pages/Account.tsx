import { Button, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function Account() {
  return (
    <>
      <h1>Account</h1>
      <h2>Update your data</h2>
      <Grid2 spacing={1} container>
        <Grid2 md={12}>
          <TextField label="Name"></TextField>
        </Grid2>
        <Grid2 md={12}>
          <TextField label="Email"></TextField>
        </Grid2>
        <Grid2 md={12}>
          <Button variant="outlined">Submit</Button>
        </Grid2>
      </Grid2>
    </>
  );
}
