import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Header, Footer } from '../../components';

const EmBreve = (props) => {
  const { match } = props;

  return (
    <Fragment>
      <Header activePage={match.url} />

      <div>
        <h1>Página - Filmes em Breve</h1>
      </div>

      <Footer />
    </Fragment>
  );
};

EmBreve.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default EmBreve;
