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
  // const [numberOfPage, setNumberOfPage] = useState(1);
  // const [numberOfItem, setNumberOfItem] = useState(10);

  // const dispatch = useDispatch<AppDispatch>();
  // const router = useRouter();

  // const dateFrom: any =
  //     localStorage.getItem(CONSTANTS.SELECT_DATE_FROM) || "";
  // const dateTo: any = localStorage.getItem(CONSTANT.SELECT_DATE_TO) || "";
  // const currentPageNumber: any =
  //     localStorage.getItem(CONSTANTS.PAGE) || numberOfPage;
  // const numberOfItems = localStorage.getItem(CONSTANT.NUMBER_OF_ITEMS) || 10;

  // const pages = Array.from(
  //     { length: pageNumber },
  //     (value, index) => index + 1
  // );
  // const lastPage = pages[pages.length - 1];

  // const handlesSetPage = (page: any) => {
  //     setNumberOfPage(page);
  //     if (page === 1) {
  //         localStorage.removeItem(CONSTANTS.PAGE);
  //     } else {
  //         localStorage.setItem(CONSTANTS.PAGE, page);
  //     }

  //     router.push({
  //         pathname: "/",
  //         query: { page: page },
  //     });

  //     dispatch(getTableData({ before: dateFrom, after: dateTo }));
  // };

  // const handleSetNumberOfItems = (e) => {
  //     setNumberOfItem(e.target.value);
  //     localStorage.setItem(CONSTANTS.NUMBER_OF_ITEMS, e.target.value);
  //     if (numberOfPage !== 1 && numberOfPage === lastPage ) {
  //         return;
  //     }
  //     dispatch(getTableData({ before: dateFrom, after: dateTo }));
  // };

  const pages = [1, 2, 3, "...", 15, 16];

  const currentPageNumber = 1;

  return (
    <div className="pagination">
      <div className="pagination__left">
        <label htmlFor="page">Showing</label>
        <select
          id="page"
          name="page"
          // onChange={(e) => handleSetNumberOfItems(e)}
          // value={numberOfItems || numberOfItem}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
        <span>out of 100</span>
      </div>

      <div className="pagination__right">
        {/* <p>{`Page ${numberOfPage} of ${pageNumber}`}</p> */}
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
                    // onClick={() => handlesSetPage(page)}
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
