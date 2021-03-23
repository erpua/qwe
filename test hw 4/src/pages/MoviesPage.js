import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { fetchSearchMovies } from '../services/search-api';
import SearchForm from '../components/SearchForm';
import Spinner from '../components/Loader';
import Button from '../components/Button';

import styles from './css/homePage.module.css';
import routes from '../routes';

class MoviesPage extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  };

  state = { movies: [], error: null, loading: false };

  componentDidMount() {
    const currentQuery = new URLSearchParams(this.props.location.search).get(
      'query',
    );

    if (!currentQuery) {
      return;
    }

    this.fetchSearchMoviesByQuery(currentQuery);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = new URLSearchParams(prevProps.location.search).get(
      'query',
    );
    const nextQuery = new URLSearchParams(this.props.location.search).get(
      'query',
    );

    if (prevQuery === nextQuery) {
      return;
    }
    this.fetchSearchMoviesByQuery(nextQuery);
  }

  fetchSearchMoviesByQuery = query => {
    this.setState({ loading: true });

    fetchSearchMovies(query)
      .then(movies => this.setState({ movies }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  setSearchQuery = Searchquery => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${Searchquery}`,
    });
  };

  render() {
    const { movies, error, loading } = this.state;
    const { location } = this.props;

    return (
      <div>
        <SearchForm onSubmit={this.setSearchQuery} />
        {error && <p>Whoops, something went wrong: {error}</p>}
        {loading && <Spinner />}
        {movies.length > 0 && !loading && (
          <ul className={styles.filmMenu}>
            {movies.map(({ id, poster_path }) => (
              <li key={id} className={styles.filmMenuList}>
                <NavLink
                  to={{
                    pathname: `${routes.SEARCH_MOVIES}/${id}`,
                    state: { from: location },
                  }}
                >
                  <img
                    src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt=""
                    height="300px"
                  />
                </NavLink>
              </li>
            ))}
          </ul>
        )}
        {movies.length > 0 && !loading && (
          <Button clickButton={this.fetchSearchMoviesByQuery} />
        )}
      </div>
    );
  }
}

export default MoviesPage;
