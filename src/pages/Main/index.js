import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Header, Footer } from '../../components';

const Main = (props) => {
  const { match } = props;

  return (
    <Fragment>
      <Header activePage={match.url} />

      <div>
        <h1>Página Home</h1>
      </div>

      <Footer />
    </Fragment>
  );
};

Main.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Main;
