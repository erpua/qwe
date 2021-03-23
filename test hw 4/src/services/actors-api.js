import axios from 'axios';

const fetchShowActors = movieId => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=056f969dddde43269e91f1c71bc5b3e9&language=en-US`,
    )
    .then(response => response.data.results);
};

export { fetchShowActors };

/*   const baseUrl = 'https://api.themoviedb.org/3/movie/';
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
  ); */
