import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Routes from './routes';
import { GlobalStyle, Offline } from './styles';

export default class App extends Component {
  state = {
    online: navigator.onLine,
  };

  componentDidMount() {
    window.addEventListener('online', this.handleNetworkChange);
    window.addEventListener('offline', this.handleNetworkChange);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleNetworkChange);
    window.removeEventListener('offline', this.handleNetworkChange);
  }

  handleNetworkChange = () => {
    this.setState({ online: navigator.onLine });
  };

  render() {
    const { online } = this.state;
    return (
      <Fragment>
        <Helmet>
          <title>Movie Finder</title>
          <meta
            name="description"
            content="Encontre o cinema mais perto de você pelo menor proço."
          />
        </Helmet>

        <Routes />

        {!online && <Offline>Você está offline</Offline>}
        <GlobalStyle />
      </Fragment>
    );
  }
}
