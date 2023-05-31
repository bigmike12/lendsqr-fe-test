import React, { useState } from "react";
import "./Login.scss";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";
import Icon from "../../assets/Icons/icon";
import LoginImage from "../../assets/images/login.png";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  return (
    <div className="login">
      <div className="login_left">
        <div className="login_logo">
          <Icon name="logo" />
        </div>
        <img src={LoginImage} alt="login" className="login_left__image"/>
      </div>
      
      <div className="login_right">
        <h2>Welcome!</h2>
        <p>Enter details to login.</p>
        <div className="login_right__form">
          <Input placeholder="Email" className="login_right__form-input" />
          <Input.Password
            placeholder="Password"
            className="login_right__form-input"
            iconRender={(visible) =>
              visible ? <span>HIDE</span> : <span>SHOW</span>
            }
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
          />
          <p>FORGOT PASSWORD?</p>
          <Link to="/dashboard">
            <Button className="login_right__form-button">LOG IN</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
