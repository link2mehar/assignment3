import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTopRated } from "../http/movies-service";

export const fetchTopRatedMoviesThunk = createAsyncThunk(
    'movies/stats',
    async (id) => {
        const response = await fetchTopRated();
        return response.data.results;
    }
)

const initialState = {
    moviesStats: [],
    loading: false,
};

const topRatedMoviesSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchTopRatedMoviesThunk.pending.type]: (state) => {
            state.loading = true;
        },
        [fetchTopRatedMoviesThunk.fulfilled]: (state, action) => {
            state.moviesStats = action.payload;
            state.loading = false;
        },
    }
})



export default topRatedMoviesSlice;