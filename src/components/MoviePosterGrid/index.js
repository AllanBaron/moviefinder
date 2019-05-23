import React from 'react';
import PropTypes from 'prop-types';

import { MoviePosterGridContainer } from './styles';

import MoviePosterCollection from '../MoviePosterCollection';

const MoviePosterGrid = ({ movies }) => (
  <MoviePosterGridContainer>
    <div className="uk-child-width-1-5@s" uk-grid="">
      <MoviePosterCollection movies={movies} />
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
