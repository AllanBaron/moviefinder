import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Header, Footer } from '../../components';

const EmCartaz = (props) => {
  const { match } = props;

  return (
    <Fragment>
      <Header activePage={match.url} />

      <div>
        <h1>Página - Filmes em Cartaz</h1>
      </div>

      <Footer />
    </Fragment>
  );
};

EmCartaz.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default EmCartaz;
