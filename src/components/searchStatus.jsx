import React from "react";

const searchStatus = (length) => {
    const setNumerAllUsers = () => {
        return length > 4
            ? `${length} Человек тусанет с тобой сегодня`
            : length >= 2 && length <= 4 ? `${length} Человека тусанет с тобой сегодня` : length > 0 && length <= 1 ? `${length} Человек тусанет с тобой сегодня` : "Никто с тобой не тусанет";
    };

    const setNumbersOfUserClass = () => {
        return length >= 1 ? `primary` : `danger`;
    };

    return (
        <h1 className={`badge bg-${setNumbersOfUserClass()}`}>
            {setNumerAllUsers()}
        </h1>
    );
};

export default searchStatus;
