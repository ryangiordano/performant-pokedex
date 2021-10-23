import React from "react";
import Box from "../../../patterns/Box";
import Flex from "../../../patterns/Flex";
import { PokedexStateContext } from "../../../state/PokedexStateContext";
import GenerationSelect from "./GenerationSelect";
import TypeSelect from "./TypeSelect";

function DashboardFilter({}: {}) {
  const { state, dispatch } = React.useContext(PokedexStateContext);

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
        onChange={(generation) =>
          dispatch({
            type: "set-generation",
            generation: generation ?? undefined,
          })
        }
        value={state.generation ?? null}
        id="generation"
      />
    </Flex>
  );
}
export default DashboardFilter;
