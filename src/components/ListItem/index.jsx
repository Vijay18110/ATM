import React from "react";
const ListItem = ({ name, onclick }) => {
    return <li onClick={onclick}>{name}</li>
};

export default ListItem;
