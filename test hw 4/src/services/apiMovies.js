/* const fetchShowPopularMovies = page => {
  const baseUrl = 'https://api.themoviedb.org/3/trending/all/day';
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const requestParameter = `?api_key=056f969dddde43269e91f1c71bc5b3e9&page=${page}`;
  return fetch(baseUrl + requestParameter, { options })
    .then(response => response.json())
    .then(data => data.results);
};
 */
/* const fetchDetailsMovie = movieId => {
  const baseUrl = 'https://api.themoviedb.org/3/movie/';
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const requestParameter = `${movieId}?api_key=056f969dddde43269e91f1c71bc5b3e9&language=en-US`;
  return fetch(baseUrl + requestParameter, { options }).then(response =>
    response.json(),
  );
}; */

/* const fetchShowActors = movieId => {
  const baseUrl = 'https://api.themoviedb.org/3/movie/';
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const requestParameter = `${movieId}/credits?api_key=056f969dddde43269e91f1c71bc5b3e9&language=en-US`;
  return fetch(baseUrl + requestParameter, { options }).then(response =>
    response.json(),
  );
}; */

/* const fetchShowReviews = movieId => {
  const baseUrl = 'https://api.themoviedb.org/3/movie/';
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const requestParameter = `${movieId}/reviews?api_key=056f969dddde43269e91f1c71bc5b3e9&language=en-US&page=1`;
  return fetch(baseUrl + requestParameter, { options }).then(response =>
    response.json(),
  );
}; */
/* 
const fetchSearchMovies = query => {
  const baseUrl = 'https://api.themoviedb.org/3/search/movie';
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const requestParameter = `?api_key=056f969dddde43269e91f1c71bc5b3e9&language=en-US&page=1&include_adult=false&query=${query}`;
  return fetch(baseUrl + requestParameter, { options })
    .then(response => response.json())
    .then(data => data.results);
}; */
/* 
export {
  fetchShowPopularMovies,
  fetchDetailsMovie,
  fetchShowActors,
  fetchShowReviews,
  fetchSearchMovies,
};
 */
