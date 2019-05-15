import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Breadcrumbs } from '../../components';

import Base from '../Base';

const EmBreve = (props) => {
  const { match } = props;

  return (
    <Base
      currentUrlPage={match.url}
      page={() => (
        <Fragment>
          <Breadcrumbs dir="Home / Filmes" title="Em Breve" />
          <div className="uk-container" />
        </Fragment>
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
