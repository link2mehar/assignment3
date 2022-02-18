import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMovies, fetchMovieDetail, fetchSimilar } from "../http/movies-service";

export const fetchMoviesThunk = createAsyncThunk(
    'movies/list',
    async () => {
        const response = await fetchMovies();
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

const initialState = {
    movies: [],
    movie: {},
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
    }
})



export default moviesListSlice;