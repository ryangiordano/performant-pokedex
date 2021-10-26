import React, { ChangeEvent } from "react";
import Box from "../../../patterns/Box";
import Flex from "../../../patterns/Flex";
import { PokedexStateContext } from "../../../state/PokedexStateContext";

function DashboardSearch({
  searchValue,
  onChange,
}: {
  searchValue?: string;
  onChange: (value: string) => void;
}) {
  return (
    <Flex flex="2" mr="medium" alignItems="center">
      <Box as="label" htmlFor="filter" mr="medium" color="white">
        Search
      </Box>
      <input
        placeholder="Filter by name"
        id="filter"
        type="text"
        className="form-control"
        value={searchValue}
        style={{ backgroundColor: "white", display: "inline-block" }}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </Flex>
  );
}
export default DashboardSearch;
