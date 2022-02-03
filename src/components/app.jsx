import React, { useState } from "react";
import API from "../API/index.js";
import UsersList from "./user";
import searchStatus from "./searchStatus.jsx";
import Pogination from "./pogination.jsx";
import { poginate } from "../unit/paginate.js";

const Users = () => {
    const [users, setUsers] = useState(API.users.fetchAll());
    const coundUsers = users.length;
    const PageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const handelChange = (pageIndex) => {
        console.log("Page: ", pageIndex);
        setCurrentPage(pageIndex);
    };

    const userCrop = poginate(users, currentPage, PageSize);

    const DeleteUsers = (id) => {
        const table = document.querySelector(".table");
        if (coundUsers > 1) {
            setUsers((prevState) => prevState.filter((users) => users !== id));
        } else {
            setUsers((prevState) => prevState.filter((users) => users !== id));
            table.remove();
        }
    };

    const handleFavourite = (id) => {
        const newUsers = users.map((user) => {
            if (user._id === id) {
                if (user.bookmark) {
                    return (user.bookmark = false);
                } else {
                    return (user.bookmark = true);
                }
            }
            return user;
        });
        setUsers(newUsers);
    };

    const theadList = () => {
        return (
            <tr className="tr">
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился,раз</th>
                <th scope="col">Оценка</th>
                <th scope="col">Избранное</th>
            </tr>
        );
    };

    return (
        <>
            <h1>{searchStatus(users.length)}</h1>

            <table className="table">
                <thead className="thead">{theadList()}</thead>

                <tbody>
                    {userCrop.map((user) => (
                        <UsersList
                            key={user._id}
                            {...user}
                            onDelete={() => DeleteUsers(user)}
                            bookMark1={handleFavourite}
                        />
                    ))}
                </tbody>
            </table>
            <Pogination
                itemUsers={coundUsers}
                PageSize={PageSize}
                currentPage={currentPage}
                onPageChange={handelChange}
            />
        </>
    );
};

export default Users;
