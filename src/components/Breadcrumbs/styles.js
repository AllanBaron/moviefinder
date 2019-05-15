import styled from 'styled-components';
import { ColorPrimary, ColorLightGrey } from '../../styles';

export const BreadcrumbsContainer = styled.section`
  background: ${ColorLightGrey};
  padding: 30px;
  font-weight: bold;

  h1 {
    font-size: 30px;
    margin-top: 5px;
    font-weight: bold;
    color: ${ColorPrimary};
  }
`;
