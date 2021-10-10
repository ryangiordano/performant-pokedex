import React from "react";
import Box from "../../../patterns/Box";

function DisplayListItem({
  name,
  onClick,
  onMouseEnter,
  hovered,
  selected,
}: {
  name: string;
  onClick: () => void;
  onMouseEnter?: () => void;
  hovered: boolean;
  selected: boolean;
}) {
  return (
    <Box
      as="li"
      // textDecoration={"none"}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      {name}
    </Box>
  );
}
export default DisplayListItem;
