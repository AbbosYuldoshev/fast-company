import React from "react";
import BookMark from "./bookmark";
import PropTypes from "prop-types";
import Qualitie from "./quality";

const UsersList = (props) => {
    console.log("asdas", props.qualities);
    console.log("name", props.name);
    return (
        <tr key={props._id}>
            <td>{props.name}</td>
            <td>
                {props.qualities.map((qualitie) => (
                    <Qualitie {...qualitie} key={qualitie._id} />
                ))}
            </td>
            <td>{props.profession.name}</td>
            <td>{props.rate}</td>
            <td>{props.completedMeetings}</td>
            <td>
                <BookMark
                    id={props._id}
                    bookmark={props.bookmark}
                    bookMark={props.bookMark1}
                />
            </td>

            <td>
                {
                    <span
                        className="badge rounded-pill bg-danger deletebtn "
                        onClick={() => props.onDelete(props._id)}
                    >
                        Delete
                    </span>
                }
            </td>
        </tr>
    );
};

UsersList.propTypes = {
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    qualities: PropTypes.array.isRequired,
    rate: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
    bookmark: PropTypes.bool.isRequired,
    bookMark1: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default UsersList;
