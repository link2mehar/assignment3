import http from "./index";

export const fetchMovies = () => {
  return http.get('/discover/movie', {
    params: {
      api_key: '5dcf7f28a88be0edc01bbbde06f024ab',
      primary_release_year: 2021,
      sort_by: "popularity.desc"
    }
  })
}

export const fetchMovieDetail = (id) => {
  return http.get(`/movie/${id}`, { params: { api_key: '5dcf7f28a88be0edc01bbbde06f024ab', id } })
}
export const fetchSimilar = (id) => {
  return http.get(`movie/${id}/similar`, { params: { api_key: '5dcf7f28a88be0edc01bbbde06f024ab' } })
}
export const searchMovie = () => {
  const query = "Jurassic Park";
  return http.get(`/search/movie`, { params: { query, api_key: '5dcf7f28a88be0edc01bbbde06f024ab' } });
}


export const fetchTopRated = () => {
  return http.get('/movie/top_rated', { params: { api_key: '5dcf7f28a88be0edc01bbbde06f024ab' } })
}