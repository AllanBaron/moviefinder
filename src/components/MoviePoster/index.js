import React from 'react';
import PropTypes from 'prop-types';

import { MoviePosterContainer } from './styles';

const MoviePoster = ({ posterUrl, posterTitle }) => (
  <MoviePosterContainer>
    <img
      className="uk-transition-scale-up uk-transition-opaque"
      src={posterUrl}
      alt={posterTitle}
    />
  </MoviePosterContainer>
);

MoviePoster.propTypes = {
  posterUrl: PropTypes.string.isRequired,
  posterTitle: PropTypes.string.isRequired,
};

export default MoviePoster;
