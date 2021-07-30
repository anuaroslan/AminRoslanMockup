import * as React from "react";
import { Slide, useScrollTrigger } from "@material-ui/core";

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;
