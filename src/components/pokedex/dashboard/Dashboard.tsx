import React from "react";
import Flex from "../../../patterns/Flex";
import DashboardFilter from "./DashboardFilter";
import DashboardSearch from "./DashboardSearch";

function Dashboard({}: {}) {
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
      <DashboardSearch />
      <DashboardFilter />
    </Flex>
  );
}
export default Dashboard;
