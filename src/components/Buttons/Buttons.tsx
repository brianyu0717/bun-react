import React, { useState } from "react";
import { Box, Button, ButtonOwnProps } from "@mui/material";

type ButtonsProps = {
  /** The mui color */
  color?: ButtonOwnProps["color"];
  icon?: React.ReactNode;
};

/** 20 Buttons in a Box*/
function buttons({ color, icon }: ButtonsProps) {
  const [count, setCount] = useState(100);
  const handleClick = () => setCount((count) => count + 1);
  return (
    <Box sx={{ border: 1 }}>
      {[...Array(20).keys()].map(() => (
        <Button
          variant="outlined"
          color={color}
          onClick={handleClick}
          startIcon={icon}
        >
          {count}
        </Button>
      ))}
    </Box>
  );
}

export default buttons;
