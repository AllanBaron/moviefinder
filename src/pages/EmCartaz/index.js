import React from 'react';
import PropTypes from 'prop-types';

import Base from '../Base';

const EmCartaz = (props) => {
  const { match } = props;

  return (
    <Base
      currentUrlPage={match.url}
      page={() => (
        <div className="uk-container">
          <h1>Página - Filmes em Cartaz</h1>
        </div>
      )}
    />
  );
};

EmCartaz.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default EmCartaz;
