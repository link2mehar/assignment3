import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMovies, fetchMovieDetail, fetchSimilar, searchMovie, fetchGenreMovieList, fetchMoviesByGenre } from "../http/movies-service";

export const fetchMoviesThunk = createAsyncThunk(
    'movies/list',
    async () => {
        const response = await fetchMovies();
        return response.data.results;
    }
)

export const fetchMoviesByGenreThunk = createAsyncThunk(
    'movies/gen',
    async (id) => {
        const response = await fetchMoviesByGenre(id);
        return response.data.results;
    }
)

export const fetchMovieThunk = createAsyncThunk(
    'movie/detail',
    async (id) => {
        const response = await fetchMovieDetail(id);
        return response.data;
    }
)

export const fetchSimilarMoviesThunk = createAsyncThunk(
    'movies/similar',
    async (id) => {
        const response = await fetchSimilar(id);
        return response.data.results;
    }
)

export const fetchSearchedMoviesThunk = createAsyncThunk(
    'movies/search',
    async (id) => {
        const response = await searchMovie(id);
        return response.data.results;
    }
)

export const fetchGenreMovieListThunk = createAsyncThunk(
    'movies/genre',
    async (id) => {
        const response = await fetchGenreMovieList(id);
        return response.data.genres;
    }
)

const initialState = {
    movies: [],
    movie: {},
    genres: [],
    similarMovies: [],
    similarLoading: false,
    movieLoading: false,
    loading: false,
};

const moviesListSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchMoviesThunk.pending.type]: (state) => {
            state.loading = true;
        },
        [fetchMoviesThunk.fulfilled]: (state, action) => {
            state.movies = action.payload;
            state.loading = false;
        },
        [fetchMovieThunk.pending.type]: (state) => {
            state.movieLoading = true;
        },
        [fetchMovieThunk.fulfilled]: (state, action) => {
            state.movie = action.payload;
            state.movieLoading = false;
        },
        [fetchSimilarMoviesThunk.pending.type]: (state) => {
            state.similarLoading = true;
        },
        [fetchSimilarMoviesThunk.fulfilled]: (state, action) => {
            state.similarMovies = action.payload;
            state.similarLoading = false;
        },
        [fetchSearchedMoviesThunk.pending.type]: (state) => {
            state.loading = true;
        },
        [fetchSearchedMoviesThunk.fulfilled]: (state, action) => {
            state.movies = action.payload;
            state.loading = false;
        },
        [fetchGenreMovieListThunk.pending.type]: (state) => {
            state.loading = true;
        },
        [fetchGenreMovieListThunk.fulfilled]: (state, action) => {
            state.genres = action.payload;
            state.loading = false;
        },
        [fetchMoviesByGenreThunk.pending.type]: (state) => {
            state.loading = true;
        },
        [fetchMoviesByGenreThunk.fulfilled]: (state, action) => {
            state.movies = action.payload;
            state.loading = false;
        },
    }
})



export default moviesListSlice;