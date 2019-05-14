import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default class EmCartaz extends Component {
  state = {};

  render() {
    const { url } = this.props.match;

    return (
      <Fragment>
        <Header activePage={url} />

        <div>
          <h1>Página - Filmes em Cartaz</h1>
        </div>

        <Footer />
      </Fragment>
    );
  }
}

EmCartaz.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

EmCartaz.getDefaultProps = {
  match: '',
};
