import "./Navbar.scss";
import { Input } from "antd";
import Icon from "../../assets/Icons/icon";
import Avatar from "../../assets/images/avatar.png";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { AlignLeftOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Search } = Input;

const Navbar = ({handleToggle}:any) => {
  // const navigate = useNavigate();
  const onSearch = (value: string) => value;

  return (
    <>
      <div className="mobile">
        <AlignLeftOutlined onClick={handleToggle} />
        <div className="mobile__logo">
          <Icon name="logo" />
        </div>
      </div>

      <div className="navbar">
        <div className="navbar_left">
          <Search
            className="navbar_left__input"
            placeholder="Search for anything"
            onSearch={onSearch}
            enterButton
          />
        </div>
        <div className="navbar_right">
          <p>Docs</p>
          <div className="navbar_right__notification">
            <Icon name="bell" />
          </div>
          <div className="navbar_right__avatar">
            <img src={Avatar} alt="avatar" />
          </div>
          <div className="navbar_right__info">
            <h3>Adedeji</h3>
            <Icon name="navDown" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
