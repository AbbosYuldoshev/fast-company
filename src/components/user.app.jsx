import React, { useState } from "react";
import API from "../API/index.js";

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const setNumerAllUsers = () => {
    return users.length > 4
      ? `${users.length} Человек тусанет с тобой сегодня`
      : users.length >= 2 && users.length <= 4
      ? `${users.length} Человека тусанет с тобой сегодня`
      : users.length > 0 && users.length <= 1
      ? `${users.length} Человек тусанет с тобой сегодня`
      : "Никто с тобой не тусанет";
  };

  const setNumbersOfUserClass = () => {
    return users.length >= 1 ? `primary` : `danger`;
  };

  const DeleteUsers = (id) => {
    const table = document.querySelector(".table");
    if (users.length >1){
      setUsers((prevState) => prevState.filter((users) => users !== id));
    }
    else{
      setUsers((prevState) => prevState.filter((users) => users !== id));
      table.remove()
    }
  };

  const setUserTd = () => {
    return users.map((user) => (
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>
          {user.qualities.map((quality) => {
            return (
              <span className={`badge bg-${quality.color} m-2`}>
                {quality.name}
              </span>
            );
          })}
        </td>
        <td>{user.profession.name}</td>
        <td>{user.rate}</td>
        <td>{user.completedMeetings}</td>
        <td>
          {
            <span
              className="badge rounded-pill bg-danger deletebtn "
              onClick={() => DeleteUsers(user)}
            >
              Delete
            </span>
          }
        </td>
      </tr>
    ));
  };



  return (
    <>
      <h1 className={`badge bg-${setNumbersOfUserClass()}`}>
        {setNumerAllUsers()}
      </h1>
  
      <table class="table">
        <thead className="thead">
          <tr className="tr">
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился,раз</th>
            <th scope="col">Оценка</th>
          </tr>
        </thead>
        <tbody>{setUserTd()}</tbody>
      </table>
    </>
  );
};

export default Users;
