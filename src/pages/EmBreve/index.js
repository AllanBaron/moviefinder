import React from 'react';
import PropTypes from 'prop-types';

import Base from '../Base';

const EmBreve = (props) => {
  const { match } = props;

  return (
    <Base
      currentUrlPage={match.url}
      page={() => (
        <div className="uk-container">
          <h1>Página - Filmes em Breve</h1>
        </div>
      )}
    />
  );
};

EmBreve.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default EmBreve;
