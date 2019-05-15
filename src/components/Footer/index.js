import React from 'react';
import { title } from '../../services/app-info';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div />
      {`Copyright © ${year} - ${title} | Todos os direitos reservados.`}
    </footer>
  );
};

export default Footer;
