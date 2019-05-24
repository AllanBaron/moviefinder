import React from 'react';
import PropTypes from 'prop-types';

import Base from '../Base';

import { Breadcrumbs, MoviePosterGrid } from '../../components';

import { SectionBaseContainer } from './styles';

const SectionBase = ({ title, dir, movies }) => (
  <Base
    page={() => (
      <SectionBaseContainer>
        <Breadcrumbs dir={dir} title={title} />
        <div className="uk-container">
          <div className="uk-margin-medium-top uk-margin-medium-bottom">
            <MoviePosterGrid movies={movies} />
          </div>
        </div>
      </SectionBaseContainer>
    )}
  />
);

SectionBase.defaultProps = {
  movies: [],
};

SectionBase.propTypes = {
  title: PropTypes.string.isRequired,
  dir: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string,
    }),
  ).isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }),
  ),
};

export default SectionBase;
