import React from "react";
import Box from "../../../patterns/Box";
import Flex from "../../../patterns/Flex";

function DashboardFilter({}: {}) {
  return (
    <Flex as="fieldset" alignItems="center">
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
export default DashboardFilter;
