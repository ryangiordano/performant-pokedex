import React from "react";
import Flex from "../../../patterns/Flex";
import { PokedexStateContext } from "../../../state/PokedexStateContext";
import DashboardFilter from "./DashboardFilter";
import DashboardSearch from "./DashboardSearch";

function Dashboard() {
  const { state, dispatch } = React.useContext(PokedexStateContext);

  return (
    <Flex
      mb="large"
      bg="light_red"
      borderRadius="small"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      p="large"
      as="fieldset"
    >
      <DashboardSearch
        searchValue={state.searchValue}
        onChange={(value: string) =>
          dispatch({ type: "set-search-value", searchValue: value })
        }
      />
      <DashboardFilter
        generation={state.generation}
        onChange={(value?: number | null) =>
          dispatch({ type: "set-generation", generation: value ?? 1 })
        }
      />
    </Flex>
  );
}
export default Dashboard;
