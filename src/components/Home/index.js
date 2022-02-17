import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchMoviesThunk } from "../../redux-slices/movieSlice";
import MovieList from './MoviesList';
import SearchBar from './SearchBar';
import "./home.scss";



const HomeComponent = () => {

  const [query, setQuery] = useState('');
  const { movies, loading } = useSelector(state => state?.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesThunk());
  }, [dispatch])


  return (
    <main>
      <SearchBar query={query} setQuery={setQuery} />
      <MovieList loading={loading} filterText={query} movies={movies} />
    </main>
  );
}

export default HomeComponent;
