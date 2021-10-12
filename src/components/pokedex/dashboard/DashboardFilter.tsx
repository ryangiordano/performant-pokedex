import React from "react";
import Box from "../../../patterns/Box";
import Flex from "../../../patterns/Flex";
import GenerationSelect from "./GenerationSelect";
import TypeSelect from "./TypeSelect";

function DashboardFilter({}: {}) {
  const [type1, setType1] = React.useState<TypeValue | "">("");
  const [type2, setType2] = React.useState<TypeValue | "">("");
  const [generation, setGeneration] = React.useState<number | null>(null);
  return (
    <>
      <Flex flex="1" mr="medium" alignItems="center">
        <Box
          as="label"
          htmlFor="type-1"
          color="white"
          mr="medium"
          style={{ whiteSpace: "nowrap" }}
        >
          Type 1
        </Box>
        <TypeSelect
          onChange={(type) => setType1(type)}
          value={type1 ?? ""}
          placeholder="Type 1"
          id="type-1"
        />
      </Flex>
      <Flex flex="1" mr="medium" alignItems="center">
        <Box
          as="label"
          htmlFor="type-2"
          color="white"
          mr="medium"
          style={{ whiteSpace: "nowrap" }}
        >
          Type 2
        </Box>
        <TypeSelect
          onChange={(type) => setType2(type)}
          value={type2 ?? ""}
          placeholder="Type 2"
          id="type-2"
        />
      </Flex>
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
          onChange={(generation) => setGeneration(generation)}
          value={generation}
          id="generation"
        />
      </Flex>
    </>
  );
}
export default DashboardFilter;
