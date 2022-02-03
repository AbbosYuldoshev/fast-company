import React from "react";
import PropTypes from "prop-types";

const BookMark = (props) => {
    let bookMarkClass = "bi bi-bookmark";
    bookMarkClass += props.bookmark ? "-fill" : " ";
    return (
        <button
            type="button"
            className={bookMarkClass}
            onClick={() => props.bookMark(props.id)}
        ></button>
    );
};
BookMark.propTypes = {
    bookmark: PropTypes.bool,
    bookMark: PropTypes.func,
    id: PropTypes.string
};

export default BookMark;
