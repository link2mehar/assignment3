import React from "react";
import MovieCard from "../../MovieCard/MovieCard";
import "./movie.scss";

const MovieList = ({ movies, filterText, loading }) => {
    // const rows = [];
    // movies?.forEach(movie => {
    //     if (movie.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1) { return; }
    //     rows.push()
    // });


    return <div className="movies__list">
        {movies?.map(movie => <MovieCard movie={movie} key={movie.title} />)}
    </div>
}
export default MovieList;