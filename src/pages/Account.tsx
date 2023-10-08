import { Button, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function Account() {
  return (
    <>
      <h1>Account</h1>
      <h2>Update your data</h2>
      <Grid2>
        <Grid2>
          <TextField label="Name"></TextField>
        </Grid2>
        <Grid2>
          <TextField label="Email"></TextField>
        </Grid2>
        <Grid2>
          <Button>Submit</Button>
        </Grid2>
      </Grid2>
    </>
  );
}
