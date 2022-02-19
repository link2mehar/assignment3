import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieThunk, fetchSimilarMoviesThunk } from "../../redux-slices/movieSlice";

import MovieCard from "../MovieCard/MovieCard";
import "./details.scss";

const DetailComponent = () => {
    // could be used env :P
    const baseUrl = "https://image.tmdb.org/t/p/w500"

    const { id } = useParams();
    const { movie, movieLoading, similarMovies } = useSelector(state => state.movies);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMovieThunk(id));
        dispatch(fetchSimilarMoviesThunk(id));
    }, [dispatch, id])

    return <div className="detail__container">
        {movieLoading ? 'Loading...' : <><div className="movie__page">
            <div className="movie__poster">
                {movie && <img src={`${baseUrl}${movie?.poster_path}`} alt={movie?.title} />}
            </div>
            <div className="movie__details">
                <h1>{movie?.title}</h1>
                <p className="headings">Summary:</p>
                <p>{movie?.overview}</p>
                <p className="headings">Release date:</p>
                <p>{movie?.release_date}</p>
                <p className="headings">Language:</p>
                <p>{movie?.original_language}</p>
                <p className="headings">Run Time</p>
                <p>{movie?.runtime}</p>
                <p className="headings">Avergae Rating:</p>
                <p>{movie?.vote_average}</p>
            </div>
        </div>

            <div className="smilar__movies__container">
                <h1>Similar Movies</h1>
                <div className="similar__movies">
                    {similarMovies?.slice(0, 5).map(movie => <MovieCard key={movie?.title} movie={movie} />)}
                </div>
            </div></>}



    </div>

}
export default DetailComponent;