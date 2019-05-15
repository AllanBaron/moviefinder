import React from 'react';
import PropTypes from 'prop-types';

import Base from '../Base';

const Main = (props) => {
  const { match } = props;

  return (
    <Base
      currentUrlPage={match.url}
      page={() => (
        <div className="uk-container">
          <h1>Página - Home</h1>
        </div>
      )}
    />
  );
};

Main.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Main;
