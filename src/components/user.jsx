import React from "react";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const UsersList = (props) => {
    const {
        _id,
        name,
        profession,
        rate,
        completedMeetings,
        qualities,
        bookmark,
        bookMark1
    } = props;
    console.log("asdas", qualities);
    console.log("name", name);
    return (
        <tr key={_id}>
            <td>{name}</td>
            <td>
                {qualities.map((quality) => {
                    return (
                        <span
                            className={`badge bg-${quality.color} m-2`}
                            key={quality._id}
                        >
                            {quality.name}
                        </span>
                    );
                })}
            </td>
            <td>{profession.name}</td>
            <td>{rate}</td>
            <td>{completedMeetings}</td>
            <td>
                <BookMark id={_id} bookmark={bookmark} bookMark={bookMark1} />
            </td>

            <td>
                {
                    <span
                        className="badge rounded-pill bg-danger deletebtn "
                        onClick={() => props.onDelete(props)}
                    >
                        Delete
                    </span>
                }
            </td>
        </tr>
    );
};

UsersList.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    profession: PropTypes.object,
    completedMeetings: PropTypes.number,
    rate: PropTypes.number,
    qualities: PropTypes.array.isRequired,
    bookmark: PropTypes.bool,
    bookMark1: PropTypes.func,
    onDelete: PropTypes.func
};

export default UsersList;
