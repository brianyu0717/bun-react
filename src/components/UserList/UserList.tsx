import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { UsersState } from "../../services/user";
import { Typography } from "@mui/material";

export interface UserListProps {
  users: UsersState;
}

export default function UserList(props: UserListProps) {
  const { users } = props;
  return (
    <Grid2 container>
      {users.map(({ email, password }, index) => (
        <Grid2 md={12} key={index}>
          <Typography sx={{
            fontWeight: 'bold'
          }}>User index {index}</Typography>
          <Typography>Email: {email}</Typography>
          <Typography>Password: {password}</Typography>
        </Grid2>
      ))}
    </Grid2>
  );
}
