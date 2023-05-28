import React from "react";
import "./DashboardCard.scss";
import Icon from "../../../assets/Icons/icon";

interface Props {
  icon: string;
  title: string;
  count: string;
}

const DashboardCard = ({ icon, title, count }: Props) => {
  return (
    <div className="card">
      <div
        className={
          title === "USERS"
            ? "card_icon_users"
            : title === "ACTIVE USERS"
            ? "card_icon_active"
            : title === "USERS WITH LOANS"
            ? "card_icon_loans"
            : "card_icon_savings"
        }
      >
        <Icon name={icon} />
      </div>
      <p>{title}</p>
      <h3>{count}</h3>
    </div>
  );
};

export default DashboardCard;
