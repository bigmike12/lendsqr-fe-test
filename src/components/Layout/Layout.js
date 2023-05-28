import Navbar from "../Navbar/Navbar";
import React from "react";
import SideBar from "../SideBar/SideBar";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <div className="content_sidebar">
          <SideBar />
        </div>
        <div className="content_children">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
