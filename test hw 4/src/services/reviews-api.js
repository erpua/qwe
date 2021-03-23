import axios from 'axios';

const fetchShowReviews = movieId => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=056f969dddde43269e91f1c71bc5b3e9&language=en-US&page=1`,
    )
    .then(response => response.data.results);
};

export { fetchShowReviews };

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
