import React, { useEffect, useState } from "react";
import DashboardCard from "../Atoms/DashboardCard/DashboardCard";
import "./Dashboard.scss";
import { dashboardCardData } from "./DashboardData";
import { isNotEmptyArray } from "../../lib/utils/utils";
import DashboardTable from "../Atoms/DashboardTable/DashboardTable";
import { IAPIData } from "../../helper/apiDataTypes";
import * as CONSTANT from "../../helper/constants";
import Pagination from "../Pagination/Pagination";

const Dashboard = () => {
  const [apiData, setApiData] = useState<IAPIData[]>([]);
  useEffect(() => {
    fetch(CONSTANT.BASEURL)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
        localStorage.setItem(CONSTANT.APIDATA, JSON.stringify(data));
      });
  }, []);

  return (
    <div className="dasboardPage">
      <h2>Users</h2>
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
        <DashboardTable tableBody={apiData} />
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default Dashboard;
