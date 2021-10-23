import React from "react";
import Box from "../../../patterns/Box";
import Flex from "../../../patterns/Flex";
import { PokedexStateContext } from "../../../state/PokedexStateContext";
import GenerationSelect from "./GenerationSelect";
import TypeSelect from "./TypeSelect";

function DashboardFilter({}: {}) {
  const { state, dispatch } = React.useContext(PokedexStateContext);

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
          onChange={(type) =>
            dispatch({ type: "set-type-1", filterType1: type || undefined })
          }
          value={state.filterType1 ?? ""}
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
          onChange={(type) =>
            dispatch({ type: "set-type-2", filterType2: type || undefined })
          }
          value={state.filterType2 ?? ""}
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
    </>
  );
}
export default DashboardFilter;
