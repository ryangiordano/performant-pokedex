import React from "react";
import { css } from "styled-components";
import Box from "../../../patterns/Box";

function DisplayListItem({
  name,
  onClick,
  selected,
  highlighted,
  setHighlighted,
}: {
  name: string;
  onClick: (name: string) => void;
  selected: boolean;
  highlighted: boolean;
  setHighlighted: (name: string) => void;
}) {
  return (
    <Box
      className="list-group-item"
      as="li"
      onClick={() => {
        onClick(name);
      }}
      onMouseEnter={() => {
        setHighlighted(name);
      }}
      onMouseLeave={() => {
        setHighlighted(name);
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
export default DisplayListItem;
