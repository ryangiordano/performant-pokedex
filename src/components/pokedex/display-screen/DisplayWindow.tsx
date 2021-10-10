import React from "react";
import Box from "../../../patterns/Box";

function DisplayWindow({ children }: { children: React.ReactNode }) {
  return (
    <Box height="100%" width="50%">
      {children}
    </Box>
  );
}
export default DisplayWindow;
