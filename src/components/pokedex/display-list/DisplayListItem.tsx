import React from "react";
import { css } from "styled-components";
import Box from "../../../patterns/Box";

function DisplayListItem({
  name,
  onClick,
  selected,
}: {
  name: string;
  onClick: (name: string) => void;
  selected: boolean;
}) {
  const [highlighted, setHighlighted] = React.useState(false);
  return (
    <Box
      className="list-group-item"
      as="li"
      onClick={() => {
        onClick(name);
      }}
      onMouseEnter={() => {
        setHighlighted(true);
      }}
      onMouseLeave={() => {
        setHighlighted(false);
      }}
      backgroundColor={selected ? "blue" : highlighted ? "light_blue" : "white"}
      textAlign="left"
      style={{
        listStyle: "none",
        cursor: "pointer",
      }}
    >
      {name}
    </Box>
  );
}
export default React.memo(DisplayListItem);
