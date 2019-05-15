import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Breadcrumbs } from '../../components';

import Base from '../Base';

const EmCartaz = (props) => {
  const { match } = props;

  return (
    <Base
      currentUrlPage={match.url}
      page={() => (
        <Fragment>
          <Breadcrumbs dir="Home / Filmes" title="Em Cartaz" />
          <div className="uk-container" />
        </Fragment>
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
