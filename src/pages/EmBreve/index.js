import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Breadcrumbs } from '../../components';

import Base from '../Base';

const EmBreve = (props) => {
  const { match } = props;
  const dir = [{ id: 0, title: 'Home', url: '/' }, { id: 1, title: 'Filmes' }];

  return (
    <Base
      currentUrlPage={match.url}
      page={() => (
        <Fragment>
          <Breadcrumbs dir={dir} title="Em Breve" />
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
