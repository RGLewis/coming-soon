import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';

export const StyledFooter = styled.footer`
  padding: ${pxToRem(40)} 0;
`;

export const FooterUnorderedList = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const FooterListItem = styled.li``;
