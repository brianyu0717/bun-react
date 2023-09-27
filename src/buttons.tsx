import { useState } from "react";
import { Box, Button, ButtonOwnProps } from "@mui/material";
import SendIcon from "@mui/icons-material/AccessAlarms";

type ButtonsProps = {
    color?: ButtonOwnProps["color"]
}

function buttons({color}: ButtonsProps) {
  const [count, setCount] = useState(100);
  const handleClick = () => setCount((count) => count + 1);
  return (
    <Box>
      {[...Array(20).keys()].map(() => (
        <Button
          variant="outlined"
          color={color}
          onClick={handleClick}
          startIcon={<SendIcon />}
        >
          {count}
        </Button>
      ))}
    </Box>
  );
}

export default buttons;