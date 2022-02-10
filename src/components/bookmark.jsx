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
    bookmark: PropTypes.bool.isRequired,
    bookMark: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};

export default BookMark;
