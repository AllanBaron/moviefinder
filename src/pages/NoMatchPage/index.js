import React from 'react';
import PropTypes from 'prop-types';

import Base from '../Base';

const NoMatchPage = (props) => {
  const { match } = props;

  return (
    <Base
      currentUrlPage={match.url}
      page={() => (
        <div className="uk-container">
          <h1>Página - 404</h1>
        </div>
      )}
    />
  );
};

NoMatchPage.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default NoMatchPage;
