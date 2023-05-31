import React, { useEffect, useState } from "react";
import "./GeneralDetails.scss";
import { data } from "./data";
import { useParams } from "react-router-dom";

import { formatCurrency, formatPhoneNumber } from "../../../lib/utils/utils";
import { IAPIData } from "../../../helper/apiDataTypes";

interface Props {
  user: IAPIData | null;
}

const GeneralDetails: React.FC<Props> = ({ user }) => {
  const salaryRangeFrom = formatCurrency.format(
    Number(user?.education.monthlyIncome[0])
  );
  const salaryRangeTo = formatCurrency.format(
    Number(user?.education.monthlyIncome[1])
  );
  const loanRepayment = formatCurrency.format(
    Number(user?.education.loanRepayment)
  );
  const guarantorPhone = formatPhoneNumber(user?.guarantor.phoneNumber || "");

  return (
    <div className="wrapper">
      <div className="details">
        <div className="details_info">
          <h1>Personal Information</h1>
          <div className="details_info__data">
            <div>
              <h3>full Name</h3>
              <p>{`${user?.profile.firstName} ${user?.profile.lastName}`}</p>
            </div>
            <div>
              <h3>Phone Number</h3>
              <p>{formatPhoneNumber(user?.profile.phoneNumber || "")}</p>
            </div>
            <div>
              <h3>Email Address</h3>
              <p>{user?.email}</p>
            </div>
            <div>
              <h3>Bvn</h3>
              <p>{user?.profile.bvn}</p>
            </div>
            <div>
              <h3>Gender</h3>
              <p>{user?.profile.gender}</p>
            </div>

            <div>
              <h3>Marital status</h3>
              <p>Single</p>
            </div>
            <div>
              <h3>Children</h3>
              <p>None</p>
            </div>
            <div>
              <h3>Type of residence</h3>
              <p>Parent’s Apartment</p>
            </div>
          </div>
        </div>
        <div className="details_info">
          <h1>Education and Employment</h1>
          <div className="details_info__dataTwo">
            <div>
              <h3>level of education</h3>
              <p>{user?.education.level}</p>
            </div>
            <div>
              <h3>employment status</h3>
              <p>{user?.education.employmentStatus}</p>
            </div>
            <div>
              <h3>sector of employment</h3>
              <p>{user?.education.sector}</p>
            </div>
            <div>
              <h3>Duration of employment</h3>
              <p>{user?.education.duration}</p>
            </div>
            <div>
              <h3>office email</h3>
              <p>{user?.education.officeEmail}</p>
            </div>
            <div>
              <h3>Monthly income</h3>
              <p>{`${salaryRangeFrom} - ${salaryRangeTo}`}</p>
            </div>
            <div>
              <h3>loan repayment</h3>
              <p>{loanRepayment}</p>
            </div>
          </div>
        </div>
        <div className="details_info">
          <h1>Socials</h1>
          <div className="details_info__data">
            <div>
              <h3>Twitter</h3>
              <p>{user?.socials.twitter}</p>
            </div>
            <div>
              <h3>Facebook</h3>
              <p>{user?.socials.facebook}</p>
            </div>
            <div>
              <h3>Instagram</h3>
              <p>{user?.socials.instagram}</p>
            </div>
          </div>
        </div>
        <div className="details_info">
          <h1>Guarantor</h1>
          <div className="details_info__data">
            <div>
              <h3>full Name</h3>
              <p>{`${user?.guarantor.firstName} ${user?.guarantor.lastName}`}</p>
            </div>
            <div>
              <h3>Phone Number</h3>
              <p>{guarantorPhone}</p>
            </div>
            <div>
              <h3>Email Address</h3>
              <p>debby@gmail.com</p>
            </div>
            <div>
              <h3>Relationship</h3>
              <p>Sister</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralDetails;
