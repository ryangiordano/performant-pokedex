import React from "react";
import Flex from "../../../patterns/Flex";
import DashboardFilter from "./DashboardFilter";
import DashboardSearch from "./DashboardSearch";

function Dashboard({}: {}) {
  return (
    <Flex mb="large" bg="light_red" borderRadius="small" width="100%" p="large">
      <DashboardFilter />
      <DashboardSearch></DashboardSearch>
    </Flex>
  );
}
export default Dashboard;
