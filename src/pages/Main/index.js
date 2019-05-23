import React, { Component } from 'react';

import Base from '../Base';
import { SectionPreview } from '../../components';

import api from '../../services/api';
import { pages } from '../../services/app-info';

class Main extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await api.get('movies');

    this.setState({ movies: response.data });
  }

  render() {
    const { movies } = this.state;

    return (
      <Base
        page={() => (
          <div className="uk-container">
            <h1>Página - Home</h1>
            {pages
              .filter(item => 'movieStatus' in item)
              .map(section => (
                <SectionPreview
                  key={section.title}
                  title={section.optionalTitle}
                  url={section.url}
                  movies={movies.filter(movie => movie.status === section.movieStatus)}
                />
              ))}
          </div>
        )}
      />
    );
  }
}

/* const Main = () => (
  <Base
    page={() => (
      <div className="uk-container">
        <h1>Página - Home</h1>
      </div>
    )}
  />
); */

export default Main;
