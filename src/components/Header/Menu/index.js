import React from 'react';
import { Link } from 'react-router-dom';

import { menu } from '../../../services/app-info';

import { MenuContainer } from './styles';

const Menu = () => {
  const { pathname: currentUrl } = window.location;

  return (
    <MenuContainer>
      <ul>
        {menu.map(item => (
          <li key={item.id}>
            <Link to={item.url} className={currentUrl === item.url ? 'active' : ''}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </MenuContainer>
  );
};

export default Menu;