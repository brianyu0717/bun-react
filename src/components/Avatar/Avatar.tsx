import { Avatar } from "@mui/material";
import amber from "@mui/material/colors/amber";
import blue from "@mui/material/colors/blue";
import deepOrange from "@mui/material/colors/deepOrange";
import purple from "@mui/material/colors/purple";
import BorderedBox from "../BorderedBox/BorderedBox";

export type AvatarProps = {
  seed: string;
  single?: boolean;
};

export default function ({ seed, single }: AvatarProps) {
  if (single) {
    return (
      <Avatar
        variant="circular"
        src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}`}
        alt="avatar"
        sx={{ width: 50, height: 50, bgcolor: amber[500] }}
      />
    );
  }
  return (
    <BorderedBox>
      <Avatar
        variant="circular"
        src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}`}
        alt="avatar"
        sx={{ width: 100, height: 100, bgcolor: deepOrange[500] }}
      />
      <Avatar
        variant="circular"
        src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}`}
        alt="avatar"
        sx={{ width: 75, height: 75, bgcolor: blue[500] }}
      />
      <Avatar
        variant="circular"
        src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}`}
        alt="avatar"
        sx={{ width: 50, height: 50, bgcolor: amber[500] }}
      />
      <Avatar
        variant="circular"
        src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}`}
        alt="avatar"
        sx={{ width: 25, height: 25, bgcolor: purple[500] }}
      />
    </BorderedBox>
  );
}
