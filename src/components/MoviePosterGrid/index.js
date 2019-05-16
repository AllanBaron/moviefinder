import React from 'react';
import PropTypes from 'prop-types';

import { MoviePosterGridContainer } from './styles';

import MoviePoster from '../MoviePoster';

const MoviePosterGrid = ({ movies }) => (
  <MoviePosterGridContainer>
    <div className="uk-grid">
      {movies
        && movies.map(movie => (
          <div key={movie.id} className={`uk-width-1-${movies.length}`}>
            <MoviePoster posterUrl={movie.poster} posterTitle={movie.title} />
          </div>
        ))}
    </div>
  </MoviePosterGridContainer>
);

MoviePosterGrid.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MoviePosterGrid;
