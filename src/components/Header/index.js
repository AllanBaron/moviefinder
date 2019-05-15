import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { title, menu } from '../../services/app-info';

import SocialIcons from '../SocialIcons';
import UserLocation from './UserLocation';

import {
  SubMenu, SectionLeft, SectionRight, Menu,
} from './styles';

export default class Header extends Component {
  state = {
    metaTitle: '',
  };

  componentDidMount() {
    const { activePage } = this.props;
    const test = menu.find(item => item.url === activePage);

    this.setState({ metaTitle: test.title });
  }

  render() {
    const { activePage } = this.props;
    const { metaTitle } = this.state;

    return (
      <Fragment>
        <Helmet>
          <title>{`${metaTitle} | ${title}`}</title>
        </Helmet>

        <header>
          <SubMenu>
            <div className="uk-container uk-flex">
              <SectionLeft>
                <SocialIcons />
              </SectionLeft>

              <SectionRight>
                <UserLocation />
              </SectionRight>
            </div>
          </SubMenu>

          <Menu>
            <ul>
              {menu.map(item => (
                <li key={item.id}>
                  <Link to={item.url} className={activePage === item.url ? 'active' : ''}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Menu>
        </header>
      </Fragment>
    );
  }
}

Header.propTypes = {
  activePage: PropTypes.string.isRequired,
};
