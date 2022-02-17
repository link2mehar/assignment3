import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "../http/movies-service";

export const fetchMoviesThunk = createAsyncThunk(
    'movies/list',
    async () => {
        const response = await fetchMovies();
        return response.data.results;
    }
)

const initialState = {
    movies: [],
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
    }
})



export default moviesListSlice;