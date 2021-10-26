import React from "react";
import Box from "../../../patterns/Box";
import Flex from "../../../patterns/Flex";
import GenerationSelect from "./GenerationSelect";

function DashboardFilter({
  generation,
  onChange,
}: {
  generation?: number;
  onChange: (generation?: number | null) => void;
}) {
  return (
    <Flex flex="1" mr="medium" alignItems="center">
      <Box
        as="label"
        htmlFor="generation"
        color="white"
        mr="medium"
        style={{ whiteSpace: "nowrap" }}
      >
        Generation
      </Box>
      <GenerationSelect
        onChange={onChange}
        value={generation ?? null}
        id="generation"
      />
    </Flex>
  );
}
export default DashboardFilter;
