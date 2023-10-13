import { Button, TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addUser } from "../services/user";
import { useState } from "react";
import UserList from "../components/UserList/UserList";

export default function Register() {
  const users = useAppSelector((state) => state.user);
  const debug = useAppSelector((state) => state.theme.isDebug);
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    dispatch(
      addUser([
        {
          email: email,
          password: password,
        },
      ])
    );
  };

  return (
    <>
      <h1>Sign up</h1>
      <Grid2 spacing={1} container>
        <Grid2 md={12}>
          <TextField
            label="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          ></TextField>
        </Grid2>
        <Grid2 md={12}>
          <TextField
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            label="Password"
          ></TextField>
        </Grid2>
        <Grid2 md={12}>
          <Button variant="outlined" onClick={handleClick}>
            Submit
          </Button>
        </Grid2>
        <Grid2 md={12}>
          <Typography>Number of users: {users.length}</Typography>
        </Grid2>
        {debug && (
          <Grid2 md={12}>
            <UserList users={users} />
          </Grid2>
        )}
      </Grid2>
    </>
  );
}
