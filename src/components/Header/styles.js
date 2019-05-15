import styled from 'styled-components';
import { ColorLightGrey } from '../../styles';

export const SectionLeft = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
`;

export const SectionRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;

export const SubMenu = styled.div`
  background: ${ColorLightGrey};
  padding: 8px 0;
`;

export const Menu = styled.section`
  a.active {
    color: red;
  }
`;
