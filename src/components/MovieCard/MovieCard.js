import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.scss";
const baseUrl = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie }) => {
    return <div className="movie__card">
        <Link to={`/detail/${movie?.id}`} >
            <div className="movie__poster">
                {movie && <img src={`${baseUrl}${movie?.poster_path}`} alt={movie?.title} />}
            </div>

        </Link>
    </div >

}

export default MovieCard;