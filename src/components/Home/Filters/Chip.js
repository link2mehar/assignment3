import React from "react";
import "./filters.scss";

const Chip = ({ label, id, setGenereId, genreId }) => {

    const onClick = (id) => {
        setGenereId(id)
    }

    return <div onClick={() => onClick(id)} className={`chip ${id === genreId ? 'chip__active' : ''}`} >
        <div>{label}</div>
    </div>
}

export default Chip;