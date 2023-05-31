import Navbar from "../Navbar/Navbar";
import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import "./Layout.scss";
import useClickOutside from "../../hooks/useClickOutside";

const Layout = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(false);
  };

  const nodeToggle = useClickOutside(() => {
    setToggle(true);
  });

  return (
    <div className="content">
      <div className={toggle ? "content_sidebar" : "content_sidebar2"} ref={nodeToggle}>
        <SideBar />
      </div>
      <div>
        <Navbar handleToggle={handleToggle} />
        <div className="content_children">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
