/* eslint-disable eqeqeq */
/* eslint-disable require-jsdoc */
import React, { useState } from "react";
import "./Pagination.scss";
import * as CONSTANT from "../../helper/constants";
import Icon from "../../assets/Icons/icon";

/**
 *
 * @returns {React.Component} React components
 */
const Pagination = () => {
  const pages = [1, 2, 3, "...", 15, 16];

  const currentPageNumber = 1;

  return (
    <div className="pagination">
      <div className="pagination__left">
        <label htmlFor="page">Showing</label>
        <select id="page" name="page">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
        <span>out of 100</span>
      </div>

      <div className="pagination__right">
        <div className="pagination__pages">
          <div className="pagination__pages_arrowLeft">
            <Icon name="leftArrow" />
          </div>
          <div>
            <ul className="pagination__pages_box">
              {pages.map((page, index) => {
                return (
                  <li
                    className={
                      currentPageNumber == page
                        ? "pagination__pages_active"
                        : "pagination__pages_value"
                    }
                    key={index}
                  >
                    {page}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="pagination__pages_arrowRight">
            <Icon name="rightArrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
