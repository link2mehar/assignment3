import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchMoviesThunk, fetchSearchedMoviesThunk, fetchGenreMovieListThunk, fetchMoviesByGenreThunk } from "../../redux-slices/movieSlice";
import MovieList from './MoviesList';
import SearchBar from './SearchBar';
import Filters from './Filters';
import "./home.scss";



const HomeComponent = () => {
  const [query, setQuery] = useState('');
  const [genreId, setGenereId] = useState();
  const { movies, loading, genres } = useSelector(state => state?.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    genreId ? dispatch(fetchMoviesByGenreThunk(genreId)) : dispatch(fetchMoviesThunk());
    dispatch(fetchGenreMovieListThunk());
  }, [dispatch, genreId])



  const debounce = () => {
    setTimeout(() => dispatch(fetchSearchedMoviesThunk(query)), 1000);
  }

  useEffect(() => {
    if (query) {
      debounce();
    }
  }, [query])


  return (
    <main>
      <div className='search__filters'>
        <Filters genres={genres} genreId={genreId} setGenereId={setGenereId} />
        <SearchBar query={query} setQuery={setQuery} />
      </div>
      <MovieList loading={loading} filterText={query} movies={movies} />
    </main>
  );
}

export default HomeComponent;
