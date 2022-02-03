import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pogination = ({ itemUsers, PageSize, onPageChange, currentPage }) => {
    const pageCount = Math.ceil(itemUsers / PageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        className={
                            "page-item" +
                            (page === currentPage ? " active" : "")
                        }
                        key={"page_" + page}
                    >
                        <a
                            className="page-link"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pogination.propTypes = {
    itemUsers: PropTypes.number.isRequired,
    PageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pogination;
