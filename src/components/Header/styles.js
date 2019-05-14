import styled from 'styled-components';
import { ColorPrimary } from '../../styles';

export const SectionLeft = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;

  a {
    color: #5a5a5a;
    margin-right: 15px;
    padding-bottom: 2px;

    svg {
      font-size: 20px;
    }

    &:hover {
      .icon-facebook {
        color: #3b5998;
      }
      .icon-instagram {
        color: #c13584;
      }
      .icon-twitter {
        color: #00a3e0;
      }
      .icon-youtube {
        color: #e60000;
      }
    }
  }
`;

export const SectionRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;

  a {
    color: #5a5a5a;
    text-decoration: none;

    &:hover {
      svg {
        color: ${ColorPrimary};
      }
    }

    svg {
      font-size: 15px;
      margin-right: 8px;
      padding-bottom: 4px;
    }
  }
`;

export const SubMenu = styled.div`
  background: #ececec;
  padding: 8px 0;
`;

export const Menu = styled.section`
  a.active {
    color: red;
  }
`;
