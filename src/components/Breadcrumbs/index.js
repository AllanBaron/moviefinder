import React from 'react';
import PropTypes from 'prop-types';

import { BreadcrumbsContainer } from './styles';

const Breadcrumbs = (props) => {
  const { dir, title } = props;

  return (
    <BreadcrumbsContainer>
      <div className="uk-container">
        <div>{dir}</div>
        <h1>{title}</h1>
      </div>
    </BreadcrumbsContainer>
  );
};

Breadcrumbs.propTypes = {
  dir: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Breadcrumbs;
