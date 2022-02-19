import React from "react";
import Chip from "./Chip";

const Filters = ({ genres, genreId, setGenereId }) => {
    return <div className="filters">
        {genres?.slice(0, 8).map(c => <Chip setGenereId={setGenereId} genreId={genreId} key={c.name} label={c.name} id={c.id} />)}
    </div>
}

export default Filters;