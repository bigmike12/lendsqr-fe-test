import React from "react";
import "./SideBar.scss";
import { sideBarData } from "./SideBarData";
import { isNotEmptyArray } from "../../lib/utils/utils";
import Icon from "../../assets/Icons/icon";
import { useParams } from "react-router-dom";

interface Header {
  header: string;
}

interface Data {
  title: string;
  icon: string;
  link: string;
}

const SideBar = () => {
  const route: string = window.location.pathname;

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <div className="sidebar_item">
          <Icon name="briefcase" />
          <p className="sidebar_item__title">Switch Organization</p>
          <Icon name="arrowDown" />
        </div>
        <div className="sidebar_item">
          <Icon name="home" />
          <p className="sidebar_item__title">Dashboard</p>
        </div>
      </div>
      <div className="sidebar_menu">
        {isNotEmptyArray(sideBarData) &&
          sideBarData.map((data: any, index) => {
            return (
              <div key={index} className="sidebar_items">
                {data.header ? (
                  <div className="sidebar_header">{data.header}</div>
                ) : (
                  <div
                    className={
                      data.link === route || data.title === "Users"
                        ? "sidebar_item_active"
                        : "sidebar_item"
                    }
                  >
                    <Icon name={data.icon} />
                    <p className="sidebar_item__title">{data.title}</p>
                  </div>
                )}
              </div>
            );
          })}
      </div>
      <div className="sidebar_footer">
        <Icon name="logout" />
        <p className="sidebar_footer__title">Logout</p>
      </div>
      <p className="sidebar_footer-id">v1.2.0</p>
    </div>
  );
};

export default SideBar;
