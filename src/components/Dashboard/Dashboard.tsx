import React from "react";
import Layout from "../Layout/Layout";
import DashboardCard from "../Atoms/DashboardCard/DashboardCard";
import "./Dashboard.scss";
import { dashboardCardData } from "./DashboardData";
import { isNotEmptyArray } from "../../lib/utils/utils";
import DashboardTable from "../Atoms/DashboardTable/DashboardTable";

const Dashboard = () => {
  return (
    <div className="dasboardPage">
      <div className="dasboardPage_card">
        {isNotEmptyArray(dashboardCardData) &&
          dashboardCardData.map((data) => {
            return (
              <DashboardCard
                title={data.title}
                icon={data.icon}
                count={data.count}
              />
            );
          })}
      </div>
      <div className="dasboardPage_table">
        <DashboardTable />
      </div>
    </div>
  );
};

export default Dashboard;
