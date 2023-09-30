import React, { useState } from "react";
import { Button, ButtonOwnProps } from "@mui/material";
import _ from "lodash";
import BorderedBox from "../BorderedBox/BorderedBox";

type ButtonsProps = {
  /** The mui color */
  color?: ButtonOwnProps["color"];
  icon?: React.ReactNode;
};

/** 20 Buttons in a Box*/
function buttons({ color, icon }: ButtonsProps) {
  const [count, setCount] = useState(100);
  const handleClick = () => setCount((count) => count + 1);
  const randomColour : typeof color = !icon
    ? _.sample(["primary", "secondary", "success", "error", "info", "warning"])
    : undefined;
  return (
    <BorderedBox>
      {[...Array(20).keys()].map((i) => (
        <Button
          variant="outlined"
          color={color ? color : randomColour}
          onClick={handleClick}
          startIcon={icon}
          key={i}
        >
          {count}
        </Button>
      ))}
    </BorderedBox>
  );
}

export default buttons;
