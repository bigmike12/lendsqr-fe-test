import "./Navbar.scss";
import { Input } from "antd";
import Icon from "../../assets/Icons/icon";
import Avatar from "../../assets/images/avatar.png";
import { useNavigate } from "react-router-dom";

const { Search } = Input;

const Navbar = () => {
  const navigate = useNavigate();
  const onSearch = (value: string) => console.log(value);

  return (
    <div className="navbar">
      <div className="navbar_left">
        <div
          className="navbar_left__logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <Icon name="logo" />
        </div>
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
  );
};

export default Navbar;
