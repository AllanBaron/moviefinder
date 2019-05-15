import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';
import {
  SubMenu, SectionLeft, SectionRight, Menu,
} from './styles';

import { title, menu } from '../../services/app-info';

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
                <a href="#facebook">
                  <FaFacebookSquare className="icon-facebook" />
                </a>
                <a href="#instagram">
                  <FaInstagram className="icon-instagram" />
                </a>
                <a href="#twitter">
                  <FaTwitter className="icon-twitter" />
                </a>
                <a href="#youtube">
                  <FaYoutube className="icon-youtube" />
                </a>
              </SectionLeft>

              <SectionRight>
                <a href="#localization">
                  <FaMapMarkerAlt />
                  <span>Encontre o cinema mais perto</span>
                </a>
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
