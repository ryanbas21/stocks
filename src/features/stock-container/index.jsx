import React from "react";
import { Box } from "grommet";

export default props => {
  return (
    <Box pad="medium" elevation="medium">
      {props.children}
    </Box>
  );
};
