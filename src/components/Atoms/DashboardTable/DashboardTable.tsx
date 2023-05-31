import React, { useState } from "react";
import "./DashboardTable.scss";
import {
  formatDateString,
  formatPhoneNumber,
  isNotEmptyArray,
} from "../../../lib/utils/utils";
import { tableHeader } from "../../Dashboard/DashboardData";
import Icon from "../../../assets/Icons/icon";
import { OptionsData } from "./data";
import useClickOutside from "../../../hooks/useClickOutside";
import { IAPIData } from "../../../helper/apiDataTypes";
import { useNavigate } from "react-router-dom";
import * as CONSTANT from "../../../helper/constants";

interface Props {
  tableBody: IAPIData[];
}

export const TableFilter = ({ node }: any) => {
  return (
    <div className="container" ref={node}>
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

export const TableOptions = ({ node, selectedUser }: any) => {
  let navigate = useNavigate();
  const handleSelectUser = (index: number) => {
    navigate(`/dashboard/${index}`);
  };
  return (
    <div className="options" ref={node}>
      {isNotEmptyArray(OptionsData) &&
        OptionsData.map((data) => (
          <div
            className="options_item"
            onClick={() => handleSelectUser(selectedUser)}
          >
            <Icon name={data.icon} />
            <p>{data.title}</p>
          </div>
        ))}
    </div>
  );
};

const DashboardTable: React.FC<Props> = ({ tableBody }) => {
  const [filter, setFilter] = useState<boolean>(false);
  const [option, setOption] = useState<string>("");
  const [optionToggle, setOptionToggle] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<string>();

  const handleFilter = () => {
    setFilter(!filter);
  };

  const handleOption = (index: string) => {
    setOption(index);
    setOptionToggle(!optionToggle);
    setSelectedUser(index);

    if (index) {
      fetch(`${CONSTANT.BASEURL}/${index}`)
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem(CONSTANT.USERDATA, JSON.stringify(data));
        });
    }
  };

  const nodeFilter = useClickOutside(() => {
    setFilter(false);
  });

  const nodeOption = useClickOutside(() => {
    setOptionToggle(false);
  });

  return (
    <div>
      {filter && <TableFilter node={nodeFilter} />}
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
            tableBody.map((data, index) => {
              const status = data.userName;
              return (
                <tr className="table__body_row" key={index}>
                  <td className="table__body_row-org">{data.orgName}</td>
                  <td className="table__body_row-name">{data.userName}</td>
                  <td className="table__body_row-email">{data.email}</td>
                  <td className="table__body_row-phone">
                    {formatPhoneNumber(data.phoneNumber)}
                  </td>
                  <td className="table__body_row-date">
                    {formatDateString(data.createdAt)}
                  </td>
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
                      {/* {data.userName} */}
                    </div>
                  </td>
                  <td
                    className="table__body_row-last"
                    onClick={() => handleOption(data.id)}
                  >
                    <Icon name="options" />
                  </td>
                  {optionToggle && option === data.id && (
                    <TableOptions
                      node={nodeOption}
                      selectedUser={selectedUser}
                    />
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
