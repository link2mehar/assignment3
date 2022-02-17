import React from "react";
import MovieCard from "../../MovieCard/MovieCard";
import "./movie.scss";

const MovieList = ({ movies, filterText, loading }) => {
    const rows = [];
    console.log(">>list", movies);

    movies?.forEach(movie => {
        if (movie.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1) { return; }
        rows.push(<MovieCard movie={movie} key={movie.title} />)
    });


    return <div className="movies__list">
        {rows}
    </div>
}
export default MovieList;