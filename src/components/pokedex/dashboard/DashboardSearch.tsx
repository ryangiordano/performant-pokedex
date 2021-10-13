import React, { ChangeEvent } from "react";
import Box from "../../../patterns/Box";
import Flex from "../../../patterns/Flex";

function DashboardSearch({
  onChange,
  filteredValue,
}: {
  onChange: (e: ChangeEvent) => void;
  filteredValue?: string;
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
        style={{ backgroundColor: "white", display: "inline-block" }}
      />
    </Flex>
  );
}
export default DashboardSearch;
