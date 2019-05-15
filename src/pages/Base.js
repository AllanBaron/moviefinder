import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Header, Footer } from '../components';

const Base = (props) => {
  const { currentUrlPage, page } = props;

  return (
    <Fragment>
      <Header currentUrlPage={currentUrlPage} />

      <section uk-height-viewport="expand: true">{page()}</section>

      <Footer />
    </Fragment>
  );
};

Base.propTypes = {
  currentUrlPage: PropTypes.string.isRequired,
  page: PropTypes.func.isRequired,
};

export default Base;
