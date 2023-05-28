import React, { useState } from "react";
import "./DashboardTable.scss";
import { isNotEmptyArray } from "../../../lib/utils/utils";
import { tableBody, tableHeader } from "../../Dashboard/DashboardData";
import Icon from "../../../assets/Icons/icon";

export const TableFilter = () => {
  return (
    <div className="container">
      <div className="filter">
        <div className="filter_item">
          <label htmlFor="lendsqr">Organization</label>
          <select name="lendsqr" id="lendsqr">
            <option value="" disabled selected hidden>
              Select
            </option>
          </select>
        </div>
        <div className="filter_item">
          <label htmlFor="user">Username</label>
          <input placeholder="User" id="user" />
        </div>
        <div className="filter_item">
          <label htmlFor="Email">Email</label>
          <input placeholder="Email" id="Email" />
        </div>
        <div className="filter_item">
          <label htmlFor="dateo">Date</label>
          <input type="date" name="date" id="date" placeholder="Email" />
        </div>
        <div className="filter_item">
          <label htmlFor="Phone Number">Phone Number</label>
          <input placeholder="Phone Number" id="Phone Number" />
        </div>
        <div className="filter_item">
          <label htmlFor="lendsqr">Status</label>
          <select name="lendsqr" id="lendsqr">
            <option value="" disabled selected hidden>
              Select
            </option>
          </select>
        </div>
        <div className="filter_buttons">
          <button className="filter_buttons-reset">Reset</button>
          <button className="filter_buttons-filter">Filter</button>
        </div>
      </div>
    </div>
  );
};

const DashboardTable = () => {
  const [filter, setFilter] = useState<boolean>(false);

  const handleFilter = () => {
    setFilter(!filter);
  };

  return (
    <div>
      {filter && <TableFilter />}
      <table className="table">
        <thead className="table__header">
          <tr className="table__header_row">
            {isNotEmptyArray(tableHeader) &&
              tableHeader.map((data) => (
                <td key={data.num}>
                  {data.header ? (
                    <div
                      className="table__header_row-item"
                      onClick={handleFilter}
                    >
                      {data.header} <Icon name="filter" />
                    </div>
                  ) : (
                    <div className="table__header_row-item">{data.header}</div>
                  )}
                </td>
              ))}
          </tr>
        </thead>
        <tbody className="table__body">
          {isNotEmptyArray(tableBody) &&
            tableBody.map((data) => {
              const status = data.status;
              return (
                <tr className="table__body_row">
                  <td>{data.organization}</td>
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.date}</td>
                  <td>
                    <div
                      className={
                        status === "Inactive"
                          ? "table__body_row-inactive"
                          : status === "Pending"
                          ? "table__body_row-pending"
                          : status === "Blacklisted"
                          ? "table__body_row-blacklisted"
                          : "table__body_row-active"
                      }
                    >
                      {data.status}
                    </div>
                  </td>
                  <td className="table__body_row-last">
                    <Icon name="options" />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
