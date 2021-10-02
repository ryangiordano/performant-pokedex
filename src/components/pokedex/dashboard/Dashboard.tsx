import React from "react";
import DashboardFilter from "./DashboardFilter";
import DashboardSearch from "./DashboardSearch";

function Dashboard({}: {}) {
  return (
    <>
      <DashboardFilter />
      <DashboardSearch></DashboardSearch>
    </>
  );
}
export default Dashboard;
