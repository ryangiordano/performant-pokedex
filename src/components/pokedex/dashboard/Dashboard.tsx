import React from "react";
import Flex from "../../../patterns/Flex";
import { PokedexStateContext } from "../../../state/PokedexStateContext";
import DashboardFilter from "./DashboardFilter";
import DashboardSearch from "./DashboardSearch";

function Dashboard() {
  const { state, dispatch } = React.useContext(PokedexStateContext);

  const handleChangeSearchValue = React.useCallback(
    (value: string) =>
      dispatch({ type: "set-search-value", searchValue: value }),
    [dispatch]
  );

  const handleChangeGeneration = React.useCallback(
    (value?: number | null) =>
      dispatch({ type: "set-generation", generation: value ?? 1 }),
    [dispatch]
  );

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
        onChange={handleChangeSearchValue}
      />
      <DashboardFilter
        generation={state.generation}
        onChange={handleChangeGeneration}
      />
    </Flex>
  );
}
export default Dashboard;
