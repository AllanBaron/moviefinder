import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../components';

import Base from '../Base';

const EmBreve = () => {
  const dir = [{ id: 0, title: 'Home', url: '/' }, { id: 1, title: 'Filmes' }];

  return (
    <Base
      page={() => (
        <Fragment>
          <Breadcrumbs dir={dir} title="Em Breve" />
          <div className="uk-container" />
        </Fragment>
      )}
    />
  );
};

export default EmBreve;
