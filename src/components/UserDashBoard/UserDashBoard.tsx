import React, { useEffect, useState } from "react";
import GeneralDetails from "../Atoms/GeneralDetails/GeneralDetails";
import "./UserDashBoard.scss";
import Icon from "../../assets/Icons/icon";
import { useNavigate } from "react-router-dom";
import { navData } from "./UserDashBoardData";
import { formatCurrency, isNotEmptyArray } from "../../lib/utils/utils";
import * as CONSTANT from "../../helper/constants";
import { IAPIData } from "../../helper/apiDataTypes";

const UserDashBoard = () => {
  const [selectedNav, setSelectedNav] = useState<string>("1");
  const [user, setUser] = useState<IAPIData>();
  const navigate = useNavigate();

  useEffect(() => {
    const data: string | null = localStorage.getItem(CONSTANT.USERDATA);
    const parseData: IAPIData = data ? JSON.parse(data) : null;

    setUser(parseData);
  }, []);

  const accountBalance = formatCurrency.format(Number(user?.accountBalance));

  return (
    <div className="detail">
      <div className="details_top">
        <div
          className="details_top__nav"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          <Icon name="backArrow" />
          <p>Back to Users</p>
        </div>
        <div className="details_top__navBottom">
          <h1>User Details</h1>
          <div className="details_top__navBottom_buttons">
            <button className="details_top__navBottom_buttons-blacklist">
              Blacklist User
            </button>
            <button className="details_top__navBottom_buttons-activate">
              Activate User
            </button>
          </div>
        </div>
      </div>

      <div className="details_controls">
        <div className="details_controls_flex">
          <div className="details_controls__name">
            <div className="details_controls__name-avatar">
              <Icon name="defaultAvatar" />
            </div>
            <div>
              <h1>{`${user?.profile.firstName} ${user?.profile.lastName}`}</h1>
              <p>{user?.accountNumber}</p>
            </div>
          </div>

          <div className="details_controls__tier">
            <p>User’s Tier</p>
            <div>
              <Icon name="starFill" />
              <Icon name="star" />
              <Icon name="star" />
            </div>
          </div>

          <div className="details_controls__bank">
            <h1>{accountBalance}</h1>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>

        <div className="details_controls__nav">
          {isNotEmptyArray(navData) &&
            navData.map((data) => (
              <p
                key={data.id}
                className={
                  data.id === selectedNav ? "details_controls__nav-active" : ""
                }
              >
                {data.title}
              </p>
            ))}
        </div>
      </div>

      <div className="general">
        <GeneralDetails user={user || null} />
      </div>
    </div>
  );
};

export default UserDashBoard;
